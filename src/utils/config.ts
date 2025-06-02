import yaml from 'js-yaml'
import fs from 'fs'

interface headerType {
    name: string,
    path: string
}

interface profileType {
    nickname: string,
    exp?: string,
    social: {
        github?: string
        email?: string,
        bilibili?: string
    },
    info: {
        [key: string]: string;
    }
}

interface homeType {
    text?: string
}

interface configType {
    perPage?: number,
    header?: Array<headerType>,
    profile?: profileType,
    home?: homeType
}


function readYAML(): configType {
    try {
        const raw = fs.readFileSync(`${process.cwd()}/site.config.yaml`, 'utf-8')
        const config = yaml.load(raw)
        return config as configType
    }
    catch (e) {
        console.log(e);
    }
    return {}
}
export function getPerPage() {
    const { perPage = 5 } = readYAML()
    return perPage
}

export function getBlogPages() {
    const perPage = getPerPage()
    const json = fs.readFileSync(`${process.cwd()}/site/blogs.json`, 'utf-8')
    const blogs = JSON.parse(json).data
    const length = blogs.length
    const pages = Math.ceil(length / perPage)
    return { perPage, pages, blogs }
}

export function getHeaderItem() {
    const { header = [] } = readYAML()
    return header
}

export function getProfile() {
    const { profile } = readYAML()
    return profile
}

export function getHomeText() {
    const { home } = readYAML()
    return home?.text || ''
}