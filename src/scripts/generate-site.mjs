import fs from 'fs'
import yaml from 'js-yaml'

const siteData = { data: [] }

const parse = (content, mdx) => {
    mdx = mdx.split('.')[0]
    const match = content.trimStart().match(/^---\s*\n([\s\S]*?)\n---/);
    if (!match) return null;
    const yamlContent = match[1];
    const { title, tags } = yaml.load(yamlContent);
    return {
        title,
        tags,
        slug: mdx
    }
}

try {
    const dirs = fs.readdirSync(`${process.cwd()}/data/`)
    for (const dir of dirs) {
        const mdxs = fs.readdirSync(`${process.cwd()}/data/${dir}/`)
        for (const mdx of mdxs) {
            const content = fs.readFileSync(`${process.cwd()}/data/${dir}/${mdx}`, 'utf-8')
            const res = parse(content, mdx)
            siteData.data.push(res)
        }
    }

    const json = JSON.stringify(siteData)

    fs.writeFileSync(`${process.cwd()}/site/blogs.json`, json)

} catch (e) {
    console.log(e);
}