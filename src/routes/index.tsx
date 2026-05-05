import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: HulettsWebsite,
  head: () => ({
    meta: [{ title: 'Huletts Sugar — Sweetening Everyday Life' }],
  }),
})

function HulettsWebsite() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-jade-600 font-black text-white">
              H
            </div>
            <div>
              <p className="text-lg font-bold leading-none">Huletts Sugar</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Since 1892</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#products" className="transition-colors hover:text-jade-300">
              Products
            </a>
            <a href="#sustainability" className="transition-colors hover:text-jade-300">
              Sustainability
            </a>
            <a href="#business" className="transition-colors hover:text-jade-300">
              Business
            </a>
            <a href="#contact" className="transition-colors hover:text-jade-300">
              Contact
            </a>
          </nav>

          <button className="rounded-full bg-jade-600 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-jade-500">
            Get in Touch
          </button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-white/10">
          <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-jade-600/30 blur-[120px]" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
            <div>
              <p className="mb-4 inline-flex rounded-full border border-jade-500/30 bg-jade-500/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.2em] text-jade-300">
                Premium Sugar Solutions
              </p>
              <h1 className="text-4xl font-black leading-tight md:text-6xl">
                Sweetening homes, kitchens, and industries across Africa.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-slate-300">
                Huletts Sugar delivers trusted household sugar, specialty sweeteners, and large-scale
                industrial supply with strong quality standards and sustainable farming partnerships.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-full bg-jade-600 px-7 py-3 font-bold text-white transition-colors hover:bg-jade-500">
                  Explore Products
                </button>
                <button className="rounded-full border border-white/20 bg-white/5 px-7 py-3 font-bold text-slate-100 transition-colors hover:bg-white/10">
                  Download Company Profile
                </button>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 text-center">
                <StatCard label="Years of Heritage" value="130+" />
                <StatCard label="Partner Growers" value="2,000+" />
                <StatCard label="Countries Served" value="20+" />
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30">
              <div className="mb-5 flex items-center justify-between text-sm text-slate-300">
                <p className="font-semibold">Supply Snapshot</p>
                <p className="rounded-full bg-jade-500/15 px-3 py-1 text-xs font-bold text-jade-300">
                  Live Capacity
                </p>
              </div>

              <div className="space-y-4">
                <SupplyItem name="Refined White Sugar" percent={92} />
                <SupplyItem name="Brown Sugar" percent={85} />
                <SupplyItem name="Industrial Bulk Orders" percent={78} />
                <SupplyItem name="Specialty Blends" percent={64} />
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm text-slate-300">
                We support long-term contracts for retailers, food manufacturers, and beverage partners.
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Our Products</p>
              <h2 className="mt-2 text-3xl font-black md:text-4xl">From table-top packs to industrial scale</h2>
            </div>
            <p className="hidden max-w-lg text-right text-slate-400 md:block">
              Carefully manufactured products designed for retail consumers, food service, and major
              production lines.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ProductCard
              title="White Sugar"
              description="Fine crystal white sugar for everyday home and hospitality use."
            />
            <ProductCard
              title="Brown Sugar"
              description="Rich, caramel notes ideal for baking, sauces, and premium recipes."
            />
            <ProductCard
              title="Icing Sugar"
              description="Ultra-fine powder for confectionery, bakery finishing, and desserts."
            />
            <ProductCard
              title="Industrial Supply"
              description="Bulk sugar formats with consistent quality for manufacturing plants."
            />
          </div>
        </section>

        <section id="sustainability" className="border-y border-white/10 bg-slate-900/60">
          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 md:grid-cols-3">
            <InfoBlock
              title="Responsible Agriculture"
              text="We partner with growers on efficient irrigation, soil health, and crop resilience to strengthen long-term yields."
            />
            <InfoBlock
              title="Energy Efficiency"
              text="Our sites continuously improve energy systems and production processes to reduce operational footprint."
            />
            <InfoBlock
              title="Community Impact"
              text="We invest in skills development, local enterprise opportunities, and health-focused support in farming regions."
            />
          </div>
        </section>

        <section id="business" className="mx-auto w-full max-w-7xl px-6 py-20">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-jade-900/30 to-cyan-900/20 p-8 md:p-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Business Partnerships</p>
            <h3 className="mt-3 text-3xl font-black md:text-4xl">Reliable procurement. Predictable quality.</h3>
            <p className="mt-4 max-w-3xl text-slate-300">
              Whether you are a national retailer or a food and beverage producer, our account teams can
              structure dependable supply agreements backed by transparent service levels.
            </p>

            <div className="mt-8 grid gap-4 text-sm md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Dedicated key account support</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Custom pack sizes and formats</div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">Regional distribution capability</div>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-14 md:grid-cols-2">
          <div>
            <h4 className="text-2xl font-black">Let’s build your sugar supply strategy.</h4>
            <p className="mt-3 max-w-xl text-slate-400">
              Contact our team for retail, wholesale, or industrial enquiries.
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
      </footer>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="text-2xl font-black text-jade-300">{value}</div>
      <p className="mt-1 text-xs text-slate-400">{label}</p>
    </div>
  )
}

function SupplyItem({ name, percent }: { name: string; percent: number }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm text-slate-300">
        <p>{name}</p>
        <p>{percent}%</p>
      </div>
      <div className="h-2 rounded-full bg-slate-800">
        <div className="h-2 rounded-full bg-jade-500" style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}

function ProductCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:border-jade-400/60">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{description}</p>
    </article>
  )
}

function InfoBlock({ title, text }: { title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{text}</p>
    </article>
  )
}
