import NextLink, { LinkProps } from "next/link"

type CustomLinkProps = LinkProps & {
    children: React.ReactNode,
    className?: string
} & React.HTMLAttributes<HTMLElement>

export default function Link({ children, href = '', className = '', ...props }: CustomLinkProps) {
    return <NextLink
        href={href}
        className={`${className}` + " no-underline color-inherit"}
        {...props}
    >
        {children}
    </NextLink>
}