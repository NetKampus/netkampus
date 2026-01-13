# ADR 0001: Monorepo with pnpm + Turborepo

## Decision

Use a monorepo to host the web app and shared packages.

## Rationale

- Consistent tooling (lint, TypeScript config)
- Easier future expansion (API, mobile)
- Shared UI and types across apps

## Consequences

- Slightly more tooling upfront
- Clear separation between apps and packages is required
