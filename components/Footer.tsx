import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="mt-10">
      <Link href="/" passHref>
        <a>
          <p className='py-4 text-2xl hover:text-gray-500'>NobuhiroHarada Info</p>
        </a>
      </Link>
      <div>
        <ul className='p-0'>
          <li>
            <Link href="/" passHref>
              <a className='leading-6 hover:text-gray-500'>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a className='leading-6 hover:text-gray-500'>
                About
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className='mt-5'>
        <a href="https://www.facebook.com/nobuhiroharada1026"
          className='pr-4 text-gray-400 hover:text-gray-600'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebookSquare} size='2x' />
        </a>
        <a href="https://github.com/nobuhiroharada"
          className='pr-4 text-gray-400 hover:text-gray-600'
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithubSquare} size='2x' />
        </a>
      </div>
      <div className='mt-5'>
        <p className='dark:text-gray-200'>Created by Nobuhiro Harada, built with Next.js and Markdown, deployed at Vercel. © {(new Date()).getFullYear()}</p>
      </div>
    </footer>
  )
}

export default Footer