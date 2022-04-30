import { MicroCMSCommonValue } from '@/shared/types/microCMS/common'
import { TextField, Image, RichEdit } from '@/shared/types/microCMS/schema'

export type Profile = {
  title: TextField
  icon: Image
  body: RichEdit
  insta: TextField
  youtube: TextField
} & MicroCMSCommonValue
