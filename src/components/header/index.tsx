import ModeSwitch from './modeSwitch'
import NavItem from './navItem';
import { getHeaderItem } from '@/utils/config';
import { Navs } from './navs';
import Click from './click';
export default function Header() {
    const headers = getHeaderItem()
    return (
        <div
            h="15"
            w='100%'
            bg="white dark:dark-mode-op opacity-20"
            backdrop='blur-sm'
            text='dark:gray-1'
            position='sticky top-none'
            z='10'
            flex='~ row justify-center items-center'
        >
            <div
                className='hidden md:flex'
                w='100%'
                m='r-0 md:r-5'
                flex='row justify-end items-center'
            >
                {
                    headers.map((item) => (<NavItem key={item.path} name={item.name} link={`/${item.path}`} />))
                }
                <ModeSwitch />
            </div>
            <div
                flex='~ row  justify-between  items-center'
                className=' md:hidden'
                w='100%'
            >
                <div m='4'> <ModeSwitch /></div>
                <label className='peer'>
                    <div className='i-ion-md-menu' m='4' text='2xl' />
                    <input type="checkbox" id='mb-nav-btn' className='hidden' />
                </label>
                <div
                    position='absolute top-15 bottom-0'
                    z='99'
                    id='mb-nav'
                    w='100%'
                    h='100vh'
                    text='center'
                    bg="white dark:black"
                    className='opacity-0 invisible peer-has-checked:visible peer-has-checked:opacity-100'
                >
                    <Navs headers={headers} />
                    <Click />
                </div>
            </div>
        </div>
    )
}