'use client'

import React from 'react'
import { LogoBlock } from '@/app/components/Modals'
import { Leaderboard } from '@/app/components/Leaderboard'

type StartModalProps = {
    isOpen: boolean
    onStart: (time: number) => void
}

export default function StartModal({ isOpen, onStart }: StartModalProps) {
    if (!isOpen) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50'>
            <div className='bg-white dark:bg-zinc-800 p-6 rounded-xl max-w-[1000px] shadow-2xl'>
                <LogoBlock />
                <p className='my-10 text-center'>
                    Enter the words as quickly and accurately as possible. Your speed, accuracy, and number of errors will be monitored. Select the
                    desired time for the test by pressing the button. The countdown will start automatically after entering the first letter.
                </p>
                <div className='flex justify-center'>
                    <div className='flex gap-5'>
                        {[15, 30, 60, 120].map((time) => (
                            <button
                                key={time}
                                className='w-[100px] py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition cursor-pointer'
                                onClick={() => onStart(time)}
                            >
                                {time} sec
                            </button>
                        ))}
                    </div>
                </div>
                <Leaderboard countResults={5} />
            </div>
        </div>
    )
}
