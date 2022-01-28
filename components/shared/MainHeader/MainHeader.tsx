import { VFC } from 'react'
import Link from 'next/link'

export const MainHeader: VFC = () => {
  return (
    <header className="bg-magnolia sticky px-10 py-6 top-0 z-10 flex place-items-center shadow-lg">
      <Link href={`/`}>
        <a className="text-main text-xl font-bold">たまごのブログ</a>
      </Link>
    </header>
  )
}
