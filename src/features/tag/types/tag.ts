import { MicroCMSCommonValue } from '@/shared/types/microCMS/common'
import { TagbadgeColorType } from '@/features/tag/components/TagBadge'

export type Tag = {
  name: string
  color: TagbadgeColorType
} & MicroCMSCommonValue
