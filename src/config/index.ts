import { MicroCMSReqHeaders } from '@/types/microCMS/Headers'

export const headers: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.MICRO_CMS_API_KEY_VER_1 ?? '',
}

export const headersVer2: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.MICRO_CMS_API_KEY_VER2 ?? '',
}
