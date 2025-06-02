'use client'
import { useRouter } from 'next/navigation'

export default function PostFooter() {
    const router = useRouter()
    return (
        <div
            h='20'
            flex='~ justify-start items-center'
            w="90% md:768px"
            m='a'
        >
            <div
                cursor='pointer'
                border='b dashed r-0 t-0 l-0 gray-5  hover:dark-9 dark:hover:gray-3'
                text='align-center xl gray-5 hover:gray-9 dark:hover:gray-3'
                onClick={() => router.back()}
            >
                &gt; &nbsp;cd . .
            </div>
        </div>
    )
}