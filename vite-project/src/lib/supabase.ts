import { createClient } from '@supabase/supabase-js';

let supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
let supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
export let client = createClient(supabaseUrl, supabaseAnonKey);

export async function getProductos() {
    let { data, error } = await client.from("productos_electronica").select("*")
    if (error) throw error
    return data || [];
}