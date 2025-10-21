import React, { useState } from 'react';

interface SaveResultProps {
    onSave: (name: string) => void;
}

export default function SaveResult({ onSave }: SaveResultProps) {
    const [name, setName] = useState<string>('');
    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const handleSave = () => {
        onSave(name === "" ? "anon" : name)
        setIsDisabled(true)
    };

    return (
        <div className="flex flex-col items-center max-w-[400px] mx-auto pb-4 space-y-4">
            <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100">
                Save result?
            </h3>

            <div className="w-full flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    Enter your name (default name - anon)
                </label>
                <input
                    id="name"
                    type="text"
                    placeholder="name"
                    value={name}
                    disabled={isDisabled}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 placeholder-zinc-500 dark:placeholder-zinc-400"
                />
            </div>

            <button
                onClick={handleSave}
                disabled={isDisabled}
                className="w-full px-6 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transition-colors duration-200 shadow-md hover:shadow-lg cursor-pointer"
            >
                {isDisabled ? "Result saved" : "Save"}
            </button>
        </div>
    );
}