import Link from "next/link";

const stats = [
  { value: "4+", label: "Service Packages" },
  { value: "100%", label: "Trained & Verified Staff" },
  { value: "5", label: "Family Profiles Served" },
  { value: "Dhaka", label: "Phase 1 Coverage" },
];

const problems = [
  {
    pain: "Unreliable 'bua' — absent without notice",
    who: "Working mothers, dual-income couples",
    solution: "Scheduled, punctual teams with backup coverage guarantee",
  },
  {
    pain: "Safety concerns — untrained strangers in the home",
    who: "Families with children, elderly parents",
    solution: "Background-verified, ID-registered, Kampus-certified staff",
  },
  {
    pain: "No time to supervise — cleaning done incorrectly",
    who: "Busy professionals, NRB returnees",
    solution: "Peer Leader supervises every visit; quality checklist submitted",
  },
  {
    pain: "Chemical safety — harsh products ruining surfaces",
    who: "Families with kids, allergy sufferers",
    solution: "Kampus-approved chemical protocol; trained product usage",
  },
  {
    pain: "Elderly parents alone — house unclean, no care",
    who: "Adult children working away or abroad",
    solution: "Elderly-care cleaning package with welfare check-in protocol",
  },
  {
    pain: "Offices with no consistent cleaning standard",
    who: "SMEs, startups, NGOs, corporate offices",
    solution: "Contracted B2B cleaning with SLA, logs, and reporting",
  },
];

const packages = [
  {
    id: "bronze",
    name: "HeroS Bronze",
    sub: "One-Time Deep Clean",
    color: "#cd7f32",
    bg: "#fdf6ee",
    border: "#e8c99a",
    desc: "For families who need a fresh start — move-in, pre-event, or on-demand clean.",
    features: ["1 Peer Leader + 2 Technicians", "3–5 hours", "All rooms: vacuum, sweep, mop", "Kitchen & bathroom deep clean", "Ceiling fans dusted", "Trash removed"],
    ideal: "Young professionals, flatmates, joint families pre-Eid",
  },
  {
    id: "silver",
    name: "HeroS Silver",
    sub: "Recurring Weekly / Bi-Weekly",
    color: "#7a7a7a",
    bg: "#f4f4f4",
    border: "#c0c0c0",
    desc: "Reliable, scheduled visits with the same trusted team every time.",
    features: ["1 Peer Leader + 2 Technicians", "2–3 hours per visit", "Same team always assigned", "Weekly or bi-weekly options", "Elderly welfare check-in WhatsApp", "Monthly window deep clean"],
    ideal: "Double-income couples, elderly households (subscribed by adult children abroad)",
  },
  {
    id: "gold",
    name: "HeroS Gold",
    sub: "Premium Home Package",
    color: "#d4a017",
    bg: "#fefbee",
    border: "#f0d080",
    desc: "Full-scope deep clean every visit, with dedicated account manager and monthly PDF report.",
    features: ["Senior Peer Leader + 3–4 Technicians", "4–6 hours per visit", "Monthly steam clean (sofas, mattresses)", "Inside fridge & oven monthly", "Priority 4-hour emergency clean", "Monthly PDF service report"],
    ideal: "Affluent households, NRB returnees, large joint families in premium apartments",
  },
  {
    id: "platinum",
    name: "HeroS Platinum",
    sub: "Corporate & Business Contract",
    color: "#1a7a4a",
    bg: "#e8f5ee",
    border: "#7dc9a0",
    desc: "Professional B2B contract with SLA, service logs, and dedicated corporate Peer Leader.",
    features: ["Corporate Peer Leader + 2–6 Technicians", "Daily, 3x/week or custom schedule", "Written service log every visit", "Monthly invoicing", "Garage & workshop deep clean", "Industrial floor scrubber available"],
    ideal: "SME offices, NGOs, clinics, showrooms, co-working spaces, car garages",
  },
];

