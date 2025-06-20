import { createClient } from "@supabase/supabase-js"; //importing a create client function from supabase  

// base address of my online database
const supabaseUrl = 'https://uokpdllmsspezsqltpxj.supabase.co'

// the public api key, allowing my frontend to read/write access to the database
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVva3BkbGxtc3NwZXpzcWx0cHhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAzODg1NzUsImV4cCI6MjA2NTk2NDU3NX0.G65FmN7Ph0emRNTHde_-3kNY2TXrjSOIHCtBVjue2Ts'


// a client(middleman between my frontend and a backend api) also an object
export const supabase = createClient(supabaseUrl,supabaseKey)