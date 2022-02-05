import { ReactNode, VFC } from 'react'
import { TagbadgeColorType, TAG_BADGE_COLOR_SET } from '@/features/tag/constants'

type Props = {
  children: ReactNode
  badgeColor?: TagbadgeColorType
}

export const TagBadge: VFC<Props> = ({ children, badgeColor = 'gray' }) => {
  return (
    <span
      className={`rounded-full text-white px-3 py-1 text-xs uppercase font-medium ${TAG_BADGE_COLOR_SET[badgeColor]}`}
    >
      {children}
    </span>
  )
}
