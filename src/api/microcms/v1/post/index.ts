import { Post } from '@/types/microCMS/api/Post'
import { MicroCMSCaptionValue } from '@/types/microCMS/Common'
import { MicroCMSReqHeaders } from '@/types/microCMS/Headers'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export type Methods = {
  get: {
    resBody: {
      contents: Post[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
