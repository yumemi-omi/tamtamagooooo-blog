import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'
import { Post } from '@/shared/types/microCMS/api/post'

export type Methods = {
  get: {
    resBody: Post
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
