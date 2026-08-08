import { createClient } from "@supabase/supabase-js";

// Menggunakan URL & Anon Key langsung untuk memastikan koneksi 100% presisi
const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
  "https://goontgeilithnzirveet.supabase.co";

const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvb250Z2VpbGl0aG56aXJ2ZWV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxOTI2NTQsImV4cCI6MjEwMTc2ODY1NH0.8AuHREfci0WSycrqVXxx_phQ3DJ7Xc7AuR4ViHwsuyw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);