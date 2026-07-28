import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client utama untuk operasi standar (Auth, Read, Write dengan RLS)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Client khusus Server/Backend (Hanya dipakai di API Routes)
export const getServiceSupabase = () => {
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!serviceKey) throw new Error('SUPABASE_SERVICE_ROLE_KEY is missing');
  return createClient(supabaseUrl, serviceKey);
};
