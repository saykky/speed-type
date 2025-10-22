"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import {JSX, useEffect} from "react";

export default function SwitcherTheme() : JSX.Element{
    const { resolvedTheme, setTheme } = useTheme();
    const [open, setOpen] = React.useState(false);

    const toggleOpen = () => setOpen((prev) => !prev);

    const changeTheme = (theme: string, e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        setTheme(theme)
        setOpen(false)
    }

    const menuRef = React.useRef<HTMLDivElement>(null);
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const clickOutside = (e: MouseEvent) => {
            const target = e.target as Node
            if (!menuRef.current?.contains(target) && !buttonRef.current?.contains(target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", clickOutside)
        return () => document.removeEventListener("mousedown", clickOutside)
    }, [])

    return (
        <div className="relative inline-block">
            <button
                onClick={toggleOpen}
                className="relative p-1 flex border rounded-xl border-zinc-800 dark:text-white"
                ref={buttonRef}
            >
                <Sun color="black" className={`inline-block h-[30px] w-[30px] transition-transform ${resolvedTheme === "dark" ? "scale-0 rotate-90" : "scale-100 rotate-0"}`} />
                <Moon className={`h-[30px] w-[30px] transition-transform ${resolvedTheme === "dark" ? "scale-100 rotate-0" : "scale-0 -rotate-90"}`} />
                <span className="sr-only">Toggle theme</span>
            </button>

            {open && (
                <div
                    className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-xl dark:bg-zinc-800 dark:border-zinc-800 shadow-lg z-10"
                    ref={menuRef}
                >
                    <button
                        className="block w-full text-left px-4 py-2 hover:rounded-xl  hover:bg-gray-100 dark:hover:bg-zinc-700"
                        onClick={(e) => changeTheme("light", e)}
                    >
                        Light
                    </button>
                    <button
                        className="block w-full text-left px-4 py-2 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-700"
                        onClick={(e) => changeTheme("dark", e)}
                    >
                        Dark
                    </button>
                    <button
                        className="block w-full text-left px-4 py-2 hover:rounded-xl hover:bg-gray-100 dark:hover:bg-zinc-700"
                        onClick={(e) => changeTheme("system", e)}
                    >
                        System
                    </button>
                </div>
            )}
        </div>
    );
}
