import useTypingTrainer from '@/app/hooks/useTypingTrainer';
import useTypingWords from '@/app/hooks/useTypingWords';
import { Header } from '@/app/components/Header';
import { Words } from '@/app/components/Words';
import Author from '@/app/components/Author';
import { Keyboard } from '@/app/components/Keyboard';
import { EndModal } from '@/app/components/Modals';
import { useEffect, useState } from 'react';
import getRandomWords from '@/app/lib/randomWords';
import { WORDS } from '@/app/const/words';

type TrainingProps = {
    time: number
    onRestartTraining: () => void
}

export default function Training({time, onRestartTraining}: TrainingProps) {
    const [endModalIsOpen, setEndModalIsOpen] = useState(false);
    const words = getRandomWords(WORDS)

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
    } = useTypingTrainer(words, time);

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