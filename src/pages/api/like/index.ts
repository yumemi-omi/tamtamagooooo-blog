// import sha256 from 'crypto-js/sha256'
// import hmacSHA512 from 'crypto-js/hmac-sha512'
// import Base64 from 'crypto-js/enc-base64'
import { upsertLike } from '@/features/like/api/upsertLike'
import { fetchLike } from '@/features/like/api/fetchLike'
import { insertUser, insertPost } from '@/libs/supabaseClient'
import { encryptSha256 } from '@/features/user/utils'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function likeHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { post_id },
    // method,
  } = req
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || null
  // const hashDigest = sha256(ip)
  // const key = process.env.PRIVATE_KEY || ''
  // const uniqueUserId = Base64.stringify(hmacSHA512(hashDigest, key))
  const uniqueUserId = encryptSha256(ip as string)

  const result = await submitLike(post_id as string, uniqueUserId)
  console.log({ result: result.data })
  const status = result.status
  if (status === 201) {
    res.status(status).json({ success: true, status })
  } else {
    res.status(status).json({ success: false, status })
  }

  // switch (method) {
  //   case 'GET':
  //     res.status(200).json({ post_id, name: `User ${uniqueUserId}` })
  //     break
  //   case 'PUT':
  //     // Update or create data in your database
  //     res.status(200).json({ post_id, name: name || `User ${uniqueUserId}` })
  //     break
  //   default:
  //     res.setHeader('Allow', ['GET', 'PUT'])
  //     res.status(405).end(`Method ${method} Not Allowed`)
  // }
}

const submitLike = async (post_id: string, user_id: string) => {
  await insertUser(user_id)
  await insertPost(post_id)
  const response = await fetchLike({ whereColumn: 'user_id', whereValue: user_id })

  const fetchedLike = response.data?.length ? response.data[0] : null

  const result = await upsertLike({
    id: fetchedLike ? fetchedLike.id : '',
    count: fetchedLike ? fetchedLike.count + 1 : 1,
    userId: user_id,
    postId: post_id,
  })

  return result
}
