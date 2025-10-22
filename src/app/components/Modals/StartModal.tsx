'use client'

import React from 'react'
import { LogoBlock } from '@/app/components/Modals'
import { Leaderboard } from '@/app/components/Leaderboard'
import SwitcherLanguage from '@/app/components/SwitcherLanguage'
import { useTranslation } from '@/app/components/TranslationContext/TranslationContext'

type StartModalProps = {
    isOpen: boolean
    onStart: (time: number) => void
}

export default function StartModal({ isOpen, onStart }: StartModalProps) {
    const { t } = useTranslation()

    if (!isOpen) return null

    return (
        <div className='fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm'>
            <div className='bg-white dark:bg-zinc-900 p-8 rounded-2xl max-w-[1200px] w-full mx-4 shadow-2xl border border-gray-200 dark:border-zinc-700'>
                <div className='flex justify-center mb-6'>
                    <LogoBlock />
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div className='space-y-6'>
                        <h1 className='text-3xl font-bold text-left text-gray-900 dark:text-white mb-2'>
                            {t('readyType')}
                        </h1>

                        <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{t('rules')}</p>

                        <div>
                            <div className='flex gap-4 bg-gray-100 dark:bg-zinc-800 p-4 rounded-xl'>
                                {[15, 30, 60, 120].map((time) => (
                                    <button
                                        key={time}
                                        onClick={() => onStart(time)}
                                        className='flex-1 py-3 px-6 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 cursor-pointer'
                                    >
                                        <span className='text-lg font-semibold'>{time}</span>
                                        <span className='text-sm ml-1'>{t('second')}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className='flex justify-start items-center gap-4'>
                            <p className="text-[24px]">{t('changeLanguage')}</p>
                            <SwitcherLanguage />
                        </div>
                    </div>


                    <Leaderboard countResults={5} />
                </div>
            </div>
        </div>
    )
}
