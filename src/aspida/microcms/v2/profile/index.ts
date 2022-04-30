import { Profile } from '@/features/profile/types/profile'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'

export type Methods = {
  get: {
    resBody: Profile
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
