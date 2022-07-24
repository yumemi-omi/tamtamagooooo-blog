import { headers } from '@/config'
import { microcmsApiClient } from '@/libs/apiClient'
import { MicroCMSGetSingularQuery } from '@/shared/types/microCMS/query'

export const fetchPostDetail = (id: string, query?: MicroCMSGetSingularQuery) => {
  return microcmsApiClient.post._postId(id).$get({ headers, query })
}
