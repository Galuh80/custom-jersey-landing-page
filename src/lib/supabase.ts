import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.PUBLIC_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.PUBLIC_SUPABASE_ANON_KEY as
    | string
    | undefined;

export const SUPABASE_BUCKET: string =
    (import.meta.env.PUBLIC_SUPABASE_BUCKET as string) || "portfolios";

export const supabase: SupabaseClient | null =
    url && anonKey ? createClient(url, anonKey) : null;

/** Build the public URL for an object stored in the portfolio bucket. */
export function getPublicUrl(path: string): string {
    if (!supabase || !path) return "";
    return supabase.storage.from(SUPABASE_BUCKET).getPublicUrl(path).data
        .publicUrl;
}
