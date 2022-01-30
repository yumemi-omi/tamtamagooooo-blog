import { TextField, RichEdit, Image, TextArea } from 'types/microCMS/Schema'
import { MicroCMSCommonValue } from 'types/microCMS/Common'

export type Blog = {
  title: TextField
  summary?: TextArea
  body: RichEdit
  thumbnail?: Image
} & MicroCMSCommonValue
