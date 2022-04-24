import { FC } from 'react'
import Link from 'next/link'
import { Adsense } from '@/components/shared/Adsense'

export const MainFooter: FC = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-2 px-10 py-6">
      <Adsense />
      <Link href={`/policy`}>
        <a className="z-10 text-xl font-bold text-main">プライバシーポリシー</a>
      </Link>
      <p className="text-sm">
        「粗ドット絵」は
        <a
          target="_blank"
          className="underline text-sky-400"
          href="https://dotown.maeda-design-room.net/"
          rel="noreferrer"
        >
          DOTOWN
        </a>
        の
        <a
          className="underline text-sky-400"
          target="_blank"
          href="https://dotown.maeda-design-room.net/term-of-use/"
          rel="noreferrer"
        >
          利用規約
        </a>
        に従って使用しております。
      </p>
      <div className="z-10 flex flex-wrap items-center justify-center">
        <span>© 2022 とりたま日記.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}
