import Link from 'next/link'

const CategoryLabel = ({ children }: { children: string }) => {
  let bgColor = ''
  switch (children) {
    case 'JavaScript':
      bgColor = 'bg-indigo-600'
      break
    case 'CSS':
      bgColor = 'bg-green-600'
      break
    case 'MySQL':
      bgColor = 'bg-blue-600'
      break
    case 'PHP':
      bgColor = 'bg-pink-600'
      break
    case 'Python':
      bgColor = 'bg-red-600'
      break
    case 'Column':
      bgColor = 'bg-purple-600'
      break
    case 'Others':
      bgColor = 'bg-gray-600'
      break
  }
  return (
    <div
      className={`px-2 py-1 ${bgColor} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}

export default CategoryLabel