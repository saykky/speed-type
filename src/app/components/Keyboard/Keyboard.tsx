"use client"

import { KEYBOARD_ROWS_EN, KEYBOARD_ROWS_RU } from "@/app/const/keyboardSymbols";
import {KeyboardItem} from "@/app/components/Keyboard";

type KeyboardProps = {
    activeKey: string | null
    keyboardLocale: 'en' | 'ru'
}

export default function Keyboard({activeKey, keyboardLocale}: KeyboardProps) {
    const selectedLocale = keyboardLocale == 'en' ? KEYBOARD_ROWS_EN : KEYBOARD_ROWS_RU

    return (
        <div className="max-w-[1200px] m-auto pt-[80px] space-y-3">
            {selectedLocale.map((row: string[], rowIndex: number) => (
                <div
                    className="flex gap-3 justify-center"
                    key={rowIndex}
                >
                    {row.map((symbol: string, symbolIndex: number) => (
                        <KeyboardItem
                            symbol={symbol}
                            isActive={activeKey === symbol.toLowerCase()}
                            key={`${symbol}-${symbolIndex}`}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}