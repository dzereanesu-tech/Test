import { ConvexQueryClient } from '@convex-dev/react-query'
import { QueryClient } from '@tanstack/react-query'
import { createRouter } from '@tanstack/react-router'
import { routerWithQueryClient } from '@tanstack/react-router-with-query'
import { ConvexProvider } from 'convex/react'
import { routeTree } from './routeTree.gen'

export function getRouter() {
  const convexUrl = import.meta.env.VITE_CONVEX_URL

  if (!convexUrl) {
    throw new Error(
      'Missing VITE_CONVEX_URL. Set it in .env.development.local for local development and in your production environment variables for deployment.',
    )
  }

  const convexQueryClient = new ConvexQueryClient(convexUrl)

  const queryClient: QueryClient = new QueryClient({
    defaultOptions: {
      queries: {
        queryKeyHashFn: convexQueryClient.hashFn(),
        queryFn: convexQueryClient.queryFn(),
        gcTime: 5000,
      },
    },
  })

  convexQueryClient.connect(queryClient)

  const router = routerWithQueryClient(
    createRouter({
      routeTree,
      defaultPreload: 'intent',
      context: { queryClient },
      scrollRestoration: true,
      defaultPreloadStaleTime: 0, // Let React Query handle all caching
      defaultErrorComponent: ({ error }) => (
        <div className="grid min-h-screen place-items-center bg-[#0a0a0a] p-6 text-stone-100">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-400">
              Application Error
            </p>
            <h1 className="mb-3 text-2xl font-bold">Something went wrong</h1>
            <p className="text-sm text-stone-400">
              Please refresh the page. If the issue continues, contact support.
            </p>
            {import.meta.env.DEV ? (
              <pre className="mt-6 max-h-72 overflow-auto rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-rose-300">
                {error.stack ?? error.message}
              </pre>
            ) : null}
            <a
              href="/"
              className="mt-6 inline-flex rounded-full bg-jade-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-jade-500"
            >
              Back to home
            </a>
          </div>
        </div>
      ),
      defaultNotFoundComponent: () => (
        <div className="grid min-h-screen place-items-center bg-[#0a0a0a] p-6 text-stone-100">
          <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-jade-400">404</p>
            <h1 className="mb-3 text-2xl font-bold">Page not found</h1>
            <p className="text-sm text-stone-400">
              The page you requested does not exist or has moved.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex rounded-full bg-jade-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-jade-500"
            >
              Go home
            </a>
          </div>
        </div>
      ),
      Wrap: ({ children }) => (
        <ConvexProvider client={convexQueryClient.convexClient}>{children}</ConvexProvider>
      ),
    }),
    queryClient,
  )

  return router
}
