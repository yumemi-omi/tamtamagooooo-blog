import { TextField, RichEdit, Image } from 'types/microCMS/Schema'
import { MicroCMSCommonValue } from 'types/microCMS/Common'

export type Blog = {
  title: TextField
  body: RichEdit
  thumbnail?: Image
} & MicroCMSCommonValue
