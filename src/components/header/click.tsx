"use client"

import { useEffect } from "react"

// 解决滑动透传问题

function ClickEvent() {
    const status = (document.getElementById('mb-nav-btn') as HTMLInputElement).checked
    if (status) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}
export default function Click() {
    useEffect(() => {
        document.getElementById('mb-nav-btn')?.addEventListener('click', ClickEvent)
        return () => {
            document.getElementById('mb-nav-btn')?.removeEventListener('click', ClickEvent)
        }
    }, [])
    return <></>
}