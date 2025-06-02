"use client"
import Svg from "./svg"
import { useEffect, useState } from 'react'
/* eslint-disable @next/next/no-img-element */
export const Avatar: React.FC = () => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])
    if (isClient)
        return (

            <div
                rounded='full'
                overflow='hidden'
            >
                <img w='100% md:40vw 2xl:30vw' src="/avtar.jpg" alt="" style={{ filter: 'url(#half-tone-hd)' }} />
                < Svg />
            </div>
        )
    else return <div></div>
}