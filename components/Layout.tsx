import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Search from '@/components/Search'
import { LayoutType } from '@/types/LayoutType'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const Layout = ({ title, keywords, description, children }: LayoutType) => {
  return (
    <div className='max-w-4xl p-4 mx-auto my-0'>
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
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'NobuhiroHarada Info',
  keywords: 'nobuhiroharada,原田順啓,nobuhiro,harada,原田,順啓,programmer,developer',
  description: 'NobuhiroHarada Info'
}

export default Layout