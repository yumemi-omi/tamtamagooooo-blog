import { dataToURLString } from 'aspida'

import type { Methods as Methods0 } from './profile'
import type { AspidaClient } from 'aspida'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://undefined.microcms.io/api/v1' : baseURL).replace(
    /\/$/,
    '',
  )
  const PATH0 = '/profile'
  const GET = 'GET'

  return {
    profile: {
      get: (option: {
        query?: Methods0['get']['query'] | undefined
        headers: Methods0['get']['reqHeaders']
        config?: T | undefined
      }) => fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: {
        query?: Methods0['get']['query'] | undefined
        headers: Methods0['get']['reqHeaders']
        config?: T | undefined
      }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?: { method?: 'get' | undefined; query: Methods0['get']['query'] } | undefined,
      ) => `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
