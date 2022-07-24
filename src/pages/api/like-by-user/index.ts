import { NextApiRequest, NextApiResponse } from 'next'

import { fetchLike } from '@/features/supabase/like/fetchLike'
import { Like } from '@/features/supabase/like/types'
import { upsertLike } from '@/features/supabase/like/upsertLike'
import { upsertPost } from '@/features/supabase/post/upsertPost'
import { insertUser } from '@/features/supabase/user/insertUser'
import { encryptSha256 } from '@/features/user/utils'
import { getIp } from '@/features/user/utils'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { post_id, count },
    method,
  } = req
  const ip = getIp(req)
  const uniqueUserId = encryptSha256(ip as string)
  const fetchLikeResponse = await fetchLike({ postId: post_id as string, userId: uniqueUserId })
  const fetchLikeResponseStatus = fetchLikeResponse.status
  const fetchedLikes: Like[] = fetchLikeResponse.data || []
  const likeByUser = fetchedLikes[0] || {
    id: '',
    count: 0,
    user_id: '',
    post_id: '',
  }

  switch (method) {
    case 'GET': {
      const MAX_LIKE = 10
      const canLike = likeByUser.count === MAX_LIKE
      if (fetchLikeResponseStatus === 200) {
        res
          .status(fetchLikeResponseStatus)
          .json({ success: true, status: fetchLikeResponseStatus, likeByUser, canLike })
      } else {
        res.status(fetchLikeResponseStatus).json({
          success: false,
          status: fetchLikeResponseStatus,
          likeByUser: {
            id: '',
            count: 0,
            user_id: '',
            post_id: '',
          },
          canLike: false,
        })
      }
      break
    }
    case 'POST': {
      await insertUser(uniqueUserId)
      await upsertPost({
        uniqueId: post_id as string,
        postId: post_id as string,
        totalCount: Number(count) || 0,
      })
      const upsertLikeResponse = await upsertLike({
        id: likeByUser ? likeByUser.id : '',
        count: likeByUser ? likeByUser.count + 1 : 1,
        userId: uniqueUserId,
        postId: post_id as string,
      })
      const upsertLikeResponseStatus = upsertLikeResponse.status
      if (upsertLikeResponseStatus === 201) {
        res.status(upsertLikeResponseStatus).json({
          success: true,
          status: upsertLikeResponseStatus,
        })
      } else {
        res.status(upsertLikeResponseStatus).json({
          success: false,
          status: upsertLikeResponseStatus,
        })
      }
      break
    }
  }
}
