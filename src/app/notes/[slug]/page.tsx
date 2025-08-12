import Card from "../card"
import { Pagination } from '../pagination'
import { getBlogPages } from '@/utils/config';
import { redirect } from 'next/navigation'
// /* eslint-disable @next/next/no-img-element */

interface BlogType {
  title: string,
  tags: Array<string>,
  slug: string,
}

export default async function BlogList({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const current = Number(slug) || 1
  const { perPage, pages, blogs } = getBlogPages()
  if (current > pages || current <= 0) redirect('/notes/1')
  const lists = blogs.slice((current - 1) * perPage, current * perPage)

  return (
    <div flex='1 ~ col'>
      <div m='a' w='90% md:768px' position='relative'>
        <div
          h='50px'
          rounded='md'
          className="dark:brightness-70 brightness-110
          relative before:content-['']
          before:absolute before:inset-0
           before:bg-gradient-to-b 
           before:from-white/0
           dark:before:from-black/0
           before:to-white
           dark:before:to-[#1c1c1c]
           before:backdrop-blur-[1px]
          "
        />
        <h1
          position='absolute top-[50%] left-[50%]'
          m='a' p='[0px_6px]' h='[2.4rem]'
          className=" translate-x-[-50%] translate-y-[-50%]"
        >
          Notes
        </h1>
      </div>
      <div
        w="90% md:768px"
        m='auto'
        flex='1 ~ col'
      >
        {
          lists.map((b: BlogType) => (<Card title={b.title} key={b.title} tags={b.tags} slug={b.slug} />))
        }
        <div flex='1 ~ col justify-end' mb='5'>
          <Pagination max={pages} current={current > 0 ? current : 1} />
        </div>
      </div>
    </div>
  )
}

export async function generateStaticParams() {
  const { pages } = getBlogPages()
  return Array.from({ length: pages }).map((_, i) => ({ slug: String(i + 1) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const current = Number(slug) || 1
  return {
    title: `第${current}页`
  }
}