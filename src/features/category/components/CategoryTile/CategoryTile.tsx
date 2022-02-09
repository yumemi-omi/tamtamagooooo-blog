import { Card } from '@/components/shared/Card'
import { Category } from '@/types/microCMS/api/Category'
import { VFC } from 'react'
import { CategoryBadge } from '@/features/category/components/CategoryBadge'
import { AnchorWrapper } from '@/components/shared/AnchorWrapper'
import Link from 'next/link'

type Props = {
  categories: Category[]
}

export const CategoryTile: VFC<Props> = ({ categories }) => {
  return (
    <Card className="p-5">
      <h2 className="font-bold text-gray-600">カテゴリー</h2>
      <ul className="flex flex-wrap gap-4 p-5">
        {categories.map((category) => (
          <li key={category.id} className="hover:bg-gray-200">
            <Link href={`/category/${category.id}`} passHref>
              <AnchorWrapper>
                <CategoryBadge category={category} />
              </AnchorWrapper>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}