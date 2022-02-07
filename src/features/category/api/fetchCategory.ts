import { apiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export const fetchCategory = (query?: MicroCMSGetQuery) => {
  return apiClient.category.$get({ headers, query })
}
