import { supabase } from '@/libs/supabaseClient'

export const upsertLike = ({
  id,
  count,
  userId,
  postId,
}: {
  id: string
  count: number
  userId: string
  postId: string
}) =>
  supabase
    .from('like')
    .upsert(
      id
        ? { id, count, user_id: userId, post_id: postId }
        : { count, user_id: userId, post_id: postId },
      { onConflict: 'id' },
    )
