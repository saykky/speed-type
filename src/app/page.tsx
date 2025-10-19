"use client"

import React from "react";
import Header from "@/app/components/Header/Header";
import {Keyboard} from "@/app/components/Keyboard";
import useTypingWords from "@/app/hooks/useTypingWords";
import {WORDS} from "@/app/const/words";
import {Words} from "@/app/components/Words";
import useTypingTrainer from "@/app/hooks/useTypingTrainer";
import Author from "@/app/components/Author/Author";

export default function Home() {
    const time: number = 30

    const {
        currentIndex,
        currentCharIndex,
        errors,
        activeKey,
        timeLeft,
        accuracy
    } = useTypingTrainer(WORDS, time)

    const {visibleWords, stylesWords} = useTypingWords(WORDS, currentIndex)

    return (
        <div className="min-h-screen flex flex-col items-center">
            <main>
                <Header
                    timeLeft={timeLeft}
                    errors={errors.length}
                    accuracy={accuracy}
                />
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

                <Author />
            </main>
        </div>
    );
}
