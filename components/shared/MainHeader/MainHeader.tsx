import { VFC } from 'react'
import Link from 'next/link'

export const MainHeader: VFC = () => {
  return (
    <header className="sticky top-0 z-10 flex items-center justify-center bg-magnolia px-10 py-6 shadow-lg">
      <Link href={`/`}>
        <a className="text-xl font-bold text-main">たまごのブログ</a>
      </Link>
    </header>
  )
}
