import { microcmsApiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export const fetchCategory = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.category.$get({ headers, query: { limit: 100, ...query } })
}
