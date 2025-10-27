import React from 'react';
import { Code } from 'lucide-react';

export default function Author() {
    return (
        <div className='pt-[20px] text-center'>
            <span className='inline-flex items-center gap-2 text-[18px] md:text-[22px] tracking-wide'>
                <Code className='w-5 h-5 text-purple-500 dark:text-purple-400' />
                <span className='flex gap-3 text-zinc-800 dark:text-gray-300'>
                    dev by
                    <a
                        href='https://github.com/saykky'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity underline underline-offset-2'
                    >
                        @saykky
                    </a>
                </span>
            </span>
        </div>
    );
}
