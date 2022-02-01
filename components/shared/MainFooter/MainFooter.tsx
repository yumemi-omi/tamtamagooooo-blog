import { VFC } from 'react'
import Link from 'next/link'

export const MainFooter: VFC = () => {
  return (
    <header className="sticky bottom-0 z-10 flex items-center justify-center px-10 py-6">
      <Link href={`/policy`}>
        <a className="text-xl font-bold text-main">プライバシーポリシー</a>
      </Link>
    </header>
  )
}
