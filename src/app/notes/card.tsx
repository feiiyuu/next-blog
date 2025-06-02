import { Tag } from "./tag"
import Link from "@/components/link"

interface BlogType {
    title: string,
    tags: Array<string>,
    slug: string,
}

export default function Card({ title = 'test', tags = [], slug = '' }: BlogType) {
    const date = new Date().toString().split(' ')
    return (
        <Link href={`/notes/rich/${slug}/`}>
            <div
                p='3'
                m='2'
                border='1px solid rounded-md hover:emerald-800 transparent'
                cursor='default'
                hover='scale-[1.01] bg-transparent'
                transition='all'
                bg='dark:[#1c1c1c] zinc-50'
            >
                <div>
                    <span mr='2' text='xl' font='bold'>{title}</span>
                    <span text='sm gray-6 dark:gray-4' font='winky 600'>{`${date[1]} ${date[2]} ${date[3]}`}</span>
                </div>
                <div flex='~ justify-between' mt='2'>
                    <div flex='~ justify-start'>
                        {
                            tags.map((tag) => <Tag content={tag} key={tag} />)
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}