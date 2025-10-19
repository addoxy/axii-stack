# Database Setup Guide

This guide will help you set up and run PostgreSQL locally using Docker for the Axii Stack project.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running
- Node.js and pnpm installed

## Quick Start

### 1. Copy Environment Variables

Copy the example environment file to create your local configuration:

```bash
cp .env.example .env.local
```

The default `.env.example` already contains the correct DATABASE_URL for local Docker development:

```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/dev_db
```

### 2. Start the Database

Start the PostgreSQL container:

```bash
pnpm db:start
```

This will:

- Download the PostgreSQL 17 Alpine image (if not already present)
- Create and start a container named `axii-stack-postgres`
- Create a database named `dev_db`
- Expose PostgreSQL on port `5432`
- Create a persistent volume for your data

### 3. Verify the Database is Running

Check the database logs:

```bash
pnpm db:logs
```

You should see output indicating PostgreSQL is ready to accept connections.

## Available Database Commands

| Command           | Description                                                             |
| ----------------- | ----------------------------------------------------------------------- |
| `pnpm db:start`   | Start the PostgreSQL container in detached mode                         |
| `pnpm db:stop`    | Stop the PostgreSQL container (data is preserved)                       |
| `pnpm db:restart` | Restart the PostgreSQL container                                        |
| `pnpm db:logs`    | View real-time database logs (Ctrl+C to exit)                           |
| `pnpm db:clean`   | Stop and remove the database container and volume (⚠️ deletes all data) |

## Connection Details

When running locally with Docker:

- **Host:** `localhost`
- **Port:** `5432`
- **Database:** `dev_db`
- **Username:** `postgres`
- **Password:** `postgres`
- **Connection String:** `postgresql://postgres:postgres@localhost:5432/dev_db`

## Connecting with a Database Client

You can connect to the database using any PostgreSQL client:

### Using psql (if installed)

```bash
psql postgresql://postgres:postgres@localhost:5432/dev_db
```

### Popular GUI Clients

- [pgAdmin](https://www.pgadmin.org/)
- [DBeaver](https://dbeaver.io/)
- [TablePlus](https://tableplus.com/)
- [Postico](https://eggerapps.at/postico/) (macOS)
- VSCode extensions like [PostgreSQL](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres)

## Troubleshooting

### Port Already in Use

If you see an error about port 5432 already being in use:

1. Check if another PostgreSQL instance is running:

   ```bash
   lsof -i :5432
   ```

2. Stop the other instance or change the port in `docker-compose.yml`:

   ```yaml
   ports:
     - '5433:5432' # Use port 5433 instead
   ```

   And update your `.env.local`:

   ```
   DATABASE_URL=postgresql://postgres:postgres@localhost:5433/dev_db
   ```

### Container Won't Start

1. Check Docker Desktop is running
2. View container logs:
   ```bash
   docker compose logs postgres
   ```

### Fresh Start

If you need to completely reset the database:

```bash
pnpm db:clean
pnpm db:start
```

**Warning:** This will delete all data in the database!

## Data Persistence

Database data is stored in a Docker volume named `axii-stack_postgres_data`. This means:

- Data persists even when you stop the container
- Data is preserved when you restart your computer
- Data is only deleted when you run `pnpm db:clean`

## Next Steps

After setting up the database, you'll likely want to:

1. Install a PostgreSQL client library (e.g., `pg`, `@vercel/postgres`, or Drizzle ORM)
2. Set up database migrations
3. Create your database schema
4. Add seed data for development

## Production Deployment

The Docker setup is intended for local development only. For production:

- Use a managed database service (e.g., Vercel Postgres, Supabase, Neon, Railway)
- Update the `DATABASE_URL` environment variable in your production environment
- Use strong, unique credentials
- Enable SSL connections
- Set up regular backups
