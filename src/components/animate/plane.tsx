"use client"
import React from "react"
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
gsap.registerPlugin(MotionPathPlugin)
export const Plane: React.FC = () => {
    useGSAP(() => {
        gsap.to('#plane', {
            duration: 5,
            motionPath: {
                autoRotate: 60,
                path: [
                    { left: 150, top: 60 },
                    { left: 200, top: 100 },
                    { left: 150, top: 150 },
                    { left: 60, top: 100 },
                    { left: 150, top: 60 }
                ]
            },
            ease: 'none',
            repeat: -1
        });
        gsap.to('#moon', {
            yoyo: true,
            duration: 5,
            x: 200,
            repeat: -1,
        });
    }, [])
    return (
        <div>
            <div
                className="i-ion-ios-paper-plane dark:hidden"
                text='5xl'
                id='plane'
                color='blue'
                position='absolute left-150px top-60px' />
            <div
                className="hidden dark:block i-line-md-moon-rising-filled-alt-loop"
                text='5xl'
                id='moon'
                color='amber'
                position='absolute left-100px top-100px' />
        </div>
    )
}