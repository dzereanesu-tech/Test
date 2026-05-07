import { Link, createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [{ title: 'Huletts Sugar — Sweetening Everyday Life' }],
  }),
})

const stats = [
  { label: 'Years of Heritage', value: '130+' },
  { label: 'Partner Growers', value: '2,000+' },
  { label: 'Countries Served', value: '20+' },
] as const

function HomePage() {
  return (
    <SiteShell>
      <PageHero
        badge="Premium Sugar Solutions"
        title="Sweetening homes, kitchens, and industries across Africa."
        description="Huletts Sugar delivers trusted household sugar, specialty sweeteners, and industrial-scale supply backed by reliable quality and long-term farming partnerships."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <StatCard label={stat.label} value={stat.value} />
          </motion.div>
        ))}
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Featured Capability</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Reliable supply at every scale</h2>
              <p className="mt-4 text-slate-300">
                From retail shelves to beverage factories, our distribution model supports predictable
                lead times, contract flexibility, and transparent account management.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/products"
                    className="rounded-full bg-jade-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-jade-500"
                  >
                    Explore Products
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/contact"
                    className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-white/10"
                  >
                    Request a Quote
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="space-y-4">
              <motion.img
                src="https://www.hulettssugar.co.za/wp-content/uploads/2021/07/ProductsCarousel_Industrial_800x800.png"
                alt="Huletts industrial sugar product"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5 }}
                className="h-52 w-full rounded-2xl border border-white/10 object-cover"
              />
              <motion.img
                src="https://www.hulettssugar.co.za/wp-content/uploads/2021/03/ProductsCarousel_Special_800x800.png"
                alt="Huletts specialty sugar product"
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="h-52 w-full rounded-2xl border border-white/10 object-cover"
              />
              <div className="grid gap-3 pt-2 text-sm text-slate-300">
                <SupplyItem label="Refined White Sugar" value={92} delay={0} />
                <SupplyItem label="Brown Sugar" value={85} delay={0.08} />
                <SupplyItem label="Industrial Bulk Orders" value={78} delay={0.16} />
                <SupplyItem label="Specialty Blends" value={64} delay={0.24} />
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Quick Access</p>
              <h3 className="mt-2 text-3xl font-black">Everything you need</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <FeatureCard
              title="Our Products"
              text="Browse household packs, food-service packs, and industrial bulk formats."
              to="/products"
              delay={0}
            />
            <FeatureCard
              title="Sustainability"
              text="See how we approach responsible agriculture, energy efficiency, and community impact."
              to="/sustainability"
              delay={0.08}
            />
            <FeatureCard
              title="About Huletts"
              text="Explore our heritage, operating model, and leadership commitment to quality."
              to="/about"
              delay={0.16}
            />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function FeatureCard({
  delay,
  text,
  title,
  to,
}: {
  delay: number
  title: string
  text: string
  to: '/about' | '/products' | '/sustainability'
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={to}
        className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-jade-400/60"
      >
        <h4 className="text-xl font-bold transition-colors group-hover:text-jade-200">{title}</h4>
        <p className="mt-3 text-sm text-slate-400">{text}</p>
      </Link>
    </motion.div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-colors hover:border-jade-400/50"
    >
      <p className="text-3xl font-black text-jade-300">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </motion.div>
  )
}

function SupplyItem({ delay, label, value }: { delay: number; label: string; value: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay }}
    >
      <div className="mb-1 flex items-center justify-between">
        <p>{label}</p>
        <p>{value}%</p>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, delay: delay + 0.08 }}
          className="h-2 rounded-full bg-jade-500"
        />
      </div>
    </motion.div>
  )
}
