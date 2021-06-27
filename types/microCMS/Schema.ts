export type TextField = string
export type TextArea = string
export type RichEdit = string
export type Image = {
  url: string
  width: number
  height: number
}

export type MicroCMSCommonValue = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
}

export type MicroCMSCaptionValue = {
  totalCount: number
  offset: number
  limit: number
}
