# CLAUDE.md

## Project

**Studio Associato Cammarota Galgano** — Professional website for a premium accounting firm in Naples (est. 1992).

## Tech Stack

- Next.js 15 (App Router) + TypeScript
- Sanity CMS v3 (embedded Studio at `/studio`)
- Tailwind CSS v4 (CSS-first config in `globals.css`)
- Framer Motion for animations
- `next-sanity` for CMS integration

## Architecture

- **Page Builder pattern**: Pages are composed of reorderable sections in Sanity
- **`SectionRenderer`** maps Sanity `_type` to React components
- **Route group `(site)`** wraps public pages with Header/Footer
- **`/studio`** route hosts embedded Sanity Studio (no Header/Footer)
- Server Components by default; Client Components only for interactivity

## Key Directories

- `app/(site)/` — public site pages
- `app/studio/` — embedded Sanity Studio
- `components/sections/` — page builder section components
- `components/layout/` — Header, Footer, WhatsApp button
- `components/ui/` — reusable primitives (Button, Card, SectionWrapper)
- `sanity/schemas/` — all Sanity document and object schemas
- `sanity/queries/` — GROQ queries
- `sanity/lib/` — client, image helper, fetch wrapper
- `types/` — TypeScript interfaces
- `lib/` — utilities, metadata helpers

## Commands

- `npm run dev` — start dev server (localhost:3000)
- `npm run build` — production build
- `/studio` — access Sanity CMS

## Environment Variables

Required in `.env.local`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION`
- `SANITY_API_READ_TOKEN`
- `NEXT_PUBLIC_BASE_URL`

## Adding New Sections

1. Create object schema in `sanity/schemas/objects/`
2. Add to `sections` array in `sanity/schemas/documents/page.ts`
3. Register in `sanity/schemas/index.ts`
4. Create component in `components/sections/`
5. Add mapping in `components/shared/SectionRenderer.tsx`
