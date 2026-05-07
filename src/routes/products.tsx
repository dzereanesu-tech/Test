import { createFileRoute } from '@tanstack/react-router'
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
          />
          <ProductCard
            title="Brown Sugar"
            description="Full-bodied flavor profile ideal for baking, beverages, and gourmet applications."
            format="500g, 1kg, 5kg"
          />
          <ProductCard
            title="Icing Sugar"
            description="Ultra-fine texture for confectionery, toppings, and delicate dessert work."
            format="500g, 2kg"
          />
          <ProductCard
            title="Industrial Bulk"
            description="Food-manufacturing grade supply available for consistent production throughput."
            format="25kg, 50kg, Bulk"
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Why Buyers Choose Us</p>
          <h3 className="mt-2 text-3xl font-black">Procurement confidence from day one</h3>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Feature label="Consistent quality assurance" />
            <Feature label="Flexible packaging formats" />
            <Feature label="Dedicated key account teams" />
            <Feature label="Retail and industrial channels" />
            <Feature label="Predictable dispatch windows" />
            <Feature label="Regional logistics coverage" />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function ProductCard({
  description,
  format,
  title,
}: {
  description: string
  format: string
  title: string
}) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-jade-400/60">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
      <p className="mt-5 rounded-full border border-jade-500/30 bg-jade-500/10 px-3 py-1 text-xs font-semibold text-jade-300">
        Pack formats: {format}
      </p>
    </article>
  )
}

function Feature({ label }: { label: string }) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{label}</div>
}
