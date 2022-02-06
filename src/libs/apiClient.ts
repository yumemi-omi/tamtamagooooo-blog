import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'
import { headers } from '@/config'
import { MicroCMSGetQuery, MicroCMSGetSingularQuery } from '@/types/microCMS/Query'

const axiosConfig = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1`,
}
export const apiClient = api(aspida(axios, axiosConfig))

export const fetchPost = (query?: MicroCMSGetQuery) => {
  return apiClient.post.$get({ headers, query })
}

export const fetchPostDetail = (id: string, query?: MicroCMSGetSingularQuery) => {
  return apiClient.post._postId(id).$get({ headers, query })
}

export const fetchCategory = (query?: MicroCMSGetQuery) => {
  return apiClient.category.$get({ headers, query })
}
