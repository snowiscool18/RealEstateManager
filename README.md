# RealEstateManager

A modern web application for individual landlords to manage their rental properties.

## Features (MVP)

- Property & unit management with photo uploads
- Tenant / contact management
- Lease tracking with expiration alerts
- Rent collection & payment history
- Maintenance request tracking
- Dashboard with key reports (occupancy, income, upcoming items)

## Tech Stack

- **Framework**: Next.js 15 (App Router) + TypeScript
- **Styling**: Tailwind CSS 4 + shadcn/ui
- **Database**: PostgreSQL + Prisma ORM
- **Auth**: Auth.js v5 (with Prisma adapter — prepared for magic links)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm (or pnpm)

### Installation

```bash
npm install
# or
pnpm install
```

### Environment Variables

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. **Database Setup (Required)**

   This app uses PostgreSQL. We recommend a free hosted database:

   - **Neon** (recommended): https://neon.tech → Create project → Copy connection string
   - **Supabase**: https://supabase.com → New project → Project Settings → Database → Connection string

   Paste your connection string into `DATABASE_URL` in `.env.local`.

3. Generate the Prisma client after setting your DATABASE_URL:
   ```bash
   npx prisma generate
   ```

Required variables will be added as features are implemented (Auth secrets, etc.).

### Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

This project follows a feature-based architecture:

- `app/` – Next.js routes and layouts
- `features/` – Domain logic (properties, tenants, leases, etc.)
- `components/ui/` – Reusable shadcn/ui components
- `lib/` – Shared utilities (Prisma client, auth config, etc.)
- `prisma/` – Database schema and migrations

## Development

- `npm run dev` – Start development server
- `npm run build` – Production build
- `npm run lint` – Run ESLint

## Current Status (Foundation)

- Next.js 15 + TypeScript + Tailwind + shadcn/ui base set up
- Full Prisma schema defined (Property, Tenant, Lease, etc.)
- Auth.js v5 + Prisma adapter initialized (magic link email provider prepared)

## Roadmap

See the detailed implementation plan in the project planning docs for phased delivery of the MVP.

## License

Private project.

## Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
