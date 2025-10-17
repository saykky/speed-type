import {useEffect, useState} from "react";

type KeyboardItemProps = {
    symbol: string
    isActive: boolean
}

export default function KeyboardItem({symbol, isActive}: KeyboardItemProps) {
    // useEffect and useState are needed to animate the illumination of a pressed key.
    const [showActive, setShowActive] = useState<boolean>(false)

    useEffect(() => {
        if (isActive) {
            setShowActive(true)
        } else {
            const timeout = setTimeout(() => setShowActive(false), 300)
            return () => clearTimeout(timeout)
        }
    }, [isActive])

    const styleIsActive: string = 'border-green-500 transition duration-300 ease-out scale-110'

    return (
        <div className={`w-[100px] h-[100px] font-bold text-[50px] border border-[3px] rounded-[15px] flex justify-center items-center ${showActive && styleIsActive}`}>
            {symbol}
        </div>
    )
}