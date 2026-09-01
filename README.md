# AJ Vega Portfolio

My personal portfolio website, built to showcase my experience and projects — including my work at Accenture, Automancers, and the Adeus Life app.

## Tech Stack
- Next.js + React
- TypeScript
- Prisma ORM
- PostgreSQL (hosted on Neon)
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

### Set up the database

This project uses [Neon](https://neon.tech) for PostgreSQL hosting.

1. Create a free Neon account and project.
2. Copy your connection string from the Neon dashboard.
3. Create a `.env` file in the project root:

```dotenv
DATABASE_URL="postgresql://your-connection-string-here"
```

4. Push the schema to your database:

```bash
npx prisma db push
```

### Run the app

```bash
npm run dev
```

Visit http://localhost:3000.

## Deployment

This project is set up to deploy on [Vercel](https://vercel.com).

1. Push this project to GitHub.
2. Import the repository into Vercel.
3. Add the `DATABASE_URL` environment variable in Vercel's project settings (use the **pooled** Neon connection string for production).
4. Deploy.

## Contact

Feel free to reach out through the contact form on the live site, or connect with me directly.