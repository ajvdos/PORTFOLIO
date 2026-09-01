# AJ Vega Portfolio

My personal portfolio website, built to showcase my experience and projects — including my work at Accenture, Automancers, and the Adeus Life app.

## Tech Stack
- Next.js + React
- TypeScript
- Prisma ORM
- PostgreSQL
- Deployed on Vercel

## Features
- Responsive design for mobile and desktop
- Experience and skills sections
- Case study: Adeus Life
  - Draft Reminder feature
  - Auth0 → Firebase authentication migration
  - Homepage redesign
- Working contact form with backend API and database storage

## Getting Started

Clone the repo and install dependencies:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install
```

Set up your environment variables:

```bash
cp .env.example .env.local
```

Add your PostgreSQL `DATABASE_URL` inside `.env.local`, then push the schema:

```bash
npx prisma db push
```

Run the dev server:

```bash
npm run dev
```

Visit http://localhost:3000.

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com). Push to GitHub, import the repo into Vercel, add your `DATABASE_URL` environment variable, and deploy.

## Contact

Feel free to reach out through the contact form on the live site, or connect with me directly.
