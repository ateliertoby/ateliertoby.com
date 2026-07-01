# Architecture

## Design decisions

**PostgreSQL (Neon) for blog posts, not markdown files.** Posts are created and edited via API calls from a CLI tool. A database makes CRUD straightforward without needing a git commit per post. Neon's serverless PostgreSQL works well with Vercel's edge runtime.

**API-key auth on blog routes.** The blog API supports create, edit, and delete via `x-api-key` header. No session, no OAuth — a single shared secret is enough for a single-author site. Published posts are public; drafts require the key.

**toby.courses 301 redirect.** The courses landing page was originally a separate site. Rather than maintaining two deployments, it lives at `/courses` with a permanent redirect from the old domain configured in `next.config.ts`.

**Cinematic design system.** The UI follows a film-inspired visual language — serif typography (Newsreader), entrance animations, scene-based page structure. This direction came from experimenting with a cinematic design tool and keeping the result.

**Buttondown for newsletter.** Subscribe form sends emails to Buttondown's API. Optional — the site works without it if the env var is missing, but the form will error.

## Data flow

```
Blog publishing:
  CLI tool → POST /api/posts (x-api-key auth)
           → Prisma → PostgreSQL (Neon)
           → revalidatePath (home + blog pages)

Blog reading:
  Visitor → /blog/[slug]
          → Prisma query → render markdown (react-markdown + remark-gfm + rehype-highlight)

Newsletter:
  Visitor → subscribe form → POST /api/subscribe → Buttondown API
```

## Key files

- `src/app/page.tsx` — Home page. Hero, featured post, recent posts, subscribe form.
- `src/app/blog/[slug]/page.tsx` — Individual blog post page with markdown rendering.
- `src/app/api/posts/route.ts` — Blog list + create API.
- `src/app/api/posts/[slug]/route.ts` — Blog read, update, delete API.
- `src/app/api/subscribe/route.ts` — Newsletter subscribe (Buttondown).
- `src/lib/db.ts` — Prisma client singleton.
- `src/lib/auth.ts` — API key check.
- `prisma/schema.prisma` — Post model.
- `src/app/globals.css` — Design tokens, cinematic typography, entrance animations.
