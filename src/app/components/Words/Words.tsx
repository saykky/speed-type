import React from 'react'
import {STATUS} from "@/app/const/words";
import {Letter} from "@/app/components/Words";

type WordsProps = {
    words: string[],
    styles: string[]
    currentWordVisibleIndex: number
    currentCharIndex: number
    errors: number[]
}

export default function Words({words, styles, currentWordVisibleIndex, currentCharIndex, errors}: WordsProps) {
    return (
        <div className="py-[50px] flex gap-[10px] justify-center font-bold text-[50px]">
            {words.map((word, wordIndex) => {
                const isCurrent = wordIndex === currentWordVisibleIndex

                return (
                    <div
                        key={wordIndex}
                        className={styles[wordIndex]}
                    >
                        {word.split("").map((char, charIndex) => {
                            let status: STATUS = "pending"

                            if (isCurrent) {
                                if (charIndex === currentCharIndex) status = "active"
                                else if (charIndex < currentCharIndex) status = errors.includes(charIndex) ? "wrong" : "correct"
                        }

                            return (
                                <Letter
                                    key={`${char}-${charIndex}`}
                                    char={char}
                                    status={status}
                                />
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}