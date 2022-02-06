import { MicroCMSCommonValue } from '@/types/microCMS/Common'
import { TagbadgeColorType } from '@/features/tag/components/TagBadge'

export type Tag = {
  name: string
  color: TagbadgeColorType
} & MicroCMSCommonValue
