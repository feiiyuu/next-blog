interface TagProps {
    content: string
}


export const Tag: React.FC<TagProps> = ({ content = '' }) => {
    return (
        <div
            m='l-2'
            bg='[#eee] dark:dark-950'
            p='r-2 l-2'
            text='sm'
        >
            {content}
        </div>
    )
}