import { createFileRoute, Link } from '@tanstack/react-router'
import { motion } from 'framer-motion'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 font-sans selection:bg-jade-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-jade-600 rounded-lg flex items-center justify-center font-bold text-white">O</div>
            <span className="text-xl font-bold tracking-tight uppercase">OviTravel</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-stone-400">
            <a href="#features" className="hover:text-jade-400 transition-colors">Features</a>
            <a href="#solutions" className="hover:text-jade-400 transition-colors">Solutions</a>
            <a href="#pricing" className="hover:text-jade-400 transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-sm font-medium text-stone-400 hover:text-white transition-colors">Log in</Link>
            <button className="bg-jade-600 hover:bg-jade-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-jade-900/20">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-jade-600/30 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-600/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-jade-500/10 border border-jade-500/20 text-jade-400 text-xs font-bold tracking-widest uppercase mb-6">
              The OS for African Safari Operators
            </span>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-stone-400">
              Run Your Safari.<br />Rule Your Market.
            </h1>
            <p className="text-lg md:text-xl text-stone-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              OviTravel is the first purpose-engineered operating system built specifically for Africa. 
              Seamlessly manage bookings, multi-currency payments, and field operations in one unified platform.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-jade-600 hover:bg-jade-500 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-xl shadow-jade-900/40">
                Start Free Trial
              </button>
              <button className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full text-lg font-bold transition-all">
                Book a Demo
              </button>
            </div>
          </motion.div>

          {/* Dashboard Preview Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative mx-auto max-w-5xl"
          >
            <div className="rounded-2xl border border-white/10 bg-[#121212] shadow-2xl overflow-hidden aspect-[16/10] flex flex-col">
              <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/20" />
                  <div className="w-3 h-3 rounded-full bg-green-500/20" />
                </div>
                <div className="flex-1 text-center text-[10px] text-stone-500 uppercase tracking-widest font-bold">
                  OviTravel — Operator Command Center
                </div>
              </div>
              <div className="flex-1 flex p-6 gap-6">
                <div className="w-48 hidden lg:flex flex-col gap-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="h-8 rounded bg-white/5 w-full animate-pulse" />
                  ))}
                </div>
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="rounded-xl bg-white/5 border border-white/5 p-4 flex flex-col gap-2">
                       <div className="h-3 w-1/3 bg-white/10 rounded" />
                       <div className="h-6 w-2/3 bg-jade-500/20 rounded mt-2" />
                       <div className="h-2 w-full bg-white/5 rounded mt-auto" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Floating feature icons */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-amber-600/20 rounded-2xl blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-jade-600/20 rounded-2xl blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-stone-500 mb-12">
            Built for operators in
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <span className="text-xl font-bold tracking-tighter">VICTORIA FALLS</span>
             <span className="text-xl font-bold tracking-tighter">HWANGE</span>
             <span className="text-xl font-bold tracking-tighter">CHOBE</span>
             <span className="text-xl font-bold tracking-tighter">MANA POOLS</span>
             <span className="text-xl font-bold tracking-tighter">OKAVANGO</span>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="features" className="py-32 bg-stone-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Designed for Africa's Reality</h2>
            <p className="text-stone-400 max-w-2xl mx-auto">
              We understand the unique challenges of safari operations because we live here. 
              OviTravel handles the complex logistics so you can focus on the guest experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Multi-Currency Payments"
              description="Native support for USD, EcoCash, Flutterwave, and mobile money. Track cash receipts with built-in reconciliation."
              icon="💳"
            />
            <FeatureCard 
              title="Offline-First Ops"
              description="Keep working through load-shedding and in remote bush camps. Data syncs automatically when you're back online."
              icon="📡"
            />
            <FeatureCard 
              title="WhatsApp Integration"
              description="Communicate with travelers and guides on the platform they already use. Automated booking confirmations via WhatsApp."
              icon="💬"
            />
          </div>
        </div>
      </section>
      
      <footer className="py-12 border-t border-white/5 text-center text-stone-500 text-sm">
        <p>&copy; 2025 Ovia Software Solutions. Harare, Zimbabwe.</p>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, icon }: { title: string, description: string, icon: string }) {
  return (
    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-jade-500/50 transition-colors group">
      <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="text-stone-400 leading-relaxed">{description}</p>
    </div>
  )
}
