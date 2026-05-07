import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/about')({
  component: AboutPage,
  head: () => ({
    meta: [{ title: 'About Huletts Sugar' }],
  }),
})

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        badge="About"
        title="A heritage brand built on trust, quality, and progress."
        description="For over a century, Huletts Sugar has supplied households and industries with dependable sugar products while adapting to modern sustainability and supply demands."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-10">
        <motion.img
          src="https://www.hulettssugar.co.za/wp-content/uploads/2023/08/Huletts-Heritage-Recipe-Book_600x600_V2-.png"
          alt="Huletts heritage visual"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="h-[320px] w-full rounded-3xl border border-white/10 object-cover"
        />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Our Mission</p>
            <h2 className="mt-3 text-3xl font-black">Deliver sweet solutions responsibly</h2>
            <p className="mt-4 text-slate-300">
              We exist to provide high-quality sugar and sweetening solutions to consumers and business
              partners while supporting agricultural communities and responsible production practices.
            </p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.08 }}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-white/10 bg-white/5 p-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Our Vision</p>
            <h2 className="mt-3 text-3xl font-black">Lead Africa’s modern sugar economy</h2>
            <p className="mt-4 text-slate-300">
              We aim to become the region’s most reliable and forward-looking sugar partner by combining
              operational excellence, innovation, and long-term stakeholder value.
            </p>
          </motion.article>
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
            Timeline
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-2 text-3xl font-black"
          >
            Milestones in our journey
          </motion.h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <TimelineCard
              year="1892"
              title="Founded"
              text="Huletts begins operations and establishes its foundational quality standards."
              delay={0}
            />
            <TimelineCard
              year="1980s"
              title="Regional Expansion"
              text="Product availability and distribution scale grow across Southern Africa."
              delay={0.08}
            />
            <TimelineCard
              year="Today"
              title="Integrated Supply"
              text="A diversified portfolio now serves retail, food-service, and industrial markets."
              delay={0.16}
            />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function TimelineCard({
  delay,
  text,
  title,
  year,
}: {
  delay: number
  text: string
  title: string
  year: string
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
      <p className="text-sm font-bold text-jade-300">{year}</p>
      <h4 className="mt-2 text-xl font-bold">{title}</h4>
      <p className="mt-3 text-sm text-slate-400">{text}</p>
    </motion.article>
  )
}
