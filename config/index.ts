import { MicroCMSReqHeaders } from '../types/microCMS/Headers'

export const headers: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.MICRO_CMS_API_KEY ?? '',
}
