import { ReactNode, VFC } from 'react'

const TAG_BADGE_COLOR_SET = {
  gray: 'bg-gray-800',
  indigo: 'bg-indigo-500',
  green: 'bg-green-500',
  red: 'bg-red-500',
  yellow: 'bg-yellow-800',
  blue: 'bg-blue-800',
}

export type TagbadgeColorType = keyof typeof TAG_BADGE_COLOR_SET

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
