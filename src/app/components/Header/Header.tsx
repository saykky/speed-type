"use client"

import {Logo, Information} from "@/app/components/Header";
import SwitcherTheme from "@/app/components/SwitcherTheme";
import SwitcherLanguage from '@/app/components/SwitcherLanguage'

type HeaderProps = {
    timeLeft: number
    errors: number
    accuracy: number
}

export default function Header({timeLeft, errors, accuracy}: HeaderProps) {
    return (
        <div className="max-w-[1200px] m-auto pt-[30px] flex items-center justify-between pb-2">
            <Logo />
                <Information
                    errors={errors}
                    timeLeft={timeLeft}
                    accuracy={accuracy} />
            <div className="flex gap-10">
                <SwitcherTheme />
                <SwitcherLanguage />
            </div>
        </div>
    )
}