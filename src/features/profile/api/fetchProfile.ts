import { headersVer2 } from '@/config'
import { microcmsApiClientVer2 } from '@/libs/apiClient'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'

export const fetchProfile = (query?: MicroCMSGetSingularQuery) => {
  return microcmsApiClientVer2.profile.$get({ headers: headersVer2, query })
}
