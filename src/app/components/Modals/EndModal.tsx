import Image from 'next/image';
import React from 'react';

export default function EndModal() {
    return (
        <div>
            <div className="flex items-center justify-center gap-10">
                <Image
                    src={'/favicon.ico'}
                    alt="logo"
                    width={100}
                    height={50}
                />
                <h2 className="text-[50px] font-bold">SpeedType</h2>
            </div>
        </div>
    )
}