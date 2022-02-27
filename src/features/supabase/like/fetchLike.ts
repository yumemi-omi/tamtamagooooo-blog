import { supabase } from '@/libs/supabaseClient'

export const fetchLike = ({ userId, postId }: { userId?: string; postId?: string }) => {
  let query = supabase.from('like').select('id, count, post_id, user_id')

  if (userId) {
    query = query.eq('user_id', userId)
  }
  if (postId) {
    query = query.eq('post_id', postId)
  }

  return query
}
