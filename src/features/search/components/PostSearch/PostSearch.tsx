import { useRouter } from 'next/router'
import { useState, FC } from 'react'

export const PostSearch: FC = () => {
  const router = useRouter()
  const [keyword, setKeyword] = useState<string>((router.query.q as string) || '')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!keyword.trim()) {
      return
    }
    router.push(`/search?q=${keyword}`)
  }

  const handleTextInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-bold text-gray-600">サイト内検索</label>
        <div className="flex flex-wrap items-center gap-1">
          <input
            id="keyword"
            type="text"
            value={keyword}
            onChange={handleTextInputChange}
            placeholder="検索ワードを入力"
            className="flex-grow block px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
          />
          <button
            className="px-3 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded-md min-w-max hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            disabled={keyword.length === 0}
          >
            検索
          </button>
        </div>
      </div>
    </form>
  )
}
