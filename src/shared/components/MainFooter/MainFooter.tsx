import Link from 'next/link'
import { FC } from 'react'

import { Adsense } from '@/shared/components/Adsense'

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
          className="underline text-sky-600"
          href="https://dotown.maeda-design-room.net/"
          rel="noreferrer"
        >
          DOTOWN
        </a>
        の
        <a
          className="underline text-sky-600"
          target="_blank"
          href="https://dotown.maeda-design-room.net/term-of-use/"
          rel="noreferrer"
        >
          利用規約
        </a>
        に従って使用しております。
      </p>
      <p className="text-sm">
        お問い合わせは
        <a
          className="underline text-sky-600"
          target="_blank"
          href="https://forms.gle/ZVaX97a93dREN7fP8"
          rel="noreferrer"
        >
          こちら
        </a>
      </p>
      <div className="z-10 flex flex-wrap items-center justify-center">
        <span>© 2022 とりたま日記.</span>
        <span>All rights reserved.</span>
      </div>
    </footer>
  )
}
