import { MicroCMSCommonValue } from '@/types/microCMS/common'
import { TagbadgeColorType } from '@/features/tag/components/TagBadge'

export type Tag = {
  name: string
  color: TagbadgeColorType
} & MicroCMSCommonValue
