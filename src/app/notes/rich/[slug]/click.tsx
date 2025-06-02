'use client'
import { useEffect } from "react"

/**
 * 实现博客目录链接的平滑跳转
 */
function override() {
    const tags = document.getElementById("content")?.querySelectorAll('a')
    if (!tags) return
    tags.forEach((tag) => {
        tag.addEventListener('click', (e) => {
            if (!e.target) return
            e.preventDefault()
            const anchor = document.querySelectorAll(decodeURI((e.target as HTMLAnchorElement).hash))[0]
            anchor.scrollIntoView({ behavior: 'smooth' });
        })
    })

    // xl处理目录
    const isXl = window.matchMedia("(max-width: 1280px)").matches
    const checkbox: HTMLInputElement | null = document.getElementById("button") as HTMLInputElement
    checkbox.checked = !isXl
}

export default function ClickOverride() {
    useEffect(() => {
        override()
    })
    return <></>
}