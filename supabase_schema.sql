-- Copy and paste this into your Supabase SQL Editor

-- 1. Create Teams Table
create table public.teams (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  team_name text not null,
  leader_name text not null,
  leader_email text not null,
  leader_phone text not null,
  leader_college text not null,
  txn_id text not null,
  upi_id text not null,
  payment_proof_url text not null,
  status text default 'PENDING'::text,
  leader_diet text not null default 'Veg'
);

-- 2. Create Members Table
create table public.members (
  id uuid default gen_random_uuid() primary key,
  team_id uuid references public.teams(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  college text not null,
  diet text not null default 'Veg'
);

-- 2.1 Enable Row Level Security (RLS)
alter table public.teams enable row level security;
alter table public.members enable row level security;

-- 2.2 Create Policies
-- Allow anyone to insert (Registration is public)
create policy "Allow public registration"
on public.teams for insert
with check ( true );

create policy "Allow public member registration"
on public.members for insert
with check ( true );

-- Only allow reading own data? For now, we might want to restrict this later.
-- Implementing a basic read policy for debugging/verification if needed (e.g. for success page lookup if we changed flow)
-- For now, purely public insert is the critical part for the form.

-- 3. Storage Bucket for Payment Proofs
-- Note: If this fails, go to Storage -> Create new bucket -> Name it 'payment-proofs' -> Make it Public
insert into storage.buckets (id, name, public) values ('payment-proofs', 'payment-proofs', true);

-- 4. Storage Policies (Allow Uploads & Reads)
create policy "Allow public uploads"
on storage.objects for insert
with check ( bucket_id = 'payment-proofs' );

create policy "Allow public read"
on storage.objects for select
using ( bucket_id = 'payment-proofs' );
