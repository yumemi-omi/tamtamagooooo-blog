import { Category } from '@/shared/types/microCMS/api/category'
import { MicroCMSCaptionValue } from '@/shared/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/shared/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Category[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
