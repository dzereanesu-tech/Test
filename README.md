# OviTravel — Operating System for African Safari Operators

OviTravel is a TanStack Start + Convex web app for safari operator workflows.

## Tech Stack

- **Frontend:** TanStack Start (React, file-based routing)
- **Backend:** Convex (database + server functions)
- **Styling:** Tailwind CSS v4

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create local env file from example:
   ```bash
   cp .env.example .env.development.local
   ```
3. Set your Convex URL in `.env.development.local`:
   ```bash
   VITE_CONVEX_URL=<your-convex-dev-url>
   ```
4. Start the app:
   ```bash
   npm run dev
   ```

## Quality Checks

Run before pushing:

```bash
npm run lint
npm run build
npx tsc --noEmit
```

## Production Deployment Checklist

### 1) Deploy Convex backend

```bash
npx convex deploy
```

Copy the **production Convex URL** from Convex dashboard/settings.

### 2) Deploy frontend on Vercel

- Import this GitHub repo into Vercel.
- Configure environment variable:
  - `VITE_CONVEX_URL` = your **production** Convex URL.
- Trigger deploy.

### 3) Smoke-test after deploy

- Landing page loads
- Dashboard route loads
- Convex queries resolve without errors
- Browser console has no runtime errors

## Notes

- `.env.development.local` is intentionally gitignored.
- Keep secrets out of source control.
