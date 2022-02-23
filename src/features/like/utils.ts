import { NextApiRequest } from 'next'

export const getIp = (req: NextApiRequest) => {
  return req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''
}
