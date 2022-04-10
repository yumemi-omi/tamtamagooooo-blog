import { Profile } from '@/features/profile/types/profile'
import { MicroCMSGetSingularQuery } from '@/types/microCMS/query'
import { MicroCMSReqHeaders } from '@/types/microCMS/headers'

export type Methods = {
  get: {
    resBody: Profile
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
