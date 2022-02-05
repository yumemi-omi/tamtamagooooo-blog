import { MicroCMSCommonValue } from 'types/microCMS/Common'
import { TagbadgeColorType } from 'features/tag/constants'

export type Tag = {
  name: string
  color: TagbadgeColorType
} & MicroCMSCommonValue
