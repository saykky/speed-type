"use client"

import {JSX} from "react";

import {Logo, Information} from "@/app/components/Header";
import Switcher from "@/app/components/Switcher";

export default function Header(): JSX.Element {
    return (
        <div className="max-w-[1200px] m-auto pt-[30px] flex items-center justify-between">
            <Logo />
                <Information errors={30} timeLeft={15} accuracy={90} />
            <Switcher />
        </div>
    )
}