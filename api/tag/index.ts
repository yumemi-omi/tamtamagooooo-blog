import { Tag } from 'features/tag/types/Tag'
import { MicroCMSCaptionValue } from 'types/microCMS/Common'
import { MicroCMSReqHeaders } from 'types/microCMS/Headers'
import { MicroCMSGetQuery } from 'types/microCMS/Query'

export type Methods = {
  get: {
    resBody: {
      contents: Tag[]
    } & MicroCMSCaptionValue
    query?: MicroCMSGetQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
