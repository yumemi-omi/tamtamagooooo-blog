import { apiClient } from '@/libs/apiClient'
import { headers } from '@/config'
import { MicroCMSGetSingularQuery } from '@/types/microCMS/Query'

export const fetchPostDetail = (id: string, query?: MicroCMSGetSingularQuery) => {
  return apiClient.post._postId(id).$get({ headers, query })
}
