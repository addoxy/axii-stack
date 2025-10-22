# Axii Stack

A production-ready Next.js starter template built with modern tools, configured for type-safety, and designed to deploy immediately.

## Tech Stack

### Core Framework

- **Next.js 15** - React 19 with Turbopack for blazing-fast development
- **TypeScript** - Type-safe development with full IDE support

### Backend & Database

- **Hono** - Lightweight, ultra-fast type-safe API framework
- **Prisma** - Type-safe PostgreSQL ORM with auto-generated types
- **Better Auth** - Full-featured authentication library with multiple providers
- **PostgreSQL** - Robust relational database (via Docker)

### Frontend & Styling

- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **next-themes** - Seamless dark mode support
- **Lucide React** - Clean, customizable icon library

### Data Management

- **TanStack Query** - Powerful async state management and data fetching
- **Zod** - Runtime type validation and schema validation

### Developer Experience

- **T3 Env** - Type-safe environment variables with runtime validation
- **Pino** - High-performance structured logging system
- **ESLint + Prettier** - Code linting and automatic formatting
- **Husky + lint-staged** - Git hooks for pre-commit quality checks

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm (recommended) or npm
- Docker & Docker Compose (for PostgreSQL)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/addoxy/axii-stack.git
```

2. Install dependencies:

```bash
cd axii-stack && pnpm install
```

3. Configure environment variables:

```bash
cp .env.example .env.local
```

Edit `.env.local` and configure the following variables:

- `DATABASE_URL` - PostgreSQL connection string
- `BETTER_AUTH_SECRET` - Secret key for authentication (generate a secure random string)
- `GOOGLE_CLIENT_ID` & `GOOGLE_CLIENT_SECRET` - OAuth credentials for Google Sign-In
- `NEXT_PUBLIC_APP_URL` - Your application URL (default: http://localhost:3000)
- `NEXT_PUBLIC_API_URL` - Your API URL (default: http://localhost:3000)

4. Start the development server:

```bash
pnpm db:start && pnpm db:migrate && pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see your application.

## Available Scripts

### Development

- `pnpm dev` - Start Next.js development server with Turbopack
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint to check code quality

### Database Management

- `pnpm db:start` - Start PostgreSQL container
- `pnpm db:stop` - Stop PostgreSQL container
- `pnpm db:restart` - Restart PostgreSQL container
- `pnpm db:logs` - View PostgreSQL logs
- `pnpm db:clean` - Remove PostgreSQL container and volumes
- `pnpm db:generate` - Generate Prisma client
- `pnpm db:migrate` - Run database migrations
- `pnpm db:migrate:deploy` - Deploy migrations (production)
- `pnpm db:push` - Push schema changes without migrations
- `pnpm db:studio` - Open Prisma Studio
- `pnpm db:seed` - Seed the database
- `pnpm db:reset` - Reset database and run migrations
- `pnpm db:format` - Format Prisma schema

### Utilities

- `pnpm shadcn` - Add shadcn/ui components
  - e.g. `pnpm shadcn add button`

## Project Structure

```
axii-stack/
├── src/
│   ├── app/              # Next.js app directory (pages & routes)
│   │   ├── (auth)/       # Authentication routes
│   │   ├── api/          # API routes (Hono integration)
│   │   └── ...
│   ├── backend/          # Backend logic
│   │   ├── db/           # Prisma schema and database utilities
│   │   └── routers/      # API route handlers
│   ├── components/       # React components
│   │   └── ui/           # shadcn/ui components
│   ├── config/           # Configuration files
│   │   └── env/          # Environment variable schemas
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and configurations
│   └── styles/           # Global styles
├── .env.example          # Example environment variables
├── docker-compose.yml    # PostgreSQL container configuration
└── package.json          # Project dependencies and scripts
```

## Features

- **Authentication Ready** - Pre-configured Better Auth with Google OAuth support
- **Type-Safe API** - End-to-end type safety from database to frontend
- **Database Migrations** - Version-controlled schema changes with Prisma
- **Dark Mode** - Built-in theme switching with persistent preferences
- **Code Quality** - Automated linting, formatting, and pre-commit hooks
- **Docker Support** - Containerized PostgreSQL for consistent development
- **Structured Logging** - Production-ready logging with Pino
- **Environment Validation** - Runtime validation of environment variables

## Authentication Setup

This template uses Better Auth with Google OAuth. To enable authentication:

1. Create a Google OAuth application:
   - Go to [Google Cloud Console](https://console.cloud.google.com)
   - Create a new project or select an existing one
   - Enable Google+ API
   - Create OAuth 2.0 credentials
   - Add authorized redirect URI: `http://localhost:3000/api/auth/callback/google`

2. Add credentials to `.env.local`:

```env
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

## Deployment

This application can be deployed to any platform that supports Next.js:

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Docker

```bash
docker build -t axii-stack .
docker run -p 3000:3000 axii-stack
```

Note: Ensure your PostgreSQL database is accessible from your deployment environment and update the `DATABASE_URL` accordingly.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Better Auth Documentation](https://www.better-auth.com/docs)
- [TanStack Query Documentation](https://tanstack.com/query/latest)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Hono Documentation](https://hono.dev)
