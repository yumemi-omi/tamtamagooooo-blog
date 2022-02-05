import { headers } from '@/config'
import { apiClient } from '@/libs/apiClient'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export const fetchTag = (query?: MicroCMSGetQuery) => {
  return apiClient.tag.$get({ headers, query })
}
