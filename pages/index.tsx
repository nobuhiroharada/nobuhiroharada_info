import type { NextPage, GetStaticProps } from 'next'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import { sortByDate } from '@/utils/index'
import { PostType } from '@/types/PostType'


const Home = ({ posts }: { posts: PostType[] }) => {
  return (
    <Layout>
      <h1 className='p-5 text-4xl font-bold border-b-4'>Latest Posts</h1>

      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <Link href='/blog'>
        <a className='block w-full py-4 my-5 text-center text-gray-800 transition duration-500 border border-gray-500 rounded-md select-none ease hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline'>
          All Posts
        </a>
      </Link>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join('posts'))
  const posts = files.map(filename => {
    const slug = filename.replace('.md', '')
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data: frontmatter } = matter(markdownWithMeta)
    return {
      slug,
      frontmatter
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6)
    }
  }
}

export default Home
