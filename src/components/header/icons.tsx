"use client"

import { type MouseEvent } from 'React'
import { useRouter } from 'next/navigation'

interface IconsParams {
    icons: string,
    size?: "xl" | "2xl" | "3xl",
    color?: string,
    innerLink?: string,
    outerLink?: string,

    click?: (e: MouseEvent) => void,
}

export default function Icons(params: IconsParams): React.ReactNode {

    const router = useRouter()

    function openLink() {
        if (params.outerLink)
            window.open(params.outerLink)
        else if (params.innerLink)
            router.push(params.innerLink)
    }

    const click = params.click || openLink

    const { size = "xl", color = 'inherit' } = params


    return (
        <div
            p='2'
            onClick={click}
            cursor='pointer'
            border='rounded-full'
            w='7'
            h="7"
            flex='~ justify-center items-center'
        >
            <button
                className={params.icons}
                text={size}
                color={color}
                cursor='pointer'
            />
        </div>
    )
}