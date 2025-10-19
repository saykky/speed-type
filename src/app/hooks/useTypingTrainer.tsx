import {useState, useEffect, useRef} from "react";

type UseTypingTrainerReturn = {
    currentIndex: number
    currentCharIndex: number
    errors: number[]
    activeKey: string | null
    timeLeft: number
    accuracy: number
}

export default function useTypingTrainer(words: string[], time: number): UseTypingTrainerReturn {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0)
    const [errors, setErrors] = useState<number[]>([])
    const [typedChars, setTypedChars] = useState<number>(0);
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
            if (!/^[a-zA-Z]$/.test(e.key)) return
            if (currentIndexRef.current >= wordsRef.current.length) return

            if (!isRunningRef.current) setIsRunning(true)
            if (!isRunningRef.current || timeLeftRef.current <= 0) return

            setActiveKey(e.key)

            const word = wordsRef.current[currentIndexRef.current]
            const currentChar = word[currentCharIndexRef.current]

            setTypedChars(prev => prev + 1)

            if (e.key === currentChar) {
                setCorrectChars(prev => prev + 1)
            } else {
                setErrors(prev => [...prev, currentCharIndexRef.current])
            }

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
        if (!isRunningRef.current || timeLeftRef.current <= 0) return

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
    }, []);

    const accuracy: number = typedChars ? Math.round((correctChars / typedChars) * 100) : 0

    return {
        currentIndex,
        currentCharIndex,
        errors,
        activeKey,
        timeLeft,
        accuracy
    }
}