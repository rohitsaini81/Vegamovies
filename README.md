# Vegamovies

Vegamovies is a movie discovery platform organized as a multi-project repository.

## Projects

### 1) `frontend` — Astro application
User-facing movie website built with Astro for browsing and discovering movies.

### 2) `admin` — Next.js application
Administrative interface for managing platform content and operations.

## Repository Structure

```text
.
├── frontend/   # Public movie website (Astro)
├── admin/      # Admin panel (Next.js)
└── README.md
```

## Tech Stack

- **Frontend website:** Astro
- **Admin panel:** Next.js
- **Styling:** SCSS
- **Package managers:** npm / bun (project-dependent)

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Run Frontend (Astro)

```bash
cd frontend
npm install
npm run dev
```

Build frontend:

```bash
npm run build
npm run preview
```

### Run Admin (Next.js)

```bash
cd admin
npm install
npm run dev
```

Build admin:

```bash
npm run build
npm run start
```

## Deployment

Each project is deployed independently.

- Frontend deployment: project root `frontend`, install command `npm install`, build command `npm run build`.
- Admin deployment: project root `admin`, install command `npm install`, build command `npm run build`.

## Credits

Frontend movie website inspiration/source credit:

- https://github.com/kkp785216/vegamovie
