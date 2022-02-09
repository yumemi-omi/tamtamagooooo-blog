import { VFC } from 'react'
import Link from 'next/link'

export const MainFooter: VFC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-10 py-6">
      <Link href={`/policy`}>
        <a className="text-xl font-bold text-main">プライバシーポリシー</a>
      </Link>
      <span>© 2022 とりたま日記. All rights reserved.</span>
    </footer>
  )
}
