import { headers } from '@/config'
import { microcmsApiClient } from '@/libs/apiClient'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export const fetchTag = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.tag.$get({ headers, query })
}
