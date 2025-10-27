import useTypingTrainer from '@/app/hooks/useTypingTrainer';
import useTypingWords from '@/app/hooks/useTypingWords';
import { Header } from '@/app/components/Header';
import { Words } from '@/app/components/Words';
import Author from '@/app/components/Author';
import { Keyboard } from '@/app/components/Keyboard';
import { EndModal } from '@/app/components/Modals';
import { useEffect, useMemo, useState } from 'react';
import { getRandomWords } from '@/app/lib/utils';
import { WORDS_EN, WORDS_RU } from '@/app/const/words';

type TrainingProps = {
    time: number
    keyboardLocale: 'en' | 'ru'
    onRestartTraining: () => void
}

export default function Training({time, onRestartTraining, keyboardLocale}: TrainingProps) {
    const [endModalIsOpen, setEndModalIsOpen] = useState(false);
    const words = useMemo(() => getRandomWords(keyboardLocale == 'en' ? WORDS_EN : WORDS_RU), [])

    const {
        currentIndex,
        currentCharIndex,
        errors,
        errorCount,
        activeKey,
        timeLeft,
        accuracy,
        charCount,
        cpm
    } = useTypingTrainer(words, time, keyboardLocale);

    const { visibleWords, stylesWords } = useTypingWords(words, currentIndex);

    const restartTraining = () => {
        setEndModalIsOpen(false)
        onRestartTraining()
    }

    useEffect(() => {
        if (timeLeft <= 0) setEndModalIsOpen(true)
    }, [timeLeft])

    return (
        <div>
            <Header timeLeft={timeLeft} errors={errorCount} accuracy={accuracy} />
            <Words
                words={visibleWords}
                styles={stylesWords}
                currentWordVisibleIndex={1}
                currentCharIndex={currentCharIndex}
                errors={errors}
            />
            <Keyboard
                activeKey={activeKey}
                keyboardLocale={keyboardLocale}
            />
            <Author />
            <EndModal
                isOpen={endModalIsOpen}
                errorCount={errorCount}
                accuracy={accuracy}
                charCount={charCount}
                cpm={cpm}
                onRestartTraining={restartTraining}
            />
        </div>
    );
}