import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'
import Image from 'next/image'
import Layout from '@/components/Layout'
import CategoryLabel from '@/components/CategoryLabel'

export default function PostPage({
  frontmatter: { title, category, date, cover_image, author, author_image },
  content,
  slug,
}: {
  frontmatter: {
    title: string,
    category: string,
    date: string,
    cover_image: string,
    author: string,
    author_image: string,
  },
  content: string,
  slug: string
}) {

  return (
    <Layout title={title}>
      <Link href='/blog'>Go Back</Link>
      <div className='w-full px-10 py-6 mt-6 bg-white rounded-lg shadow-md'>
        <div className='flex items-center justify-between mt-4'>
          <h1 className='text-5xl mb-7'>{title}</h1>
          <CategoryLabel>{category}</CategoryLabel>
        </div>
        <Image
          src={cover_image}
          width={944}
          height={531}
          alt='Post top image'
          className='w-full rounded'
        />

        <div className='flex items-center justify-between p-2 my-8 bg-gray-100'>
          <div className='flex items-center'>
            <div className='hidden object-cover w-10 h-10 mx-4 rounded-full sm:block'>
              <Image
                src={author_image}
                width={40}
                height={40}
                alt='Author image'
              />
            </div>
            <h4>{author}</h4>
          </div>
          <div className='mr-4'>{date}</div>
        </div>

        <div className='mt-2 blog-text'>
          <div className='prose max-w-none' dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({
  params: { slug }
}: { params: { slug: string } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)
  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  }
}
