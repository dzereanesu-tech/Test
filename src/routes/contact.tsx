import { createFileRoute } from '@tanstack/react-router'
import { PageHero, SiteShell } from '~/components/site-shell'

export const Route = createFileRoute('/contact')({
  component: ContactPage,
  head: () => ({
    meta: [{ title: 'Contact Huletts Sugar' }],
  }),
})

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        badge="Contact"
        title="Talk to our team about supply, partnerships, and distribution."
        description="Whether you're a retailer, distributor, or manufacturer, our team can help you plan the right product and delivery strategy."
      />

      <section className="mx-auto w-full max-w-7xl px-6 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h2 className="text-2xl font-black">Send an enquiry</h2>
            <p className="mt-2 text-slate-400">We typically respond within one business day.</p>

            <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <Input label="Full name" placeholder="Jane Smith" />
              <Input label="Business email" placeholder="jane@company.com" />
              <Input label="Company" placeholder="ABC Foods" />
              <label className="block text-sm">
                <span className="mb-1 block text-slate-300">Message</span>
                <textarea
                  className="h-32 w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-jade-400"
                  placeholder="Tell us about your procurement or partnership needs"
                />
              </label>
              <button className="rounded-full bg-jade-600 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-jade-500">
                Submit Enquiry
              </button>
            </form>
          </article>

          <article className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-black">Direct Contacts</h3>
            <div className="mt-5 space-y-3 text-slate-300">
              <p>
                <span className="text-slate-500">Sales:</span> sales@huletts.co.za
              </p>
              <p>
                <span className="text-slate-500">Partnerships:</span> partnerships@huletts.co.za
              </p>
              <p>
                <span className="text-slate-500">Phone:</span> +27 31 000 0000
              </p>
              <p>
                <span className="text-slate-500">Office:</span> Durban, KwaZulu-Natal, South Africa
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/60 p-5 text-sm text-slate-300">
              <p className="font-semibold">Business hours</p>
              <p className="mt-2">Monday–Friday: 08:00–17:00 (SAST)</p>
            </div>
          </article>
        </div>
      </section>
    </SiteShell>
  )
}

function Input({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <label className="block text-sm">
      <span className="mb-1 block text-slate-300">{label}</span>
      <input
        className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-slate-100 outline-none transition-colors placeholder:text-slate-500 focus:border-jade-400"
        placeholder={placeholder}
      />
    </label>
  )
}
