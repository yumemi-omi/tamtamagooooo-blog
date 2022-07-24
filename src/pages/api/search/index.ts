import { fetchPost } from '@/features/post/api/fetchPost'

import type { NextApiRequest, NextApiResponse } from 'next'

const search = async (req: NextApiRequest, res: NextApiResponse) => {
  if (typeof req.query.q !== 'string') {
    res.status(404).end()
    return
  }

  const data = await fetchPost({
    q: req.query.q,
    orders: '-publishedAt',
    limit: 100,
  })

  res.status(200).json({ ...data })
}

export default search
