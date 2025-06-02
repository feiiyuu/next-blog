"use client"
import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'
import { SplitText } from "gsap/SplitText";
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
gsap.registerPlugin(SplitText)
export const Text: React.FC<{ text: string }> = ({ text }: { text: string }) => {
    const [isClient, setIsClient] = useState(false)
    useEffect(() => { setIsClient(true) }, [])
    const { theme } = useTheme()
    useGSAP(() => {
        if (!isClient) return
        const split = SplitText.create(".text", { type: "lines" });
        gsap.from(split.lines, {
            rotationX: -100,
            transformOrigin: "50% 50% -160px",
            opacity: 0,
            duration: 0.8,
            ease: "power3",
            stagger: 0.25,
            delay: 0.5
        });
    }, [theme, isClient])
    if (isClient)
        return (
            <div m='6' font='Mono' text='xl'>
                <p className='text indent-8 text-md/8'>{text}</p>
            </div>
        )
}