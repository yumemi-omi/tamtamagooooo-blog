import { Tag } from '@/features/tag/types/tag'
import { MicroCMSCommonValue } from '@/shared/types/microCMS/common'
import { TextField, RichEdit, Image, TextArea } from '@/shared/types/microCMS/schema'

import { Category } from './category'

export type Post = {
  title: TextField
  summary?: TextArea
  body: RichEdit
  thumbnail?: Image
  category: Category
  tags: Tag[]
} & MicroCMSCommonValue
