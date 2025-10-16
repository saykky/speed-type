import Image from "next/image";

export default function Logo() {
    return (
        <Image
            src={"/logo.png"}
            alt={"Logo"}
            width={150}
            height={150}
        />
    )
}