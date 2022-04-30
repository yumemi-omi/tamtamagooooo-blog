import { Tag } from '@/features/tag/types/tag'
import { MicroCMSCaptionValue } from '@/shared/types/microCMS/common'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetQuery } from '@/shared/types/microCMS/query'

export type Methods = {
  get: {
    resBody: {
      contents: Tag[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
