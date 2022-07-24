import Link from 'next/link'
import { FC } from 'react'

import { TagBadge } from '@/features/tag/components/TagBadge'
import { Tag } from '@/features/tag/types/tag'
import { AnchorWrapper } from '@/shared/components/AnchorWrapper'
import { Card } from '@/shared/components/Card'

type Props = {
  tags: Tag[]
}

export const TagTile: FC<Props> = ({ tags }) => {
  return (
    <Card className="p-5">
      <h2 className="font-bold text-gray-600">タグ</h2>
      <ul className="flex flex-wrap gap-4 p-5">
        {tags.map((tag) => (
          <li key={tag.id} className="hover-zoom-in">
            <Link href={`/tag/${tag.id}/1`} passHref>
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
