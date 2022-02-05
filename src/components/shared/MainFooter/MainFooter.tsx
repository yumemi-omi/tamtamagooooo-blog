import { VFC } from 'react'
import Link from 'next/link'

export const MainFooter: VFC = () => {
  return (
    <footer className="flex items-center justify-center px-10 py-6">
      <Link href={`/policy`}>
        <a className="text-xl font-bold text-main">プライバシーポリシー</a>
      </Link>
    </footer>
  )
}
