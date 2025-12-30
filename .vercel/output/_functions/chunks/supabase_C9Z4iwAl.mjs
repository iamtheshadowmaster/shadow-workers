import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://enuipftvfxndnukfbkde.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudWlwZnR2ZnhuZG51a2Zia2RlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4NzY1OTIsImV4cCI6MjA1MjQ1MjU5Mn0.MgGBSlcg3wF_K4UJt25S6sNFJ7RxsnWgZ_cg7AMqPTA";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { supabase as s };
