import type { NextConfig } from "next";
import createMDX from '@next/mdx'
import remarkGfm from "remark-gfm";
const nextConfig: NextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  transpilePackages: ["next-mdx-remote"],
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/feiiyuu/**'
      },
      {
        protocol: 'https',
        hostname: 'img.zaoyue.eu.org',
        pathname: '/**'
      }
    ],
  }
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig);
