# OviTravel — Operating System for African Safari Operators

## Quick Start
1. `npm install`
2. `npm run dev` (starts both frontend and Convex backend)

## Deployment

### 1. Push to GitHub
- Create a new repository on GitHub.
- Run:
  ```bash
  git remote add origin <your-repo-url>
  git branch -m main
  git push -u origin main
  ```

### 2. Deploy to Vercel
- Import your GitHub repository into Vercel.
- Configure Environment Variables:
  - `VITE_CONVEX_URL`: Your production Convex URL.
- Vercel will automatically detect the TanStack Start configuration.

### 3. Setup Convex Production
- Run `npx convex deploy` to push your schema and functions to Convex production.
