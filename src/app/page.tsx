"use client"

import React from "react";
import {useState, useEffect} from "react";
import Header from "@/app/components/Header/Header";
import {Keyboard} from "@/app/components/Keyboard";
import useTypingWords from "@/app/hooks/useTypingWords";
import {WORDS_1} from "@/app/const/words";
import {Words} from "@/app/components/Words";

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState<number>(0)
    const [currentCharIndex, setCurrentCharIndex] = useState<number>(0)
    const [errors, setErrors] = useState<number[]>([])

    const [activeKey, setActiveKey] = useState<string | null>(null);

    const {visibleWords, stylesWords} = useTypingWords(WORDS_1, currentIndex)

    useEffect(() => {
        const keyDown = (e: KeyboardEvent) => {
            if (!/^[a-zA-Z]$/.test(e.key) || currentIndex === WORDS_1.length) return

            setActiveKey(e.key)

            const word = WORDS_1[currentIndex]
            const currentChar = word[currentCharIndex]

            if (e.key === currentChar) {
                setCurrentCharIndex(prev => prev + 1)
            } else {
                setErrors(prev => [...prev, currentCharIndex])
                setCurrentCharIndex(prev => prev + 1)
            }

            if (currentCharIndex + 1 >= word.length) {
                setCurrentIndex(prev => prev + 1)
                setCurrentCharIndex(0)
                setErrors([])
            }
        }

        const keyUp = () => setActiveKey(null)

        window.addEventListener("keydown", keyDown)
        window.addEventListener("keyup", keyUp)

        return () => {
            window.removeEventListener("keydown", keyDown)
            window.removeEventListener("keyup", keyUp)
        }
    }, [currentIndex, currentCharIndex])

    return (
        <div className="min-h-screen flex flex-col items-center">
            <main>
                <Header />
                <Words
                    words={visibleWords}
                    styles={stylesWords}
                    currentWordVisibleIndex={1}
                    currentCharIndex={currentCharIndex}
                    errors={errors}
                />
                <Keyboard
                    activeKey={activeKey}
                />
            </main>
        </div>
    );
}
