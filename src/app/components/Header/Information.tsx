import {Timer, CircleX, CheckCircle} from "lucide-react";
import {InformationItem} from "@/app/components/Header";
import { useTranslation } from '@/app/components/TranslationContext/TranslationContext'

type InformationProps = {
    errors: number
    timeLeft: number
    accuracy: number
}

export default function Information({ errors, timeLeft, accuracy }: InformationProps) {
    const {t} = useTranslation()

    return (
        <div className="flex flex-wrap gap-6 justify-center items-center">
            <InformationItem
                icon={<Timer className="w-6 h-6" />}
                value={`${timeLeft} ${t('second')}`}
                variant="info"
            />
            <InformationItem
                icon={<CircleX className="w-6 h-6" />}
                value={errors}
                variant="error"
            />
            <InformationItem
                icon={<CheckCircle className="w-6 h-6" />}
                value={`${accuracy}%`}
                variant="success"
            />
        </div>
    );
}