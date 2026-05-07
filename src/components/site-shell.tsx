import { Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type TopLevelRoute = '/' | '/about' | '/contact' | '/dashboard' | '/products' | '/sustainability'

const navItems: Array<{ label: string; to: TopLevelRoute }> = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Sustainability', to: '/sustainability' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Contact', to: '/contact' },
]

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#070b14] text-slate-100">
      <motion.div
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-120px] top-[-80px] h-96 w-96 rounded-full bg-jade-600/20 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.15, 0.35, 0.15], y: [0, 30, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-[-120px] right-[-100px] h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[140px]"
      />

      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
        className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <Link to="/" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -6, scale: 1.05 }}
              className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-jade-500 to-cyan-500 font-black text-white shadow-lg shadow-jade-900/40"
            >
              H
            </motion.div>
            <div>
              <p className="text-lg font-bold leading-none transition-colors group-hover:text-jade-200">
                Huletts Sugar
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Since 1892</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <motion.div key={item.to} whileHover={{ y: -2 }}>
                <Link
                  to={item.to}
                  activeProps={{ className: 'bg-white/12 text-white' }}
                  activeOptions={{ exact: item.to === '/' }}
                  className="rounded-full px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/8 hover:text-white"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.a
            href="mailto:partnerships@huletts.co.za"
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full bg-jade-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-jade-500"
          >
            Partner With Us
          </motion.a>
        </div>
      </motion.header>

      <main className="relative z-10">{children}</main>

      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-t border-white/10 bg-[#070b14]"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-12 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-black">Trusted sugar solutions for every channel.</h4>
            <p className="mt-3 max-w-xl text-slate-400">
              We serve households, retailers, and manufacturers with consistent quality and dependable
              delivery.
            </p>
          </div>

          <div className="space-y-2 text-slate-300">
            <p>
              <span className="text-slate-500">Email:</span> partnerships@huletts.co.za
            </p>
            <p>
              <span className="text-slate-500">Phone:</span> +27 31 000 0000
            </p>
            <p>
              <span className="text-slate-500">Office:</span> Durban, KwaZulu-Natal, South Africa
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Huletts Sugar. All rights reserved.
        </div>
      </motion.footer>
    </div>
  )
}

export function PageHero({
  badge,
  description,
  title,
}: {
  badge: string
  description: string
  title: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <motion.div
        animate={{ opacity: [0.2, 0.45, 0.2], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="pointer-events-none absolute left-[-140px] top-[-120px] h-96 w-96 rounded-full bg-jade-600/30 blur-[120px]"
      />
      <motion.div
        animate={{ opacity: [0.18, 0.35, 0.18], y: [0, 25, 0] }}
        transition={{ duration: 11, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
        className="pointer-events-none absolute bottom-[-120px] right-[-140px] h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 inline-flex rounded-full border border-jade-500/30 bg-jade-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-jade-300"
        >
          {badge}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.07 }}
          className="max-w-4xl text-4xl font-black leading-tight md:text-6xl"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
          className="mt-6 max-w-3xl text-lg text-slate-300"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
