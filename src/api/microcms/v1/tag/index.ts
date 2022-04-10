import { Tag } from '@/features/tag/types/tag'
import { MicroCMSCaptionValue } from '@/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Tag[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
