import axios from 'axios'
import aspida from '@aspida/axios'
import microcmsApi from '@/api/microcms/$api'
import nextApi from '@/api/next/$api'

const microcmsAxiosConfig = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1`,
}
export const microcmsApiClient = microcmsApi(aspida(axios, microcmsAxiosConfig))

const nextAxiosConfig = {
  timeout: 3000,
  baseURL: `${process.env.APP_ROOT_URL}/api`,
}
export const nextApiClient = nextApi(aspida(axios, nextAxiosConfig))
