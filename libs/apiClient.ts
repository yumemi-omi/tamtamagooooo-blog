import axios from 'axios'
import aspida from '@aspida/axios'
import api from 'api/$api'
import {headers}from 'config'
import {MicroCMSGetQuery, MicroCMSGetSingularQuery} from 'types/microCMS/Query'

const axiosConfig = { timeout: 3000, baseURL: `https://${process.env.SERVICE_ID}.microcms.io/api/v1` }
export const apiClient = api(aspida(axios, axiosConfig))

export const getBlog= (query?:MicroCMSGetQuery )=> {
  return apiClient.blog.$get({headers ,query})
}

export const getBlogDetail= (id:string,query?:MicroCMSGetSingularQuery)=> {
  return apiClient.blog._blogId(id).$get({headers ,query})
}
