# Financial Habit Tracker

A prototype application designed to track financial habits (like skipped coffees, resisted impulse buys, and daily app opens/money sent). It features a fitness-app aesthetic with card-based layouts, progress rings, streak counters, and bold typography.

## Tech Stack

- **Framework**: Vite (React + TypeScript)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Routing**: React Router v6
- **Package Manager**: pnpm
- **Containerization**: Docker (multi-stage)

## Getting Started

### Local Development

1. **Install dependencies**:
   Make sure you have `pnpm` installed (`npm install -g pnpm` or `corepack enable`).
   ```bash
   pnpm install
   ```

2. **Environment Variables**:
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

3. **Start the development server**:
   ```bash
   pnpm dev
   ```
   The application will be available at `http://localhost:5173`.

### Docker Environment

The project includes a multi-stage Dockerfile that supports both a development environment (with hot-reloading) and a production build.

#### Development with Docker

To build and run the development container:
```bash
docker build --target dev -t financial-habit-tracker:dev .
docker run -p 5173:5173 -v $(pwd)/src:/app/src financial-habit-tracker:dev
```

#### Production with Docker

To build and run the production image (which uses Nginx to serve the built static files):
```bash
docker build --target prod -t financial-habit-tracker:prod .
docker run -p 8080:80 financial-habit-tracker:prod
```
The application will be available at `http://localhost:8080`.

## Available Commands

- `pnpm dev`: Start the local Vite development server.
- `pnpm build`: Create a production-ready build in the `dist/` directory.
- `pnpm lint`: Run ESLint.
- `pnpm test`: Run the Vitest test suite.
