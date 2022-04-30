import axios from 'axios'
import aspida from '@aspida/axios'
import microcmsApi from '@/aspida/microcms/v1/$api'
import microcmsApiVer2 from '@/aspida/microcms/v2/$api'
import nextApi from '@/aspida/next/$api'

const microcmsAxiosConfigVer1 = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID_VER_1}.microcms.io/api/v1`,
}
export const microcmsApiClient = microcmsApi(aspida(axios, microcmsAxiosConfigVer1))

const microcmsAxiosConfigVer2 = {
  timeout: 3000,
  baseURL: `https://toritama-diary2.microcms.io/api/v1`,
}
export const microcmsApiClientVer2 = microcmsApiVer2(aspida(axios, microcmsAxiosConfigVer2))

const nextAxiosConfig = {
  timeout: 3000,
  baseURL: `${process.env.APP_ROOT_URL}/api`,
}
export const nextApiClient = nextApi(aspida(axios, nextAxiosConfig))
