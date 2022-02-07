import { microcmsApiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export const fetchCategory = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.category.$get({ headers, query })
}
