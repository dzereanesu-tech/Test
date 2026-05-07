import { Link, createFileRoute } from '@tanstack/react-router'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/')({
  component: HomePage,
  head: () => ({
    meta: [{ title: 'Huletts Sugar — Sweetening Everyday Life' }],
  }),
})

function HomePage() {
  return (
    <SiteShell>
      <PageHero
        badge="Premium Sugar Solutions"
        title="Sweetening homes, kitchens, and industries across Africa."
        description="Huletts Sugar delivers trusted household sugar, specialty sweeteners, and industrial-scale supply backed by reliable quality and long-term farming partnerships."
      />

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 py-16 md:grid-cols-3">
        <StatCard label="Years of Heritage" value="130+" />
        <StatCard label="Partner Growers" value="2,000+" />
        <StatCard label="Countries Served" value="20+" />
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-16">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Featured Capability</p>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">Reliable supply at every scale</h2>
              <p className="mt-4 text-slate-300">
                From retail shelves to beverage factories, our distribution model supports predictable
                lead times, contract flexibility, and transparent account management.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="rounded-full bg-jade-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-jade-500"
                >
                  Explore Products
                </Link>
                <Link
                  to="/contact"
                  className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-slate-100 transition-colors hover:bg-white/10"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <div className="grid gap-3 text-sm text-slate-300">
              <SupplyItem label="Refined White Sugar" value={92} />
              <SupplyItem label="Brown Sugar" value={85} />
              <SupplyItem label="Industrial Bulk Orders" value={78} />
              <SupplyItem label="Specialty Blends" value={64} />
            </div>
          </div>
        </div>
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
            />
            <FeatureCard
              title="Sustainability"
              text="See how we approach responsible agriculture, energy efficiency, and community impact."
              to="/sustainability"
            />
            <FeatureCard
              title="About Huletts"
              text="Explore our heritage, operating model, and leadership commitment to quality."
              to="/about"
            />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function FeatureCard({ title, text, to }: { title: string; text: string; to: '/about' | '/products' | '/sustainability' }) {
  return (
    <Link
      to={to}
      className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-jade-400/60"
    >
      <h4 className="text-xl font-bold">{title}</h4>
      <p className="mt-3 text-sm text-slate-400">{text}</p>
    </Link>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
      <p className="text-3xl font-black text-jade-300">{value}</p>
      <p className="mt-2 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </div>
  )
}

function SupplyItem({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between">
        <p>{label}</p>
        <p>{value}%</p>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-jade-500" style={{ width: `${value}%` }} />
      </div>
    </div>
  )
}
