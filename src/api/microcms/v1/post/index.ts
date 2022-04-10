import { Post } from '@/types/microCMS/api/post'
import { MicroCMSCaptionValue } from '@/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Post[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
