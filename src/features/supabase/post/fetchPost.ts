import { supabase } from '@/libs/supabaseClient'

export const fetchPost = (postId: string) => supabase.from('post').select('*').eq('post_id', postId)
