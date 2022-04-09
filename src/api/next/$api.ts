import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'
import type { Methods as Methods0 } from './like'
import type { Methods as Methods1 } from './like-by-user'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'undefined/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/like'
  const PATH1 = '/like-by-user'
  const GET = 'GET'
  const POST = 'POST'

  return {
    like: {
      post: (option: { query: Methods0['post']['query']; config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { query: Methods0['post']['query']; config?: T | undefined }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option)
          .json()
          .then((r) => r.body),
      $path: (option?: { method: 'post'; query: Methods0['post']['query'] } | undefined) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
    like_by_user: {
      get: (option: { query: Methods1['get']['query']; config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query: Methods1['get']['query']; config?: T | undefined }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      post: (option: { query: Methods1['post']['query']; config?: T | undefined }) =>
        fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option).json(),
      $post: (option: { query: Methods1['post']['query']; config?: T | undefined }) =>
        fetch<Methods1['post']['resBody']>(prefix, PATH1, POST, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods1['get']['query'] }
          | { method: 'post'; query: Methods1['post']['query'] }
          | undefined,
      ) => `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`,
    },
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
