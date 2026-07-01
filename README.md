# ateliertoby.com

Personal site — blog, portfolio, and legacy courses page. Built with Next.js, deployed on Vercel.

## Why this exists

Started as a courses landing page (toby.courses), evolved into a personal site for writing and showcasing projects. The blog is where I share what I'm building and learning. Posts are published via a CLI tool that calls the site's API — no CMS, no admin panel.

## Deploy

1. Fork and import on [Vercel](https://vercel.com)
2. Connect a PostgreSQL database (e.g. Neon via Vercel integration)
3. Set `BLOG_API_KEY` and `BUTTONDOWN_API_KEY` in Vercel environment variables
4. Run `prisma db push` to create the schema
5. Deploy

## Local dev

```bash
npm install
cp .env.example .env   # fill in your values
npx prisma generate
npm run dev
```

## Site structure

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero + latest blog posts + newsletter subscribe |
| Blog | `/blog` | All published posts |
| Post | `/blog/[slug]` | Individual post with markdown rendering |
| Work | `/work` | Portfolio of projects |
| Courses | `/courses` | Legacy courses page (migrated from toby.courses) |
| About | `/about` | About me |
