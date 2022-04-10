import { Category } from '@/types/microCMS/api/category'
import { MicroCMSCaptionValue } from '@/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Category[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
