import {useMemo} from "react";

type useTypingTrainerReturn = {
    visibleWords: string[],
    stylesWords: string[]
}

export default function useTypingWords(words: string[], currentIndex: number): useTypingTrainerReturn {
    return useMemo(() => {
        const prevWord = currentIndex > 0 ? words[currentIndex - 1] : ""
        const currentWord = words[currentIndex] || ""
        const nextWord = currentIndex < words.length - 1 ? words[currentIndex + 1]: ""

        const visibleWords = [prevWord, currentWord, nextWord]

        const stylesWords = [
            prevWord && currentWord ? "opacity-10": "opacity-0",
            "opacity-100",
            nextWord ? "opacity-30": "opacity-0"
        ]

        return {visibleWords, stylesWords}
    }, [words, currentIndex])
}