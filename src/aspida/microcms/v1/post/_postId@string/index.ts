import { Post } from '@/shared/types/microCMS/api/post'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'

export type Methods = {
  get: {
    resBody: Post
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
