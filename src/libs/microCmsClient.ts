import { createClient } from 'microcms-js-sdk'

export const toritamaServiceVer1Client = createClient({
  serviceDomain: 'toritama-diary',
  apiKey: process.env.MICRO_CMS_API_KEY_VER_1 || '',
})

export const toritamaServiceVer2Client = createClient({
  serviceDomain: 'toritama-diary2',
  apiKey: process.env.MICRO_CMS_API_KEY_VER_2 || '',
})
