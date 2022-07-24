import { Profile } from '@/features/profile/types/profile'
import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'

export type Methods = {
  get: {
    resBody: Profile
    query?: MicroCMSGetSingularQuery
    reqHeaders: MicroCMSReqHeaders
  }
}
