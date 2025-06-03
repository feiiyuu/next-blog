"use client"
import { useTheme } from 'next-themes'
import { useEffect } from 'react'
export default function Svg() {
    const { theme } = useTheme()
    useEffect(() => {
        theme === 'light' ? floodHd.setAttribute('flood-color', '#166496') :
            floodHd.setAttribute('flood-color', '#ffffff')
    })
    return (
        <svg className="svg" x="0" y="0" width="0" height="0">
            <defs>
                <circle id="dot1" cx="2" cy="2" r="0.25" />
                <circle id="dot2" cx="2" cy="2" r="0.5" />
                <circle id="dot3" cx="2" cy="2" r="0.75" />
                <circle id="dot4" cx="2" cy="2" r="1" />
                <circle id="dot5" cx="2" cy="2" r="1.25" />
                <circle id="dot6" cx="2" cy="2" r="1.5" />
                <circle id="dot7" cx="2" cy="2" r="1.75" />
                <circle id="dot8" cx="2" cy="2" r="2" />
                <filter id="half-tone-hd" colorInterpolationFilters="sRGB" primitiveUnits="userSpaceOnUse">
                    <feImage width="4" height="4" xlinkHref="#dot1" />
                    <feTile result="dot1-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot2" />
                    <feTile result="dot2-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot3" />
                    <feTile result="dot3-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot4" />
                    <feTile result="dot4-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot5" />
                    <feTile result="dot5-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot6" />
                    <feTile result="dot6-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot7" />
                    <feTile result="dot7-tile" />
                    <feImage width="4" height="4" xlinkHref="#dot8" />
                    <feTile result="dot8-tile" />
                    <feColorMatrix in="SourceGraphic" type="luminanceToAlpha" result="lum" />
                    <feComponentTransfer in="lum" result="lum-map">
                        <feFuncA type="table" tableValues="1 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh1">
                        <feFuncA type="discrete" tableValues="1 0 0 0 0 0 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh2">
                        <feFuncA type="discrete" tableValues="0 1 0 0 0 0 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh3">
                        <feFuncA type="discrete" tableValues="0 0 1 0 0 0 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh4">
                        <feFuncA type="discrete" tableValues="0 0 0 1 0 0 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh5">
                        <feFuncA type="discrete" tableValues="0 0 0 0 1 0 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh6">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 1 0 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh7">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 1 0" />
                    </feComponentTransfer>
                    <feComponentTransfer in="lum-map" result="thresh8">
                        <feFuncA type="discrete" tableValues="0 0 0 0 0 0 0 1" />
                    </feComponentTransfer>
                    <feComposite in="thresh1" in2="dot1-tile" operator="in" result="level1" />
                    <feComposite in="thresh2" in2="dot2-tile" operator="in" result="level2" />
                    <feComposite in="thresh3" in2="dot3-tile" operator="in" result="level3" />
                    <feComposite in="thresh4" in2="dot4-tile" operator="in" result="level4" />
                    <feComposite in="thresh5" in2="dot5-tile" operator="in" result="level5" />
                    <feComposite in="thresh6" in2="dot6-tile" operator="in" result="level6" />
                    <feComposite in="thresh7" in2="dot7-tile" operator="in" result="level7" />
                    <feComposite in="thresh8" in2="dot8-tile" operator="in" result="level8" />
                    <feMerge result="merged">
                        <feMergeNode in="level8" />
                        <feMergeNode in="level7" />
                        <feMergeNode in="level6" />
                        <feMergeNode in="level5" />
                        <feMergeNode in="level4" />
                        <feMergeNode in="level3" />
                        <feMergeNode in="level2" />
                        <feMergeNode in="level1" />
                    </feMerge>
                    <feComposite in="merged" in2="SourceGraphic" operator="in" result="masked" />
                    <feFlood id="floodHd" floodColor="#000000" result="color" />
                    <feComposite in="color" in2="masked" operator="in" />
                </filter>
            </defs>
        </svg>
    )
}