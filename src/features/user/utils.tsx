import { createHash } from 'crypto'
import { NextApiRequest } from 'next'

export const getIp = (req: NextApiRequest) => {
  return req.headers['x-forwarded-for'] || req.socket.remoteAddress || ''
}

export const encryptSha256 = (str: string): string => {
  const hash = createHash('sha256')
  hash.update(str)
  return hash.digest('hex')
}

export const generateUser = async (req: NextApiRequest) => {
  const ip = getIp(req)
  return encryptSha256(ip as string)
}
