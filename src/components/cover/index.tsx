import React from "react";
import Image from "next/image";

export interface CoverProps {
    no: string,
    commits: number,
    name: string,
    logo: string,
    desc: string,
    star: number,
    link: string

}

export const Cover: React.FC<{ cover: CoverProps }> = ({ cover }: { cover: CoverProps }) => {
    return (
        <div
            w='220px'
            rounded='10px'
            font='Mono'
            border='1px solid emerald-400 dark:[#00ffaa]/50'
            bg='dark:[#0a0f19]/50 neutral-50'
        >
            <div
                p='10px'
                flex='~ col items-center'
            >
                <div flex='~ justify-around' w='100%' mb='10px'>
                    <span color='emerald-400 dark:#0fa'>{cover.no}</span>
                    <span color='#f55'>{cover.commits} Commits</span>
                </div>
                <div text='1.5rem' className="tracking-[1px]">{cover.name}</div>
                <div
                    m='[20px_0px]'
                >
                    <Image
                        src={`${cover.logo}`}
                        alt=''
                        width={60}
                        height={60}
                    />
                </div>
                <p>{cover.desc}</p>

                <div flex='~ justify-evenly' w='100%' mt='20px' text='xl/6'>
                    <div color='emerald-400 dark:#0fa' flex='~'>
                        <div className="i-carbon-star" />
                        <div>{cover.star}</div>
                    </div>
                    <div cursor='pointer'>
                        <a href={`${cover.link}`} target="__blank">
                            <div className="i-carbon-logo-github" color='#f55' />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}