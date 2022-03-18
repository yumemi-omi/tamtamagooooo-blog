import type { NextApiRequest, NextApiResponse } from 'next'
import { fetchPost } from '@/features/post/api/fetchPost'

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.q !== 'string') {
    res.status(404).end()
    return
  }

  const data = await fetchPost({
    q: req.query.q,
    orders: '-publishedAt',
  })

  res.status(200).json({ ...data })
}

export default search
