import Link from '@/components/link'

interface ItemProps {
    name: string,
    link: string,
}

export default function NavItem(props: ItemProps) {
    return (
        <Link
            href={props.link}
            className='p-2 m-1 text-gray-7! dark:text-gray-3! hover:text-dark-9! hover:dark:text-white! block w-100% md:w-a text-center'
        >
            {props.name}
        </Link>
    )
}