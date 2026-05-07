import { createFileRoute } from '@tanstack/react-router'
import { motion } from 'framer-motion'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/products')({
  component: ProductsPage,
  head: () => ({
    meta: [{ title: 'Huletts Sugar Products' }],
  }),
})

function ProductsPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Products"
        title="Sugar products built for households and high-volume production."
        description="From consumer packs to industrial bulk orders, Huletts offers formats and blends designed for quality, consistency, and reliable delivery."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProductCard
            title="Refined White Sugar"
            description="Clean crystal sugar for daily use in homes, cafes, and hospitality settings."
            format="1kg, 2kg, 5kg"
            image="https://www.hulettssugar.co.za/wp-content/uploads/2021/03/ProductsCarousel_Special_800x800.png"
            delay={0}
          />
          <ProductCard
            title="Brown Sugar"
            description="Full-bodied flavor profile ideal for baking, beverages, and gourmet applications."
            format="500g, 1kg, 5kg"
            image="https://www.hulettssugar.co.za/wp-content/uploads/2021/07/ProductsCarousel_Industrial_800x800.png"
            delay={0.06}
          />
          <ProductCard
            title="Icing Sugar"
            description="Ultra-fine texture for confectionery, toppings, and delicate dessert work."
            format="500g, 2kg"
            image="https://www.hulettssugar.co.za/wp-content/uploads/2021/02/MainHeader_growingASweet_500x400.png"
            delay={0.12}
          />
          <ProductCard
            title="Industrial Bulk"
            description="Food-manufacturing grade supply available for consistent production throughput."
            format="25kg, 50kg, Bulk"
            image="https://www.hulettssugar.co.za/wp-content/uploads/2021/02/BlockImages_News-Feature_800x800-2.png"
            delay={0.18}
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
            Why Buyers Choose Us
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            className="mt-2 text-3xl font-black"
          >
            Procurement confidence from day one
          </motion.h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature label="Consistent quality assurance" delay={0} />
            <Feature label="Flexible packaging formats" delay={0.06} />
            <Feature label="Dedicated key account teams" delay={0.12} />
            <Feature label="Retail and industrial channels" delay={0.18} />
            <Feature label="Predictable dispatch windows" delay={0.24} />
            <Feature label="Regional logistics coverage" delay={0.3} />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function ProductCard({
  delay,
  description,
  format,
  image,
  title,
}: {
  delay: number
  description: string
  format: string
  image: string
  title: string
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, delay }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-jade-400/60"
    >
      <img src={image} alt={title} className="mb-4 h-32 w-full rounded-xl border border-white/10 object-cover" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
      <p className="mt-5 rounded-full border border-jade-500/30 bg-jade-500/10 px-3 py-1 text-xs font-semibold text-jade-300">
        Pack formats: {format}
      </p>
    </motion.article>
  )
}

function Feature({ delay, label }: { delay: number; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.4, delay }}
      whileHover={{ y: -3 }}
      className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300"
    >
      {label}
    </motion.div>
  )
}
