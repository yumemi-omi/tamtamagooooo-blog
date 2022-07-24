import { TagbadgeColorType } from '@/features/tag/components/TagBadge'
import { MicroCMSCommonValue } from '@/shared/types/microCMS/common'

export type Tag = {
  name: string
  color: TagbadgeColorType
} & MicroCMSCommonValue
