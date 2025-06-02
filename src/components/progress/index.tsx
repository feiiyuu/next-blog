"use client"

import { useEffect, useState } from 'react'

function useProgess(): [number, boolean] {
    const [progress, setProgress] = useState(0)
    const [show, setShow] = useState(false)

    function listener() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const _p = ((scrollTop + clientHeight) / scrollHeight) * 100
        if (scrollHeight !== clientHeight && !show) {
            setShow(true)
        }
        if (scrollHeight === clientHeight || scrollTop === 0) {
            setShow(false)
        }
        setProgress(_p)
    }

    useEffect(() => {
        listener()
        document.addEventListener('scroll', listener)
        return () => document.removeEventListener('scroll', listener)
    })

    return [progress, show]
}

export default function Progress() {

    const [progress, show] = useProgess()

    function gotoTop() {
        document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    }

    if (!show) return <></>

    return (
        <div
            h='10'
            w='10'
            position='fixed bottom-2xl right-2xl'
            bg='gray-2 dark:dark-1'
            rounded='full'
            text="align-center dark dark:gray-1"
            line-height='10'
            cursor='pointer'
            onClick={gotoTop}
        >
            {progress.toFixed(0)}
        </div>
    )
}