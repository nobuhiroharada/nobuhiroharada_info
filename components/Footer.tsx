import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="mt-10">
      <Link href="/" passHref>
        <a>
          <p className='hover:text-gray-500'>NobuhiroHarada Info</p>
        </a>
      </Link>
      <div>
        <ul className='p-0'>
          <li>
            <Link href="/">
              <a className='leading-6 hover:text-gray-500'>
                Home
              </a>
            </Link>
          </li>
          {/* <li>
            <Link href="/about" className='leading-6 text-gray-400 hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>About</Link>
          </li>
          <li>
            <Link href="/portfolio" className='leading-6 text-gray-400 hover:text-gray-600' activeClassName='text-gray-800 dark:text-gray-200'>Portfolio</Link>
          </li> */}
        </ul>
      </div>
      <div>
        <a href="https://www.facebook.com/nobuhiroharada1026"
          className='pr-4 text-4xl text-gray-400 hover:text-gray-600'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size='xs' />
        </a>
        <a href="https://github.com/nobuhiroharada"
          className='pr-4 text-4xl text-gray-400 hover:text-gray-600'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>
      <div>
        <p className='dark:text-gray-200'>Created by Nobuhiro Harada, built with Next.js and Markdown, deployed at Vercel. © {(new Date()).getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer