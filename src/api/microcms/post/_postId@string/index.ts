import { MicroCMSReqHeaders } from '@/types/microCMS/Headers'
import { MicroCMSGetSingularQuery } from '@/types/microCMS/Query'
import { Post } from '@/types/microCMS/api/Post'

export type Methods = {
  get: {
    resBody: Post
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
