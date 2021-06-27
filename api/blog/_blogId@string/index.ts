import { MicroCMSReqHeaders } from 'types/microCMS/Headers'
import { MicroCMSGetSingularQuery } from 'types/microCMS/Query'
import { Blog } from 'types/microCMS/api/Blog'

export type Methods = {
  get: {
    resBody: Blog
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
