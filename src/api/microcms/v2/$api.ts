import type { AspidaClient } from 'aspida'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? 'https://undefined.microcms.io/api/v1' : baseURL).replace(
    /\/$/,
    '',
  )

  return {}
}

export type ApiInstance = ReturnType<typeof api>
export default api
