import { supabase } from '@/libs/supabaseClient'

export const insertUser = (userId: string) => supabase.from('user').insert([{ user_id: userId }])
