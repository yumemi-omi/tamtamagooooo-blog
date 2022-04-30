import { TextField, RichEdit, Image, TextArea } from '@/shared/types/microCMS/schema'
import { MicroCMSCommonValue } from '@/shared/types/microCMS/common'
import { Category } from './category'
import { Tag } from '@/features/tag/types/tag'

export type Post = {
  title: TextField
  summary?: TextArea
  body: RichEdit
  thumbnail?: Image
  category: Category
  tags: Tag[]
} & MicroCMSCommonValue
