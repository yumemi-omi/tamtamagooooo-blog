import { Category } from '@/types/microCMS/api/Category'
import { MicroCMSCaptionValue } from '@/types/microCMS/Common'
import { MicroCMSReqHeaders } from '@/types/microCMS/Headers'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export type Methods = {
  get: {
    resBody: {
      contents: Category[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
