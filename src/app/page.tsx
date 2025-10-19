"use client"

import React, { useState } from 'react';
import { StartModal } from '@/app/components/Modals';
import Training from '@/app/components/Training';

export default function Home() {
    const [startModalIsOpen, setStartModalIsOpen] = useState<boolean>(true);
    const [time, setTime] = useState<number>(0);

    const startTraining = (time: number) => {
        setStartModalIsOpen(false)
        setTime(time)
    }

    const onRestartTraining = () => {
        setStartModalIsOpen(true)
        setTime(0)
    }

    return (
        <div className="min-h-screen flex flex-col items-center">
            <StartModal
                isOpen={startModalIsOpen}
                onStart={startTraining}
            />
            <main>
                {time > 0 && <Training time={time} onRestartTraining={onRestartTraining}/>}
            </main>
        </div>
    );
}
