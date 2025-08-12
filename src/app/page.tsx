import type { Metadata } from 'next'
import { Avatar } from '@/components/avatar';
import { Plane } from '@/components/animate/plane';
import { Text } from '@/components/animate/text';
import { getHomeText } from '@/utils/config';
export const metadata: Metadata = {
  title: '首页',
}

export default function Home() {
  const text = getHomeText()
  return (
    <div w="80% 2xl:60%" flex="1 ~ md:justify-around items-center col md:row" m='a'>
      <Plane />
      <div position='relative top-8xl md:static'>
        <Text text={text} />
      </div>
      <div 
      h='md:[calc(100vh-200px)]' 
      flex='~ justify-center items-center'
      m='b-20'
      >
        <Avatar />
      </div>
    </div>
  );
}