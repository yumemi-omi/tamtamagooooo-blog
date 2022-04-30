import { Post } from '@/shared/types/microCMS/api/post'
import { MicroCMSCaptionValue } from '@/shared/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/shared/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Post[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
