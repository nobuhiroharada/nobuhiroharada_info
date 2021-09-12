import Head from 'next/head'
import Header from '@/components/Header'
import Search from '@/components/Search'
import { LayoutType } from '@/types/LayoutType'

const Layout = ({ title, keywords, description, children }: LayoutType) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />
      <Search />
      <main className='container p-5 mx-auto'>
        {children}
      </main>
    </div>
  )
}

Layout.defaultProps = {
  title: 'NobuhiroHarada Info',
  keywords: 'nobuhiroharada,原田順啓,nobuhiro,harada,原田,順啓,programmer,developer',
  description: 'NobuhiroHarada Info'
}

export default Layout