interface PostHeaderType {
    title: string,
    date: string,
}

export default function PostHeader({ title, date }: PostHeaderType) {
    const time = new Date(date).toString().split(' ')
    return (
        <div p='4'>
            <div text='align-center 4xl' font='bold'>{title}</div>
            <span text='align-right' className="block" mt='5'>{`${time[1]} ${time[2]} ${time[3]}`}</span>
        </div>
    )
}