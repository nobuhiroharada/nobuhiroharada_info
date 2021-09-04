import Head from 'next/head'
import Header from '../components/Header'
import { ILayout } from '../interfaces/ILayout'

const Layout = ({ title, keywords, description, children } : ILayout) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='keywords' content={keywords} />
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Header />

      <main className='container mx-auto my-7'>
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