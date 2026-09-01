# AJ Vega Portfolio

Full-stack portfolio built with Next.js, React, TypeScript, Prisma, and PostgreSQL.

## Features
- Responsive portfolio UI
- Skills and experience sections
- Adeus Life project case study
- Contact form
- Next.js backend API route
- PostgreSQL storage via Prisma
- Ready for Vercel deployment

## Local setup

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local`:

```bash
cp .env.example .env.local
```

3. Add your PostgreSQL `DATABASE_URL`.

4. Create the database table:

```bash
npx prisma db push
```

5. Start:

```bash
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the `DATABASE_URL` environment variable in Vercel.
4. Deploy.

Before deployment, make sure your PostgreSQL provider allows external/serverless connections and uses a Vercel-compatible connection string.