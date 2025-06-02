"use client"
import NavItem from './navItem';
interface headerType {
    name: string,
    path: string
}
export const Navs = (props: { headers: Array<headerType> }) => {

    const handleClick = function () {
        (document.getElementById('mb-nav-btn') as HTMLInputElement).checked = false
        document.body.style.overflow = ''
    }
    return (
        <>
            {
                props.headers.map((item) => (
                    <div
                        key={item.path}
                        text='xl'
                        w='100%'
                        m='t-4 b-4'
                        onClick={() => handleClick()}
                    >
                        <NavItem name={item.name} link={`/${item.path}`} />
                    </div>
                ))
            }
        </>
    )
}