import Image from "next/image"
import Icons from "@/components/header/icons"
import { getProfile } from "@/utils/config"

export default function About() {
    const profile = getProfile()
    return (
        <div
            w="90% md:768px" h='80vh'
            flex='1 ~ justify-center items-center col md:row md:justify-between'
            m='auto'
        >
            <div>

            </div>
            <div
                border='rounded-2xl'
                w='300px' h='400px' p='20px'
                bg='white dark:dark-4'
                shadow='[0_3px_8px_6px_rgba(7,17,27,0.05)]'
                hover='bg-opacity-50'
                transition='all 0.75s'
                position='relative top-xl md:top-0'
            >
                <div
                    flex='~ justify-center'
                >
                    <Image
                        src="/avtar.jpg"
                        alt="avtar"
                        width={100}
                        height={100}
                        border='rounded-full'
                        hover='rotate-360'
                        transition='all 2.5s'
                        p='3'
                    />
                </div>
                <h3 mt='2' text='align-center'>{profile?.nickname}</h3>
                <div text='sm align-center' color='gray' m='2'>{profile?.exp}</div>
                <div m='4' flex='~ justify-center' bg='blue-200 dark:cyan-800'>
                    <Icons icons="i-ant-design-github-filled" outerLink={profile?.social.github} size="3xl" />
                </div>
                <ul m='a' w='70%'>
                    {
                        Object.keys(profile?.info ?? {}).map((i) => (
                            <div key={i}>
                                <li text='left' m='2' >{i}：{profile?.info[i]}</li>
                                <hr />
                            </div>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export async function generateMetadata() {
    return {
        title: '关于'
    }
}