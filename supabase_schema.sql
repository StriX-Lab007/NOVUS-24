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
  status text default 'PENDING'::text
);

-- 2. Create Members Table
create table public.members (
  id uuid default gen_random_uuid() primary key,
  team_id uuid references public.teams(id) on delete cascade,
  name text not null,
  email text not null,
  phone text not null,
  college text not null
);

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
