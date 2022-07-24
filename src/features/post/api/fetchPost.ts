import { headers } from '@/config'
import { microcmsApiClient } from '@/libs/apiClient'
import { MicroCMSGetQuery } from '@/shared/types/microCMS/query'

export const fetchPost = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.post.$get({ headers, query })
}
