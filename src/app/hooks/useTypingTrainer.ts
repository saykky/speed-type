import {useState, useEffect, useRef} from "react";

type UseTypingTrainerReturn = {
    currentIndex: number
    currentCharIndex: number
    errors: number[]
    errorCount: number
    activeKey: string | null
    timeLeft: number
    accuracy: number
    charCount: number
    cpm: number
}

export default function useTypingTrainer(words: string[], time: number): UseTypingTrainerReturn {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0)
    const [errors, setErrors] = useState<number[]>([])
    const [errorCount, setErrorCount] = useState<number>(0)
    const [typedChars, setTypedChars] = useState<number>(0);
    const [charCount, setCharCount] = useState<number>(0)
    const [correctChars, setCorrectChars] = useState<number>(0);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [timeLeft, setTimeLeft] = useState<number>(time)
    const [isRunning, setIsRunning] = useState<boolean>(false);

    const currentIndexRef = useRef(currentIndex)
    const currentCharIndexRef = useRef(currentCharIndex)
    const wordsRef = useRef(words)
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
    const isRunningRef = useRef<boolean>(isRunning)
    const timeLeftRef = useRef<number>(timeLeft)
    const startTimeRef = useRef<number | null>(null)

    const clearTimer = () => {
        if (intervalRef.current) {
            window.clearInterval(intervalRef.current)
            intervalRef.current = null
        }
    }

    useEffect(() => {
        currentIndexRef.current = currentIndex
        currentCharIndexRef.current = currentCharIndex
        wordsRef.current = words
        isRunningRef.current = isRunning
        timeLeftRef.current = timeLeft
    }, [currentIndex, currentCharIndex, words, isRunning, timeLeft]);

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (!/^[a-zA-Z]$/.test(e.key) || currentIndexRef.current >= wordsRef.current.length) return

            if (!isRunningRef.current) setIsRunning(true)
            if (timeLeftRef.current <= 0) return

            setActiveKey(e.key)

            if (!startTimeRef.current) {
                startTimeRef.current = Date.now()
            }

            const word = wordsRef.current[currentIndexRef.current]
            const currentChar = word[currentCharIndexRef.current]

            setTypedChars(prev => prev + 1)

            if (e.key === currentChar) {
                setCorrectChars(prev => prev + 1)
            } else {
                setErrors(prev => [...prev, currentCharIndexRef.current])
                setErrorCount(prev => prev + 1)
            }

            setCharCount(prev => prev + 1)

            const newCharIndex = currentCharIndexRef.current + 1
            setCurrentCharIndex(newCharIndex)

            if (newCharIndex >= word.length) {
                setCurrentIndex(prev => prev + 1)
                setCurrentCharIndex(0)
                setErrors([])

                const newWordIndex = currentIndexRef.current + 1
                if (newWordIndex >= wordsRef.current.length) {
                    setIsRunning(false)
                    clearTimer()
                }
            }
        }

        const keyUp = () => setActiveKey(null)

        window.addEventListener("keydown", keyDown)
        window.addEventListener("keyup", keyUp)

        return () => {
            window.removeEventListener("keydown", keyDown)
            window.removeEventListener("keyup", keyUp)
        }
    }, [])

    useEffect(() => {
        if (!isRunning || timeLeftRef.current <= 0) return

        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearTimer()
                    setIsRunning(false)
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearTimer()
    }, [isRunning]);

    const accuracy: number = typedChars ? Math.round((correctChars / typedChars) * 100) : 0

    const elapsedMinutes = startTimeRef.current ? (Date.now() - startTimeRef.current) / 1000 / 60 : 0
    const cpm = elapsedMinutes > 0 ? Math.round(correctChars / elapsedMinutes) : 0

    console.log(cpm)

    return {
        currentIndex,
        currentCharIndex,
        errors,
        errorCount,
        activeKey,
        timeLeft,
        accuracy,
        charCount,
        cpm
    }
}