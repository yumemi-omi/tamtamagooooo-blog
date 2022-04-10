import { microcmsApiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetQuery } from '@/types/microCMS/query'

export const fetchPost = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.post.$get({ headers, query })
}
