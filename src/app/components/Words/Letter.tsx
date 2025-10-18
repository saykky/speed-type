import {STATUS} from "@/app/const/words";

type LetterProps = {
    char: string;
    status: STATUS
};

export default function Letter({ char, status }: LetterProps) {
    const className = {
        pending: "",
        active: "border-b-4 dark:border-white rounded-[3px] border-zinc-800",
        correct: "text-green-500",
        wrong: "text-red-500",
    }[status];

    return <span className={className}>{char}</span>;
}