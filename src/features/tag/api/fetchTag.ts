import { headers } from '@/config'
import { microcmsApiClient } from '@/libs/apiClient'
import { MicroCMSGetQuery } from '@/types/microCMS/Query'

export const fetchTag = (query?: MicroCMSGetQuery) => {
  return microcmsApiClient.tag.$get({ headers, query })
}
