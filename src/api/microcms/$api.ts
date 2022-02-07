/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './category'
// prettier-ignore
import { Methods as Methods1 } from './post'
// prettier-ignore
import { Methods as Methods2 } from './post/_postId@string'
// prettier-ignore
import { Methods as Methods3 } from './tag'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://undefined.microcms.io/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/category'
  const PATH1 = '/post'
  const PATH2 = '/tag'
  const GET = 'GET'

  return {
    category: {
      get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    post: {
      _postId: (val1: string) => {
        const prefix1 = `${PATH1}/${val1}`

        return {
          get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
            fetch<Methods2['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
        fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    tag: {
      get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json(),
      $get: (option: { query?: Methods3['get']['query'], headers: Methods3['get']['reqHeaders'], config?: T }) =>
        fetch<Methods3['get']['resBody']>(prefix, PATH2, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods3['get']['query'] }) =>
        `${prefix}${PATH2}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
