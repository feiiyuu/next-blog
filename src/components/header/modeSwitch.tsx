"use client"

import { useTheme } from "next-themes"
import type { MouseEvent } from 'react'
import Icons from "./icons"

export default function ModeSwitch() {

    const { theme, setTheme } = useTheme()

    function changeTheme(event: MouseEvent) {
        // @ts-expect-error: Transition API
        const isAppearanceTransition = document.startViewTransition &&
            !window.matchMedia(`(prefers-reduced-motion: reduce)`).matches

        const isDark = theme === 'dark'

        if (!isAppearanceTransition) {
            setTheme(isDark ? 'light' : 'dark')
            return
        }

        const x = event.clientX
        const y = event.clientY

        const endRadius = Math.hypot(
            Math.max(x, innerWidth - x),
            Math.max(y, innerHeight - y),
        )

        const transition = document.startViewTransition(() => {
            setTheme(isDark ? 'light' : 'dark')
        })

        transition.ready.then(() => {
            const clipPath = [
                `circle(0px at ${x}px ${y}px)`,
                `circle(${endRadius}px at ${x}px ${y}px)`,
            ]
            document.documentElement.animate(
                {
                    clipPath: isDark ? clipPath : [...clipPath].reverse(),
                },
                {
                    duration: 500,
                    easing: 'ease-in',
                    pseudoElement: isDark ? '::view-transition-new(root)' : '::view-transition-old(root)',
                },
            )
        })
    }

    return (
        <Icons
            click={changeTheme}
            icons="i-ant-design-sun-outlined dark:i-ant-design-moon-outlined"
        />
    )
}