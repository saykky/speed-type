import Image from "next/image";
import {JSX} from "react";

export default function Logo() {
    return (
        <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={140}
            height={140}
        />
    )
}