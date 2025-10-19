import React from 'react';
import { LogoBlock } from '@/app/components/Modals';

type EndModalProps = {
    isOpen: boolean
    errorCount: number
    accuracy: number
    charCount: number
    cpm: number
    onRestartTraining: () => void
}

export default function EndModal({isOpen, errorCount, accuracy, charCount, onRestartTraining, cpm}: EndModalProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-zinc-800/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl max-w-[800px] w-full mx-4 max-h-[90vh] overflow-y-auto">
                <div className="text-center mb-8">
                    <LogoBlock />
                    <h2 className="text-4xl font-bold text-zinc-800 dark:text-zinc-100 mt-4 mb-2">
                        Result
                    </h2>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg">
                        Great job! Here are your stats
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 p-6 rounded-xl border border-red-200 dark:border-red-700/50">
                        <h3 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-2">Errors</h3>
                        <p className="text-6xl font-bold text-red-500 dark:text-red-300">{errorCount}</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl border border-green-200 dark:border-green-700/50">
                        <h3 className="text-2xl font-semibold text-green-600 dark:text-green-400 mb-2">Accuracy</h3>
                        <p className="text-6xl font-bold text-green-500 dark:text-green-300">{accuracy}%</p>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-xl border border-blue-200 dark:border-blue-700/50">
                        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Count characters</h3>
                        <p className="text-6xl font-bold text-blue-500 dark:text-blue-300">{charCount}</p>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-xl border border-orange-200 dark:border-orange-700/50">
                        <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-2">Characters per minute</h3>
                        <p className="text-6xl font-bold text-orange-500 dark:text-orange-300">{cpm}</p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="px-8 py-3 cursor-pointer bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 font-semibold text-lg shadow-md hover:shadow-lg transform hover:scale-105"
                        onClick={() => onRestartTraining()}
                    >
                        Try again?
                    </button>
                </div>
            </div>
        </div>
    )
}