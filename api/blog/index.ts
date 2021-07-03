import { Blog } from 'types/microCMS/api/Blog'
import { MicroCMSCaptionValue } from 'types/microCMS/Common'
import { MicroCMSReqHeaders } from 'types/microCMS/Headers'
import { MicroCMSGetQuery } from 'types/microCMS/Query'

export type Methods = {
  get: {
    resBody: {
      contents: Blog[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
