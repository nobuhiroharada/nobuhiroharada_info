import Link from 'next/link'

const Header = () => {
  return (
    <header className='w-full'>
      <div className='container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row'>
        <Link href='/'>
          <a className='flex items-center mb-4 font-medium md:w-1/5 title-font md:justify-start md:mb-0 hover:text-gray-500'>
            <span className='text-2xl whitespace-nowrap'>NobuhiroHarada Info</span>
          </a>
        </Link>
        <nav className='flex flex-wrap items-center justify-end text-base md:ml-auto'>
          <Link href='/blog'>
            <a className='mx-5 uppercase cursor-pointer hover:text-gray-500'>
              Blog
            </a>
          </Link>
          <Link href='/about'>
            <a className='mx-5 uppercase cursor-pointer hover:text-gray-500'>
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header