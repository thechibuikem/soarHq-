import { createClient } from "@supabase/supabase-js"; //importing a create client function from supabase  

// base address of my online database
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL

// the public api key, allowing my frontend to read/write access to the database
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// a client(middleman between my frontend and a backend api) also an object
export const supabase = createClient(supabaseUrl,supabaseKey) 