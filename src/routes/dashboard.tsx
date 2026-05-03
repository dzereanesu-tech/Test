import { createFileRoute } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { convexQuery } from '@convex-dev/react-query'
import { api } from '../../convex/_generated/api'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  // In a real app, this would come from auth/context
  const orgSlug = "vic-falls-safaris"
  
  const { data: org } = useSuspenseQuery(
    convexQuery(api.dashboard.getOrganizationBySlug, { slug: orgSlug })
  )

  if (!org) return <div className="p-20 text-center">Organization not found</div>

  const { data: stats } = useSuspenseQuery(
    convexQuery(api.dashboard.getStats, { org_id: org._id })
  )

  const { data: departures } = useSuspenseQuery(
    convexQuery(api.dashboard.getUpcomingDepartures, { org_id: org._id })
  )

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-stone-100 flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 flex flex-col p-6 gap-8">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 bg-jade-600 rounded flex items-center justify-center font-bold">O</div>
          <span className="font-bold uppercase tracking-tight">OviTravel</span>
        </div>
        
        <nav className="flex flex-col gap-2">
          <NavItem icon="📊" label="Dashboard" active />
          <NavItem icon="📅" label="Bookings" />
          <NavItem icon="🌍" label="Packages" />
          <NavItem icon="👥" label="Customers" />
          <NavItem icon="👤" label="Guides" />
          <NavItem icon="💰" label="Finances" />
          <NavItem icon="⚙️" label="Settings" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-[#0a0a0a]/50 backdrop-blur-sm">
          <div>
            <h1 className="text-xl font-bold">{org.name}</h1>
            <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Operator Command Dashboard</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-jade-600 hover:bg-jade-500 text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
              + New Booking
            </button>
            <div className="w-10 h-10 rounded-full bg-stone-800 border border-white/10" />
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Active Tours" value={stats.activeTours} sub="Today" icon="🦁" />
          <StatCard title="Monthly Revenue" value={`$${stats.monthlyRevenue.toLocaleString()}`} sub="Aug 2025" icon="💰" />
          <StatCard title="New Enquiries" value={stats.newEnquiries} sub="Last 24h" icon="📨" />
          <StatCard title="Outstanding" value={`$${stats.outstandingBalance.toLocaleString()}`} sub="Balance" icon="⚖️" />
        </div>

        <div className="px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upcoming Departures */}
          <div className="lg:col-span-2 bg-white/5 border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold mb-6">Upcoming Departures</h3>
            <div className="space-y-4">
              {departures.length === 0 ? (
                <div className="text-stone-500 text-sm py-10 text-center">No upcoming departures found</div>
              ) : (
                departures.map((booking) => (
                  <div key={booking._id} className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-jade-600/10 flex flex-col items-center justify-center border border-jade-600/20">
                        <span className="text-[10px] uppercase font-bold text-jade-400">AUG</span>
                        <span className="text-lg font-bold leading-tight">01</span>
                      </div>
                      <div>
                        <div className="font-bold text-sm">{booking.lead_traveler_name}</div>
                        <div className="text-xs text-stone-500">{booking.booking_ref} • {booking.pax_count} Pax</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        booking.payment_status === 'fully_paid' ? 'bg-green-500/10 text-green-400' : 'bg-amber-500/10 text-amber-400'
                      }`}>
                        {booking.payment_status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right Column - Quick Stats / Actions */}
          <div className="flex flex-col gap-8">
             <div className="bg-jade-600/10 border border-jade-600/20 rounded-2xl p-6 relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-lg font-bold mb-2">Generate Itinerary</h3>
                  <p className="text-sm text-stone-400 mb-6">Use OVI AI to craft the perfect African adventure in seconds.</p>
                  <button className="w-full bg-jade-600 hover:bg-jade-500 text-white py-3 rounded-xl font-bold transition-all">
                    Open AI Copilot
                  </button>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-jade-600/20 blur-3xl -z-0" />
             </div>

             <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
                <h3 className="text-lg font-bold mb-4">Guide Status</h3>
                <div className="space-y-4">
                   <GuideStatus name="Tendai M." status="On Tour" />
                   <GuideStatus name="Blessing C." status="Available" />
                   <GuideStatus name="Gift K." status="Available" />
                </div>
             </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: string, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all ${
      active ? 'bg-jade-600 text-white' : 'text-stone-400 hover:bg-white/5 hover:text-white'
    }`}>
      <span className="text-lg">{icon}</span>
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

function StatCard({ title, value, sub, icon }: { title: string, value: string | number, sub: string, icon: string }) {
  return (
    <div className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all">
      <div className="flex items-center justify-between mb-4">
        <span className="text-stone-500 text-xs font-bold uppercase tracking-widest">{title}</span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-xs text-jade-400 font-bold">{sub}</div>
    </div>
  )
}

function GuideStatus({ name, status }: { name: string, status: 'On Tour' | 'Available' }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-stone-800 border border-white/10" />
        <span className="text-sm font-medium">{name}</span>
      </div>
      <span className={`w-2 h-2 rounded-full ${status === 'Available' ? 'bg-jade-500 shadow-sm shadow-jade-500/50' : 'bg-amber-500'}`} title={status} />
    </div>
  )
}
