/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './blog'
// prettier-ignore
import { Methods as Methods1 } from './blog/_blogId@string'
// prettier-ignore
import { Methods as Methods2 } from './category'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://undefined.microcms.io/api/v1' : baseURL).replace(/\/$/, '')
  const PATH0 = '/blog'
  const PATH1 = '/category'
  const GET = 'GET'

  return {
    blog: {
      _blogId: (val1: string) => {
        const prefix1 = `${PATH0}/${val1}`

        return {
          get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json(),
          $get: (option: { query?: Methods1['get']['query'], headers: Methods1['get']['reqHeaders'], config?: T }) =>
            fetch<Methods1['get']['resBody']>(prefix, prefix1, GET, option).json().then(r => r.body),
          $path: (option?: { method?: 'get'; query: Methods1['get']['query'] }) =>
            `${prefix}${prefix1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
        }
      },
      get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json(),
      $get: (option: { query?: Methods0['get']['query'], headers: Methods0['get']['reqHeaders'], config?: T }) =>
        fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods0['get']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    },
    category: {
      get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json(),
      $get: (option: { query?: Methods2['get']['query'], headers: Methods2['get']['reqHeaders'], config?: T }) =>
        fetch<Methods2['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
      $path: (option?: { method?: 'get'; query: Methods2['get']['query'] }) =>
        `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
