import { upsertLike } from '@/features/like/api/upsertLike'
import { fetchLike } from '@/features/like/api/fetchLike'
import { insertUser, insertPost } from '@/libs/supabaseClient'
import { encryptSha256 } from '@/features/user/utils'
import { NextApiRequest, NextApiResponse } from 'next'
import { getIp } from '@/features/like/utils'

export default async function likeHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { post_id },
  } = req
  const ip = getIp(req)
  const uniqueUserId = encryptSha256(ip as string)

  const result = await submitLike(post_id as string, uniqueUserId)
  console.log({ result: result.data })
  const status = result.status
  if (status === 201) {
    res.status(status).json({ success: true, status })
  } else {
    res.status(status).json({ success: false, status })
  }
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
