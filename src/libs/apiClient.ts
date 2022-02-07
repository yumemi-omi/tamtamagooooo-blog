import axios from 'axios'
import aspida from '@aspida/axios'
import api from '@/api/$api'

const axiosConfig = {
  timeout: 3000,
  baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1`,
}
export const apiClient = api(aspida(axios, axiosConfig))
