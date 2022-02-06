import { TextField, RichEdit, Image, TextArea } from '@/types/microCMS/Schema'
import { MicroCMSCommonValue } from '@/types/microCMS/Common'
import { Category } from './Category'
import { Tag } from '@/features/tag/types/Tag'

export type Post = {
  title: TextField
  summary?: TextArea
  body: RichEdit
  thumbnail?: Image
  category: Category
  tags: Tag[]
} & MicroCMSCommonValue
