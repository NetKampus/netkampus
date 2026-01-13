# ADR 0002: Supabase first, custom backend later

## Decision

Use Supabase (Auth + Postgres + Storage) for the MVP. Consider a custom backend (e.g., NestJS) later if business logic grows.

## Rationale

- Faster MVP delivery
- Built-in auth and database
- Strong security via RLS (Row Level Security) policies

## Consequences

- Some rules will live in database policies
- Future migration should keep domain logic portable
