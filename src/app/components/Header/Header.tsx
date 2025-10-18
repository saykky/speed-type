"use client"

import {Logo, Information} from "@/app/components/Header";
import Switcher from "@/app/components/Switcher";

type HeaderProps = {
    timeLeft: number
    errors: number
    accuracy: number
}

export default function Header({timeLeft, errors, accuracy}: HeaderProps) {
    return (
        <div className="max-w-[1200px] m-auto pt-[30px] flex items-center justify-between">
            <Logo />
                <Information
                    errors={errors}
                    timeLeft={timeLeft}
                    accuracy={accuracy} />
            <Switcher />
        </div>
    )
}