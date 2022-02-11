import { VFC } from 'react'
import Link from 'next/link'

export const MainFooter: VFC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-10 py-6">
      <Link href={`/policy`}>
        <a className="z-10 text-xl font-bold text-main">プライバシーポリシー</a>
      </Link>
      <div className="z-10 flex flex-wrap items-center justify-center">
        <span>© 2022 とりたま日記.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}
