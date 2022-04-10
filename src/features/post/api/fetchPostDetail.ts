import { microcmsApiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetSingularQuery } from '@/types/microCMS/query'

export const fetchPostDetail = (id: string, query?: MicroCMSGetSingularQuery) => {
  return microcmsApiClient.post._postId(id).$get({ headers, query })
}
