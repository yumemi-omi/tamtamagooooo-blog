import { headers } from '@/config'
import { microcmsApiClient } from '@/libs/apiClient'
import { MicroCMSGetQuery } from '@/shared/types/microCMS/query'

export const fetchCategory = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.category.$get({ headers, query: { limit: 100, ...query } })
}
