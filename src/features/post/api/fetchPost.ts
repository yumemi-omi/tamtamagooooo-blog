import { apiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export const fetchPost = (query?: MicroCMSGetQuery) => {
  return apiClient.post.$get({ headers, query })
}
