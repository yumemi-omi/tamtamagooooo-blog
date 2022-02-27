import { supabase } from '@/libs/supabaseClient'

export const fetchUser = (userId: string) => supabase.from('user').select('*').eq('user_id', userId)
