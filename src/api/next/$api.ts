/* eslint-disable */
// prettier-ignore
import { AspidaClient, dataToURLString } from 'aspida'
// prettier-ignore
import { Methods as Methods0 } from './like'

// prettier-ignore
const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'undefined/api' : baseURL).replace(/\/$/, '')
  const PATH0 = '/like'
  const POST = 'POST'

  return {
    like: {
      post: (option: { query: Methods0['post']['query'], config?: T }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json(),
      $post: (option: { query: Methods0['post']['query'], config?: T }) =>
        fetch<Methods0['post']['resBody']>(prefix, PATH0, POST, option).json().then(r => r.body),
      $path: (option?: { method: 'post'; query: Methods0['post']['query'] }) =>
        `${prefix}${PATH0}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
    }
  }
}

// prettier-ignore
export type ApiInstance = ReturnType<typeof api>
// prettier-ignore
export default api
