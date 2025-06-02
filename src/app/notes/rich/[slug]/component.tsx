import type { MDXComponents } from 'mdx/types'
import type { JSX } from 'react'
import type { BundledLanguage } from 'shiki'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import { Fragment } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { codeToHast } from 'shiki'

export const useMDXComponents: MDXComponents = {
    pre: ({ children }) => {
        const { className, children: content } = children.props
        const lang = className.split('-').pop()
        return <CodeBlock lang={lang}>{content}</CodeBlock>
    }
}

interface Props {
    children: string
    lang: BundledLanguage
    className?: string
}

async function CodeBlock(props: Props) {
    const out = await codeToHast(props.children, {
        lang: props.lang,
        themes: {
            dark: 'vitesse-dark',
            light: 'vitesse-light'
        }
    })

    return toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
        components: {
            pre: props => <pre data-custom-codeblock {...props}
                text='4' p='4' m='1'
                border='rounded-md'
                overflow='x-auto'
            />
        },
    }) as JSX.Element
}