import { MicroCMSReqHeaders } from '@/shared/types/microCMS/headers'

export const headers: MicroCMSReqHeaders = {
  'X-API-KEY': process.env.MICRO_CMS_API_KEY_VER_1 ?? '',
}

export const headersVer2: MicroCMSReqHeaders = {
  'X-MICROCMS-API-KEY': process.env.MICRO_CMS_API_KEY_VER_2 ?? '',
}
