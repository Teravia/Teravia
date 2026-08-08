import { createClient } from "@supabase/supabase-js";

// Mengunci alamat ke Project Supabase tempat Anda membuat tabel properties (goontgeilithnzirveet)
const supabaseUrl = "https://goontgeilithnzirveet.supabase.co";

// Ambil Anon Key DARI PROJECT 'goontgeilithnzirveet'
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdvb250Z2VpbGl0aG56aXJ2ZWV0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODYxOTI2NTQsImV4cCI6MjEwMTc2ODY1NH0.8AuHREfci0WSycrqVXxx_phQ3DJ7Xc7AuR4ViHwsuyw";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);