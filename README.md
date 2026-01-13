# NetKampus

A platform for Universidad Nacional de Colombia (Bogotá) to discover student groups and events, RSVP, and avoid missing campus activities.

## MVP Scope

- Google sign-in restricted to UNAL email domains
- Public/private groups with membership requests
- Events with capacity and RSVP
- Search & filters (basic)
- Images via Supabase Storage
- Secure access with Postgres RLS (Row Level Security) policies

## Tech Stack

- Next.js + React + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (Auth, Postgres, Storage)
- Turborepo + pnpm workspaces
- GitHub Actions (CI, Continuous Integration)

## Monorepo Structure

- `apps/web` — Next.js web app
- `packages/ui` — shared UI components
- `packages/eslint-config` — shared ESLint config
- `packages/typescript-config` — shared TypeScript config

## Getting Started

### Prerequisites

- Node.js >= 20.9
- pnpm (recommended via Corepack)

### Install & Run

```bash
pnpm install
pnpm dev
```

### Scripts

```bash
pnpm lint
pnpm typecheck
pnpm build
```

### Environment Variables

Create apps/web/.env.local based on:
`apps/web/.env.example`
