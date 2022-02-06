import { VFC } from 'react'
import Link from 'next/link'

export const MainHeader: VFC = () => {
  return (
    <header className="fixed top-0 z-10 flex items-center justify-center w-screen px-10 py-6 shadow-lg bg-magnolia">
      <Link href={`/`}>
        <a className="font-bold text-center text-main">
          <span className="block text-4xl">とりたま日記</span>
          <span className="block mt-1 text-xs">とりあえず書く、たまごであった</span>
        </a>
      </Link>
    </header>
  )
}