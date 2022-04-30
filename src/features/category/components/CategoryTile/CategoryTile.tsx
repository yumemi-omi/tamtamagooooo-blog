import { Card } from '@/shared/components/Card'
import { Category } from '@/shared/types/microCMS/api/category'
import { FC } from 'react'
import { CategoryBadge } from '@/features/category/components/CategoryBadge'
import { AnchorWrapper } from '@/shared/components/AnchorWrapper'
import Link from 'next/link'

type Props = {
  categories: Category[]
}

export const CategoryTile: FC<Props> = ({ categories }) => {
  return (
    <Card className="p-5">
      <h2 className="font-bold text-gray-600">カテゴリー</h2>
      <ul className="flex flex-wrap gap-4 p-5">
        {categories.map((category) => (
          <li key={category.id} className="hover-zoom-in">
            <Link href={`/category/${category.id}/1`} passHref>
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
