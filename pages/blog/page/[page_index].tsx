import fs from 'fs'
import path from 'path'
import Layout from '@/components/Layout'
import Post from '@/components/Post'
import Pagination from '@/components/Pagination'
import CategoryList from '@/components/CategoryList'
import { POSTS_PER_PAGE } from '@/config/index'
import { getPosts } from '@/lib/posts'
import { PostType } from '@/types/PostType'

type BlogPage = {
  posts: PostType[],
  numPages: number,
  currentPage: number,
  categories: Array<String>
}

export default function BlogPage({ posts, numPages, currentPage, categories }: BlogPage) {
  return (
    <Layout>
      <div className='flex flex-col justify-between md:flex-row'>
        <div className='w-full p-2 md:w-3/4'>
          <h1 className='p-5 text-5xl font-bold border-b-4'>Blog</h1>

          <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {posts.map((post, index) => (
              <Post key={index} post={post} />
            ))}
          </div>

          <Pagination currentPage={currentPage} numPages={numPages} />
        </div>

        <div className='w-full p-2 mt-5 md:w-1/4'>
          <CategoryList categories={categories} />
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)

  let paths = []

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: { page_index: i.toString() },
    })
  }

  return {
    paths,
    fallback: false,
  }
}

type StaticParams = {
  params?: {
    page_index: string
  }
}

export async function getStaticProps({ params }: StaticParams) {

  const page = parseInt((params && params.page_index) || '1')

  const files = fs.readdirSync(path.join('posts'))

  const posts = getPosts()

  // Get categories for sidebar
  const categories = posts.map((post) => post.frontmatter.category)
  const uniqueCategories = [...new Set(categories)]

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE)
  const pageIndex = page - 1
  const orderedPosts = posts.slice(
    pageIndex * POSTS_PER_PAGE,
    (pageIndex + 1) * POSTS_PER_PAGE
  )

  return {
    props: {
      posts: orderedPosts,
      numPages,
      currentPage: page,
      categories: uniqueCategories,
    },
  }
}
