import Layout from '../components/Layout'

export default function AboutPage() {
  return (
    <Layout title='About NobuhiroHarada'>
      <div>
        <p className='p-5 text-4xl font-bold border-b-4'>スキル</p>
        <ul className='p-4'>
          <li>・言語：PHP, JavaScript</li>
          <li>・フレームワーク：Laravel, Zend Framework, CakePHP</li>
          <li>・データベース：MySQL, PostgreSQL</li>
          <li>・OS：macOS, Linux, Windows</li>
          <li>・その他：Git</li>
        </ul>
        <p className='p-5 text-4xl font-bold border-b-4'>資格</p>
        <div className='p-4'>
          <table className='table-auto'>
            <thead>
              <tr>
                <th className='w-1/4 p-2 border'>年月</th>
                <th className='w-3/4 p-2 border sm:w-full'>内容</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='w-1/4 p-2 border'>2008年8月</td>
                <td className='w-3/4 p-2 border sm:w-full'>TOEIC 800</td>
              </tr>
              <tr>
                <td className='w-1/4 p-2 border'>2010年8月</td>
                <td className='w-3/4 p-2 border sm:w-full'>ITパスポート</td>
              </tr>
              <tr>
                <td className='w-1/4 p-2 border'>2015年6月</td>
                <td className='w-3/4 p-2 border sm:w-full'>Oracle Certified Java Programmer, Bronze SE 7</td>
              </tr>
              <tr>
                <td className='w-1/4 p-2 border'>2021年4月</td>
                <td className='w-3/4 p-2 border sm:w-full'>基本情報技術者</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
