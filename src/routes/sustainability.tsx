import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/sustainability')({
  component: SustainabilityPage,
  head: () => ({
    meta: [{ title: 'Huletts Sustainability' }],
  }),
})

function SustainabilityPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Sustainability"
        title="Growing responsibly for communities, land, and long-term supply."
        description="Our sustainability approach focuses on agricultural resilience, efficient processing, and practical community impact across the value chain."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <PillarCard
            title="Responsible Agriculture"
            text="Supporting growers with soil care, water management, and climate-resilient practices."
            delay={0}
          />
          <PillarCard
            title="Operational Efficiency"
            text="Improving production systems to reduce waste and enhance energy productivity."
            delay={0.08}
          />
          <PillarCard
            title="Community Development"
            text="Investing in local skills, livelihoods, and social wellbeing programs in key regions."
            delay={0.16}
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300"
          >
            Progress Snapshot
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-2 text-3xl font-black"
          >
            Key focus metrics
          </motion.h3>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Metric label="Grower training coverage" value="87%" delay={0} />
            <Metric label="Energy efficiency projects" value="34" delay={0.07} />
            <Metric label="Community initiatives" value="120+" delay={0.14} />
            <Metric label="Water optimization sites" value="22" delay={0.21} />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function PillarCard({
  delay,
  text,
  title,
}: {
  delay: number
  text: string
  title: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{text}</p>
    </motion.article>
  )
}

function Metric({
  delay,
  label,
  value,
}: {
  delay: number
  label: string
  value: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
    >
      <p className="text-2xl font-black text-jade-300">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </motion.article>
  )
}
