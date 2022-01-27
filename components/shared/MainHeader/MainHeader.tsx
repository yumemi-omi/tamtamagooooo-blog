import { VFC } from 'react'
import Link from 'next/link'

export const MainHeader: VFC = () => {
  return (
    <header>
      <Link href={`/`}>
        <a>たまごのブログ</a>
      </Link>
    </header>
  )
}
