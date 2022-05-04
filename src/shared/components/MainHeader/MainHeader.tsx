import { FC } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const MainHeader: FC = () => {
  const router = useRouter()
  const isPostDetail = router.pathname.includes('/post/')
  return (
    <header className="fixed top-0 z-20 flex items-center justify-center w-screen px-10 py-6 shadow-lg bg-magnolia">
      <Link href={`/`}>
        <a className="font-bold text-center text-main">
          {isPostDetail ? (
            <>
              <span className="block text-4xl">とりたま日記</span>
              <span className="block mt-1 text-xs">とりあえず書く、たまごであった</span>
            </>
          ) : (
            <h1>
              <span className="block text-4xl">とりたま日記</span>
              <span className="block mt-1 text-xs">とりあえず書く、たまごであった</span>
            </h1>
          )}
        </a>
      </Link>
    </header>
  )
}
