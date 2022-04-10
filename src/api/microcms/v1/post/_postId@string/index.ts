import { MicroCMSReqHeaders } from '@/types/microCMS/headers'
import { MicroCMSGetSingularQuery } from '@/types/microCMS/query'
import { Post } from '@/types/microCMS/api/post'

export type Methods = {
  get: {
    resBody: Post
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
