import { Card } from '@/components/shared/Card'
import { Tag } from '@/features/tag/types/Tag'
import { VFC } from 'react'
import { TagBadge } from '@/features/tag/components/TagBadge'
import { AnchorWrapper } from '@/components/shared/AnchorWrapper'
import Link from 'next/link'

type Props = {
  tags: Tag[]
}

export const TagTile: VFC<Props> = ({ tags }) => {
  return (
    <Card className="p-5">
      <h2 className="font-bold text-gray-600">タグ</h2>
      <ul className="flex flex-wrap gap-4 p-5">
        {tags.map((tag) => (
          <li key={tag.id} className="hover-zoom-in">
            <Link href={`/tag/${tag.id}`} passHref>
              <AnchorWrapper>
                <TagBadge tag={tag} />
              </AnchorWrapper>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  )
}
