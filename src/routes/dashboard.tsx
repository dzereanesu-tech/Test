import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
  head: () => ({
    meta: [{ title: 'Huletts Partner Portal' }],
  }),
})

function DashboardPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Partner Portal"
        title="Commercial overview for retail and industrial partners."
        description="A preview of the Huletts partner workspace showing supply performance, account health, and open actions for procurement teams."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <MetricCard label="Open Orders" value="146" sub="Across all regions" delay={0} />
          <MetricCard label="On-time Dispatch" value="97.4%" sub="Last 30 days" delay={0.07} />
          <MetricCard label="Avg Lead Time" value="4.2 days" sub="Retail channel" delay={0.14} />
          <MetricCard label="Account Health" value="Strong" sub="No critical issues" delay={0.21} />
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-2"
          >
            <h2 className="text-xl font-bold">Upcoming Dispatches</h2>
            <div className="mt-4 space-y-3">
              <DispatchRow refCode="HS-24051" destination="Durban DC" eta="May 9" status="Ready" delay={0} />
              <DispatchRow
                refCode="HS-24058"
                destination="Johannesburg Hub"
                eta="May 10"
                status="In Transit"
                delay={0.08}
              />
              <DispatchRow
                refCode="HS-24064"
                destination="Cape Town Depot"
                eta="May 12"
                status="Packed"
                delay={0.16}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.07 }}
            className="rounded-2xl border border-jade-500/30 bg-jade-500/10 p-6"
          >
            <img
              src="https://www.hulettssugar.co.za/wp-content/uploads/2021/03/ProductsCarousel_Special_800x800.png"
              alt="Huletts product planning"
              className="mb-4 h-28 w-full rounded-xl border border-white/10 object-cover"
            />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Action Required</p>
            <h3 className="mt-2 text-xl font-black">Review June volume forecast</h3>
            <p className="mt-3 text-sm text-slate-300">
              Confirm projected demand and product mix to reserve preferred production windows.
            </p>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 rounded-full bg-jade-600 px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-jade-500"
            >
              Open Forecast Tool
            </motion.button>
          </motion.div>
        </div>
      </section>
    </SiteShell>
  )
}

function MetricCard({
  delay,
  label,
  sub,
  value,
}: {
  delay: number
  label: string
  sub: string
  value: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">{label}</p>
      <p className="mt-2 text-3xl font-black text-jade-300">{value}</p>
      <p className="mt-2 text-sm text-slate-400">{sub}</p>
    </motion.article>
  )
}

function DispatchRow({
  delay,
  destination,
  eta,
  refCode,
  status,
}: {
  delay: number
  destination: string
  eta: string
  refCode: string
  status: 'Ready' | 'In Transit' | 'Packed'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ x: 2 }}
      className="flex items-center justify-between rounded-xl border border-white/10 bg-black/20 p-4"
    >
      <div>
        <p className="text-sm font-semibold">{refCode}</p>
        <p className="text-xs text-slate-400">{destination}</p>
      </div>
      <div className="text-right text-sm">
        <p>{eta}</p>
        <p className="text-jade-300">{status}</p>
      </div>
    </motion.div>
  )
}
