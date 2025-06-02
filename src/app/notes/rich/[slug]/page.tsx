import { promises as fs } from 'fs'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { useMDXComponents } from './component'
import remarkGfm from "remark-gfm";
import matter from 'gray-matter'
import PostHeader from './postHeader';
import remarkToc from '@/utils/remarkToc';
import rehypeSlug from 'rehype-slug'
import ClickOverride from './click';
interface BlogType {
  title: string,
  tags: Array<string>,
  slug: string,
}

export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const raw = await fs.readFile(`${process.cwd()}/data/notes/${slug}.mdx`, "utf-8")
  const { content, data } = matter(raw.trimStart())

  return (
    <div m='t-4' >
      <label
        className='peer'
        position='fixed bottom-7xl right-2xl'
        cursor='pointer'
        z='9'
      >
        <input type='checkbox' id='button' className='hidden' />
        <div
          bg='gray-2 dark:dark-1'
          border='rounded-full'
          text='align-center'
          p='2'
        >
          <div className='i-ion-ios-list' w='6' h='6' />
        </div>
      </label>

      <div
        id='content'
        z='99'
        w='md:50% xl:250px 2xl:350px'
        max-w='350px'
        p='t-10px r-10px b-10px l-5px'
        border='solid 1px dark:#1c1c1c zinc-100 rounded-[10px]'
        position='fixed bottom-9xl right-2xl xl:top-25vh xl:right-10px'
        max-h='50vh'
        overflow='y-auto'
        bg='white dark:dark-mode xl:dark:inherit xl:inherit'
        backdrop='blur-[5px]'
        transition='all 0.75s'
        className='opacity-0 invisible xl:block [&_a]:no-underline [&_a]:color-inherit 
        [&_ul]:list-disc [&_li]:m-[0.5rem_0] peer-has-checked:visible peer-has-checked:opacity-100'
      >
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                remarkToc
              ]
            },
          }}
        />
      </div>

      <div w="90% md:768px" m='auto'>
        <PostHeader title={data.title} date={data.date} />
      </div>
      <div id='blog' w="90% md:768px" m='auto'>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [
                remarkGfm
              ],
              rehypePlugins: [
                rehypeSlug
              ]
            },
          }}
          components={useMDXComponents} />
      </div>
      <ClickOverride />
    </div>
  );
}

export async function generateStaticParams() {
  try {
    const blogs = await fs.readFile(process.cwd() + "/site/blogs.json", "utf-8")
    const data = JSON.parse(blogs).data
    return data.map((blog: BlogType) => ({ "slug": blog.slug }))
  } catch (error) {
    console.warn(error);
  }
  return []
}

export const dynamicParams = false



export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params
    const raw = await fs.readFile(`${process.cwd()}/data/notes/${slug}.mdx`, "utf-8")
    const { data } = matter(raw.trimStart())
    return {
      title: data.title
    }
  } catch (error) {
    console.warn(error);
  }
  return {
    title: ''
  }
}