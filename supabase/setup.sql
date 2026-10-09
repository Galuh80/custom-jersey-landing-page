-- Supabase setup for the portfolio gallery (run in SQL Editor once).
-- Table `portfolios` already exists with columns: id, path, created_at.
-- This adds the storage bucket + row level security policies.

-- 1) Public storage bucket for the images
insert into storage.buckets (id, name, public)
values ('portfolios', 'portfolios', true)
on conflict (id) do update set public = true;

-- 2) Row Level Security on the table
alter table public.portfolios enable row level security;

drop policy if exists "portfolios public read" on public.portfolios;
create policy "portfolios public read"
    on public.portfolios for select
    using (true);

drop policy if exists "portfolios auth insert" on public.portfolios;
create policy "portfolios auth insert"
    on public.portfolios for insert
    to authenticated with check (true);

drop policy if exists "portfolios auth delete" on public.portfolios;
create policy "portfolios auth delete"
    on public.portfolios for delete
    to authenticated using (true);

-- 3) Storage object policies
drop policy if exists "portfolio images public read" on storage.objects;
create policy "portfolio images public read"
    on storage.objects for select
    using (bucket_id = 'portfolios');

drop policy if exists "portfolio images auth insert" on storage.objects;
create policy "portfolio images auth insert"
    on storage.objects for insert
    to authenticated with check (bucket_id = 'portfolios');

drop policy if exists "portfolio images auth delete" on storage.objects;
create policy "portfolio images auth delete"
    on storage.objects for delete
    to authenticated using (bucket_id = 'portfolios');

-- 4) Create an admin user (do this in Dashboard > Authentication > Users,
--    "Add user" with email + password and "Auto Confirm"). Upload is only
--    allowed for signed-in users.
