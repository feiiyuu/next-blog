import PostFooter from "./postFooter"
import '@/styles/blog.css'

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
            <PostFooter />
        </div>
    )
}