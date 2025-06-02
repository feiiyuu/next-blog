import Link from "@/components/link"
import { useMemo } from "react"

interface PropsType {
    max: number,
    current: number
}

export const Pagination: React.FC<PropsType> = ({ max, current }) => {
    current = current <= max ? current : 1

    // page scope
    const pageScope = useMemo(() => {
        const scope: Array<number> = []
        let count = 0
        if (max <= 5) {
            Array.from({ length: max }).map((_, i) => scope.push(i + 1))
            return scope
        }
        scope.push(current)
        while (count < 4) {
            if (scope[scope.length - 1] + 1 <= max) {
                scope.push(scope[scope.length - 1] + 1)
                count++
            }
            if (scope[0] - 1 >= 1) {
                scope.unshift(scope[0] - 1)
                count++
            }
        }
        return scope
    }, [current, max])

    const Previous = () => {
        if (current > 1) return (
            <Link href={`${current - 1}`}>
                <div m='r-2 l-2' className="i-ion-arrow-left-c" text='3xl' bg='hover:emerald-600' cursor='pointer' />
            </Link>
        )
        else return <></>
    }

    const Next = () => {
        if (current < max) return (
            <Link href={`${current + 1}`}>
                <div m='r-2 l-2' className="i-ion-arrow-right-c" text='3xl' bg='hover:emerald-600' cursor='pointer' />
            </Link>
        )
        else return <></>
    }


    if (max === 1) return <></>

    return (
        <div flex='~ justify-center items-center'>
            <Previous />
            {
                pageScope.map((page) => {
                    return <Link
                        href={`${page}`}
                        key={page}
                        m='2'
                        text='xl/8 center'
                        border=' rounded-md'
                        w='8' h='8'
                        cursor={current === page ? '' : 'pointer'}
                        className={current === page ? "bg-emerald-5 dark:bg-emerald-7" : 'hover:bg-gray-2 dark:hover:bg-gray-6'}
                    >
                        {page}
                    </Link>
                })
            }
            <Next />
        </div>
    )
}