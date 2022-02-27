import { Like } from '@/features/supabase/like/types'

export type Methods = {
  get: {
    resBody: {
      success: boolean
      status: string
      likeByUser: Like
      canLike: boolean
    }
    query: { post_id: string }
  }
  post: {
    resBody: {
      success: boolean
      status: string
    }
    query: {
      post_id: string
      count: number
    }
  }
}