const whyHeros = [
  { icon: "🎓", title: "Kampus-Certified", desc: "Every cleaner is a trained Kampus graduate — not a random hire." },
  { icon: "👤", title: "Peer Leader on Every Visit", desc: "A certified supervisor arrives with every team, monitors quality, and reports to you." },
  { icon: "🛡️", title: "Background Verified", desc: "ID-registered, vetted staff. Safe for homes with children, elderly, and pets." },
  { icon: "🧪", title: "Safe Chemical Protocol", desc: "Kampus-approved dilution ratios and surface-matched chemicals only." },
  { icon: "📱", title: "WhatsApp Reports", desc: "Receive a digital service report within 1 hour of every completed visit." },
  { icon: "🏆", title: "Same Team Always", desc: "Silver & Gold clients get the same Peer Leader and team every visit — building trust." },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #1a7a4a 100%)" }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6" style={{ background: "rgba(255,255,255,0.1)" }}>
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              <span className="text-white text-xs font-medium" style={{ opacity: 0.9 }}>Now serving Gulshan · Banani · Uttara · Mirpur · Dhanmondi</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Clean Space.<br />Clear Mind.<br />
              <span style={{ color: "#86efac" }}>Real Heroes.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
              Bangladesh&apos;s first branded, trained, and supervised cleaning team.
              Every cleaner is a Kampus-certified professional. Every visit is led by a Peer Leader.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book"
                className="px-7 py-3.5 rounded-full text-white font-semibold text-base transition-all hover:opacity-90"
                style={{ background: "var(--hero-green)" }}>
                Book a Clean
              </Link>
              <Link href="/services"
                className="px-7 py-3.5 rounded-full text-white font-semibold text-base border border-white/30 hover:bg-white/20 transition-all"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                View Packages
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.1)" }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-white">{s.value}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a1a2e" }}>
              The Problem HeroS Solves
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dhaka&apos;s 22+ million residents face a deeply personal crisis: time poverty and trust deficit.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problems.map((p) => (
              <div key={p.pain} className="rounded-xl p-5 border" style={{ borderColor: "#e8f5ee", background: "#fafffe" }}>
                <p className="font-semibold text-sm mb-1" style={{ color: "#1a1a2e" }}>❌ {p.pain}</p>
                <p className="text-xs text-gray-400 mb-3">{p.who}</p>
                <p className="text-sm" style={{ color: "var(--hero-green)" }}>✅ {p.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why HeroS */}
      <section className="py-20" style={{ background: "#f8fffe" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a1a2e" }}>
              Why HeroS is Different
            </h2>
            <p className="text-gray-500">Not a cleaning agency. A career-building cleaning service.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyHeros.map((w) => (
              <div key={w.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{w.icon}</div>
                <h3 className="font-bold text-base mb-1" style={{ color: "#1a1a2e" }}>{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Our Service Packages</h2>
            <p className="text-gray-500">Four tiers designed to match every Dhaka household and business.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {packages.map((pkg) => (
              <div key={pkg.id} className="rounded-2xl border-2 p-5 flex flex-col transition-transform hover:-translate-y-1"
                style={{ borderColor: pkg.border, background: pkg.bg }}>
                <div className="text-2xl font-bold mb-0.5" style={{ color: pkg.color }}>{pkg.name}</div>
                <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: pkg.color }}>{pkg.sub}</div>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{pkg.desc}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="text-xs text-gray-700 flex gap-2">
                      <span style={{ color: pkg.color }}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className="text-xs text-gray-400 mb-4 italic">Best for: {pkg.ideal}</div>
                <Link href={`/services#${pkg.id}`}
                  className="text-center py-2 rounded-full text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  style={{ background: pkg.color }}>
                  Learn More
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/book"
              className="inline-block px-8 py-3.5 rounded-full text-white font-semibold transition-all hover:opacity-90"
              style={{ background: "var(--hero-green)" }}>
              Book Your Clean Today
            </Link>
          </div>
        </div>
      </section>

      {/* Peer Leader CTA */}
      <section className="py-20 text-white" style={{ background: "linear-gradient(135deg, #1a7a4a, #1a1a2e)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Peer Leader Model</h2>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
                Every HeroS team is led by a certified Peer Leader — a senior Kampus graduate who supervises quality,
                communicates with clients, and ensures the Kampus standard is met every single visit.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Arrives 10 minutes early; briefs team on client preferences",
                  "Digital quality checklist + before/after photos after every visit",
                  "Elderly package: sends welfare WhatsApp to adult child abroad",
                  "Leaves HeroS Completion Card + Kampus QR code after each clean",
                ].map((item) => (
                  <li key={item} className="flex gap-3 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
                    <span className="text-green-400 mt-0.5">✓</span> {item}
                  </li>
                ))}
              </ul>
              <Link href="/training"
                className="inline-block px-7 py-3 rounded-full font-semibold text-sm bg-white hover:bg-gray-100 transition-colors"
                style={{ color: "var(--hero-green)" }}>
                View Supervisor Training
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stage: "Entry", title: "Cleaning Technician", salary: "BDT 12,000–16,000/mo" },
                { stage: "Level 2", title: "Senior Technician", salary: "BDT 16,000–20,000/mo" },
                { stage: "Level 3", title: "Peer Leader", salary: "BDT 22,000–28,000/mo" },
                { stage: "Level 4", title: "Area Team Lead", salary: "BDT 30,000–38,000/mo" },
              ].map((lvl) => (
                <div key={lvl.stage} className="rounded-xl p-4 border" style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.1)" }}>
                  <div className="text-green-400 text-xs font-bold mb-1">{lvl.stage}</div>
                  <div className="text-white font-semibold text-sm mb-1">{lvl.title}</div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>{lvl.salary}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book CTA */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3" style={{ color: "#1a1a2e" }}>Ready to Book?</h2>
          <p className="text-gray-500 mb-6">48-hour advance booking preferred. Same-day available with urgency fee. WhatsApp or online booking.</p>
          <Link href="/book"
            className="inline-block px-10 py-4 rounded-full text-white text-lg font-bold transition-all hover:opacity-90"
            style={{ background: "var(--hero-green)" }}>
            Book a HeroS Clean →
          </Link>
        </div>
      </section>
    </>
  );
}
