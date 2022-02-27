import { supabase } from '@/libs/supabaseClient'

export const upsertPost = ({
  uniqueId,
  totalCount,
  postId,
}: {
  uniqueId: string
  totalCount: number
  postId: string
}) =>
  supabase
    .from('post')
    .upsert(
      uniqueId
        ? { id: uniqueId, like_total: totalCount, post_id: postId }
        : { like_total: totalCount, post_id: postId },
      { onConflict: 'id' },
    )
