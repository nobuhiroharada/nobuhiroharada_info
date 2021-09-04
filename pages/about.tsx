import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About NobuhiroHarada'>
      <h1 className='pb-5 text-5xl font-bold border-b-4'>About</h1>

      <div className='px-10 py-6 mt-6 bg-white rounded-lg shadow-md'>
        <h3 className='mb-5 text-2xl'>Nobuhiro Harada Info</h3>

        <p className='mb-3'>This is built with Next.js and Markdown</p>

        <p>
          <span className='font-bold'>Version 1.0.0</span>
        </p>
      </div>
    </Layout>
  )
}
