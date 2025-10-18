"use client"

import React from "react";
import Header from "@/app/components/Header/Header";
import {Keyboard} from "@/app/components/Keyboard";
import useTypingWords from "@/app/hooks/useTypingWords";
import {WORDS_1} from "@/app/const/words";
import {Words} from "@/app/components/Words";
import useTypingTrainer from "@/app/hooks/useTypingTrainer";

export default function Home() {
    const {
        currentIndex,
        currentCharIndex,
        errors,
        activeKey,
        timeLeft,
        accuracy
    } = useTypingTrainer(WORDS_1)

    const {visibleWords, stylesWords} = useTypingWords(WORDS_1, currentIndex)

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

                {/* author */}
                <p className="font-bold text-zinc-800 dark:text-gray-300 text-[30px] pt-[10%]">Dev by @saykky</p>
            </main>
        </div>
    );
}
