import Link from 'next/link'
import { VFC } from 'react'

type Props = {
  pageMeta: {
    pager: number[]
    currentPage: number
  }
}

export const Pagination: VFC<Props> = ({ pageMeta }) => {
  return (
    <div className="flex items-center space-x-1">
      {pageMeta.currentPage !== 1 && (
        <Link href={`/page/${pageMeta.currentPage - 1}`}>
          <a className={`flex items-center px-4 pt-2 pb-1 text-gray-700   hover:text-main`}>
            &lt; 前ページへ
          </a>
        </Link>
      )}
      {pageMeta.pager.map((page) => (
        <Link href={`/page/${page}`} key={page}>
          <a
            className={`px-4 pt-2  pb-1 text-gray-700 hover:text-main ${
              pageMeta.currentPage === page && 'text-main border-b-main border-b-2'
            }`}
          >
            {page}
          </a>
        </Link>
      ))}
      {pageMeta.currentPage !== pageMeta.pager.length && (
        <Link href={`/page/${pageMeta.currentPage + 1}`}>
          <a className={`flex items-center px-4 pt-2 pb-1 text-gray-700 hover:text-main`}>
            次ページへ &gt;
          </a>
        </Link>
      )}
    </div>
  )
}
