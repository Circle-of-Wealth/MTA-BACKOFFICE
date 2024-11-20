// Backend logic: Supabase Initalization

import { createClient } from "@supabase/supabase-js";

const SUPABASE_KEY = import.meta.env.VITE.SUPABASE_KEY;
const SUPABASE_URL = import.meta.env.VITE.SUPABASE_URL;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
