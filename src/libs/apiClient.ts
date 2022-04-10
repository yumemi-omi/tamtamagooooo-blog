import axios from 'axios'
import aspida from '@aspida/axios'
import microcmsApi from '@/api/microcms/v1/$api'
import nextApi from '@/api/next/$api'

const microcmsAxiosConfigVer1 = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID_VER_1}.microcms.io/api/v1`,
}
export const microcmsApiClient = microcmsApi(aspida(axios, microcmsAxiosConfigVer1))

const microcmsAxiosConfigVer2 = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID_VER_2}.microcms.io/api/v1`,
}
export const microcmsApiClientVer2 = microcmsApi(aspida(axios, microcmsAxiosConfigVer2))

const nextAxiosConfig = {
  timeout: 3000,
  baseURL: `${process.env.APP_ROOT_URL}/api`,
}
export const nextApiClient = nextApi(aspida(axios, nextAxiosConfig))
