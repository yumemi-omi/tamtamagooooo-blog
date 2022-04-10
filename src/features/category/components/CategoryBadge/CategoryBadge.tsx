import { VFC } from 'react'
import { Category } from '@/types/microCMS/api/category'

type Props = {
  category: Category
}

export const CategoryBadge: VFC<Props> = ({ category }) => {
  return (
    <p className="self-start px-2 py-1 font-bold border border-solid rounded text-sub-accent border-sub-accent min-w-max">
      {category.name}
    </p>
  )
}
