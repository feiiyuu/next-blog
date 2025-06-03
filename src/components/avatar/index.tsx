"use client"
import Svg from "./svg"
import { useEffect, useState, useRef } from 'react'
/* eslint-disable @next/next/no-img-element */
export const Avatar: React.FC = () => {
    const [isClient, setIsClient] = useState(false)
    const imgRef = useRef<HTMLImageElement>(null)
    useEffect(() => {
        setIsClient(true)
        imgRef.current && (imgRef.current.style.filter = `url(#half-tone-hd)`)
    })
    if (isClient)
        return (
            <div
                rounded='full'
                overflow='hidden'
            >
                < Svg />
                <img ref={imgRef} w='100% md:40vw 2xl:30vw' src="/avtar.jpg" alt="" />
            </div>
        )
    else return <div></div>
}