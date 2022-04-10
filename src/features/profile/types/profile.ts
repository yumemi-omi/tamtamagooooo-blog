import { MicroCMSCommonValue } from '@/types/microCMS/common'
import { TextField, Image, RichEdit } from '@/types/microCMS/schema'

export type Profile = {
  title: TextField
  icon: Image
  body: RichEdit
  insta: TextField
} & MicroCMSCommonValue
