import { toc, type Options } from 'mdast-util-toc'
import { type Root } from 'mdast'

export default function remarkToc(options: Readonly<Options> | null | undefined) {
    const settings = {
        ...options,
    }
    return function (tree: Root) {
        const result = toc(tree, settings)
        if (!result.map) {
            return
        }
        tree.children = [result.map]
    }
}