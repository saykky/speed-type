"use client"

import { KEYBOARD_ROWS} from "@/app/const/keyboardSymbols";
import {KeyboardItem} from "@/app/components/Keyboard";

type KeyboardProps = {
    activeKey: string | null
}

export default function Keyboard({activeKey}: KeyboardProps) {

    return (
        <div className="max-w-[1200px] m-auto pt-[100px] space-y-3">
            {KEYBOARD_ROWS.map((row: string[], rowIndex: number) => (
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