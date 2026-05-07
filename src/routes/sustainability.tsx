import { createFileRoute } from '@tanstack/react-router'
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
          />
          <PillarCard
            title="Operational Efficiency"
            text="Improving production systems to reduce waste and enhance energy productivity."
          />
          <PillarCard
            title="Community Development"
            text="Investing in local skills, livelihoods, and social wellbeing programs in key regions."
          />
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900/40">
        <div className="mx-auto w-full max-w-7xl px-6 py-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-jade-300">Progress Snapshot</p>
          <h3 className="mt-2 text-3xl font-black">Key focus metrics</h3>

          <div className="mt-8 grid gap-4 md:grid-cols-4">
            <Metric label="Grower training coverage" value="87%" />
            <Metric label="Energy efficiency projects" value="34" />
            <Metric label="Community initiatives" value="120+" />
            <Metric label="Water optimization sites" value="22" />
          </div>
        </div>
      </section>
    </SiteShell>
  )
}

function PillarCard({ text, title }: { text: string; title: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="mt-3 text-sm text-slate-400">{text}</p>
    </article>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
      <p className="text-2xl font-black text-jade-300">{value}</p>
      <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{label}</p>
    </article>
  )
}
