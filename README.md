# Huletts Sugar Website (Vite + React + TanStack Start)

This project is a modern multi-page marketing site for Huletts Sugar.

## Built With

- Vite
- React 19
- TanStack Start (file-based routing)
- Tailwind CSS v4

## Pages

- `/` Home
- `/about` About
- `/products` Products
- `/sustainability` Sustainability
- `/contact` Contact
- `/dashboard` Partner portal preview

## Local Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npx tsc --noEmit
npm run build
```

## Deployment (Vercel)

1. Import this GitHub repo into Vercel.
2. Add env var:
   - `VITE_CONVEX_URL` (Convex deployment URL)
3. Deploy.

## Notes

- `.env.development.local` is gitignored.
- Do not commit secrets.
