import Link from "next/link";

const packages = [
  {
    id: "bronze",
    name: "HeroS Bronze",
    sub: "One-Time Deep Clean — For Families Who Need a Fresh Start",
    color: "#cd7f32",
    bg: "#fdf6ee",
    border: "#e8c99a",
    badge: "On-Demand",
    tagline: "Before the guests arrive. Before the new chapter begins.",
    team: "1 Peer Leader + 2 Cleaning Technicians",
    duration: "3–5 hours depending on apartment size",
    frequency: "One-time / on-demand booking. No commitment required.",
    booking: "WhatsApp or website. 48-hour advance booking preferred. Same-day available for +15% urgency fee.",
    scope: [
      "All rooms: sweep, vacuum, mop",
      "Kitchen counter, sink, stovetop cleaned",
      "Bathroom: toilet, floor, mirror, sink deep cleaned",
      "Ceiling fans dusted",
      "All trash removed and bin liners replaced",
      "Glass doors and balcony wiped",
    ],
    notIncluded: ["Inside fridge/oven", "Window exterior", "Sofa steam clean", "Garage"],
    addOns: [
      "Fridge interior: +BDT 500",
      "Oven interior: +BDT 400",
      "Balcony/terrace: +BDT 500",
      "Steam clean sofa (per seat): +BDT 300",
    ],
    targets: ["Young single professionals / flatmates", "Joint family pre-Eid or pre-event", "New apartment move-in or move-out"],
  },
  {
    id: "silver",
    name: "HeroS Silver",
    sub: "Recurring Bi-Weekly or Weekly Service — For Busy Families Who Need Reliability",
    color: "#606060",
    bg: "#f4f4f4",
    border: "#c0c0c0",
    badge: "Most Popular",
    tagline: "A clean home every week. A team that knows your space.",
    team: "1 Peer Leader + 2 Cleaning Technicians (same team assigned each visit)",
    duration: "2–3 hours per visit (maintenance clean)",
    frequency: "Weekly, twice monthly, or 3x/week",
    booking: "Monthly subscription with 10–15% discount vs. Bronze per-visit rate",
    scope: [
      "All rooms swept, vacuumed, mopped",
      "Kitchen and bathrooms cleaned",
      "Bins emptied and liners replaced",
      "All surfaces wiped",
      "Ceiling fans dusted fortnightly",
      "Monthly: deeper window clean + fridge exterior",
    ],
    notIncluded: [],
    addOns: [
      "Elderly welfare WhatsApp check-in after every visit",
      "Same team every visit — changes only with client approval",
    ],
    targets: ["Double-income urban couple", "Elderly couple alone (subscribed by adult children abroad)", "Joint family needing regular maintenance"],
  },
  {
    id: "gold",
    name: "HeroS Gold",
    sub: "Premium Home Package — For Families Who Want the Best, Consistently",
    color: "#d4a017",
    bg: "#fefbee",
    border: "#f0d080",
    badge: "Premium",
    tagline: "You focus on your career, your family, your ambitions. We handle everything at home.",
    team: "1 Senior Peer Leader + 3–4 Cleaning Technicians + Dedicated account manager",
    duration: "4–6 hours per visit. Full-scope clean every visit.",
    frequency: "Weekly minimum. Configurable as 2x/week or alternate-day.",
    booking: "Premium monthly contract with significant savings vs. one-off rate",
    scope: [
      "Full home deep clean every visit",
      "Inside fridge cleaned monthly",
      "Inside oven cleaned monthly",
      "Balcony/terrace included every visit",
      "Sofa vacuumed every visit",
      "Window interior cleaned every visit",
      "All fans deep cleaned monthly",
      "Monthly steam clean: sofas, mattresses, upholstery",
      "Laundry support: operate client's washing machine + fold/organise",
    ],
    notIncluded: [],
    addOns: [
      "Priority scheduling — Gold clients get first slot",
      "Emergency clean within 4 hours (subject to availability)",
      "Monthly PDF report: visits, chemicals used, observations",
    ],
    targets: ["Affluent double-income households", "Large joint families in premium apartments", "NRB returnees with high standards"],
  },
  {
    id: "platinum",
    name: "HeroS Platinum",
    sub: "Corporate & Business Premises Contract",
    color: "#1a7a4a",
    bg: "#e8f5ee",
    border: "#7dc9a0",
    badge: "B2B",
    tagline: "One point of contact. Written logs. Accountable, professional, on-time.",
    team: "1 Corporate Peer Leader + 2–6 Cleaning Technicians depending on premises size",
    duration: "1–4 hours per visit depending on premises",
    frequency: "Daily (Mon–Sat), 3x/week, or custom schedule set at contract signing.",
    booking: "Monthly invoicing. Contract-based with SLA.",
    scope: [
      "Reception, workstations, meeting rooms cleaned",
      "Common areas, kitchen/pantry deep cleaned",
      "All office toilets sanitised",
      "Glass doors and windows cleaned",
      "Garage/workshop degreasing and floor clean",
      "Industrial floor scrubber for large floor areas",
      "Written service log submitted every visit",
    ],
    notIncluded: [],
    addOns: [
      "Garage add-on: specialist degreasing & pressure washing",
      "Pressure washer for car parks and outdoor areas",
      "Steam cleaner for deep sanitisation",
      "Quarterly Kampus Staff Training Offer for corporate clients",
    ],
    targets: ["SME offices (5–50 staff)", "NGOs, clinics, boutique showrooms", "Co-working spaces, restaurants (front-of-house)", "Car garages and workshops"],
  },
];

const chemicals = [
  { name: "Harpic Power Plus", use: "Toilet bowl, sinks, limescale", ratio: "Undiluted", note: "Acid-based — NEVER mix with bleach. Not for marble." },
  { name: "Domex Floor Cleaner", use: "All hard floors, tiles", ratio: "1:20 in water", note: "Do not use undiluted. Good antibacterial properties." },
  { name: "Savlon All-Purpose Cleaner", use: "Kitchen counters, general surfaces", ratio: "1:10 in water", note: "Safe for most surfaces. Not for heavy grease." },
  { name: "Colin Glass & Surface Cleaner", use: "Glass, mirrors, chrome", ratio: "Ready-to-use spray", note: "Do not use on anti-reflective coatings." },
  { name: "Vim Dishwash Gel", use: "Kitchen sinks, greasy surfaces", ratio: "Small amount, warm water", note: "Good degreaser. Not for stainless steel in excess." },
  { name: "Dettol Surface Spray", use: "Switches, handles, remotes", ratio: "Ready-to-use spray", note: "Allow 30 second contact time for disinfection." },
  { name: "Pril Floor Cleaner", use: "All floor types including marble", ratio: "1:20 in water", note: "pH-neutral — SAFE for marble and natural stone." },
  { name: "White Vinegar (Food Grade)", use: "Glass, limescale, eco-conscious clients", ratio: "1:3 in water", note: "Natural, safe. Strong smell dissipates in 20 min. Not for marble." },
];

export default function Services() {
  return (
    <>
      {/* Header */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1a1a2e, #1a7a4a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#86efac" }}>Our Packages</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">HeroS Service Packages</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Four tiers designed to match every Dhaka household and business — from a one-time deep clean to a full B2B corporate contract.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {packages.map((pkg) => (
            <div key={pkg.id} id={pkg.id} className="rounded-2xl border-2 overflow-hidden"
              style={{ borderColor: pkg.border }}>
              {/* Header */}
              <div className="px-6 py-5 flex flex-wrap items-start justify-between gap-3"
                style={{ background: pkg.bg }}>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h2 className="text-2xl font-bold" style={{ color: pkg.color }}>{pkg.name}</h2>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full text-white" style={{ background: pkg.color }}>
                      {pkg.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{pkg.sub}</p>
                  <p className="text-sm font-medium mt-2 italic" style={{ color: pkg.color }}>&quot;{pkg.tagline}&quot;</p>
                </div>
                <Link href="/book"
                  className="px-5 py-2.5 rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                  style={{ background: pkg.color }}>
                  Book This Package
                </Link>
              </div>

              {/* Details grid */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Team & logistics */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Team & Logistics</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div><span className="font-medium text-gray-800">Team:</span> {pkg.team}</div>
                    <div><span className="font-medium text-gray-800">Duration:</span> {pkg.duration}</div>
                    <div><span className="font-medium text-gray-800">Frequency:</span> {pkg.frequency}</div>
                    <div><span className="font-medium text-gray-800">Pricing:</span> {pkg.booking}</div>
                  </div>
                </div>

                {/* Scope */}
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">What&apos;s Included</h4>
                  <ul className="space-y-1.5">
                    {pkg.scope.map((s) => (
                      <li key={s} className="text-sm text-gray-600 flex gap-2">
                        <span style={{ color: pkg.color }}>✓</span> {s}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons & targets */}
                <div className="space-y-5">
                  {pkg.addOns.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
                        {pkg.id === "silver" || pkg.id === "gold" ? "Key Features" : "Add-Ons Available"}
                      </h4>
                      <ul className="space-y-1.5">
                        {pkg.addOns.map((a) => (
                          <li key={a} className="text-sm text-gray-600 flex gap-2">
                            <span className="text-blue-500">+</span> {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {pkg.notIncluded.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Not Included (Add-On)</h4>
                      <ul className="space-y-1">
                        {pkg.notIncluded.map((n) => (
                          <li key={n} className="text-sm text-gray-500 flex gap-2">
                            <span className="text-gray-300">—</span> {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">Best For</h4>
                    <ul className="space-y-1">
                      {pkg.targets.map((t) => (
                        <li key={t} className="text-sm text-gray-600 flex gap-2">
                          <span style={{ color: pkg.color }}>→</span> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chemical Table */}
      <section className="py-16" style={{ background: "#f8fffe" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "#1a1a2e" }}>Approved Chemical List</h2>
          <p className="text-gray-500 text-sm mb-6">All Bangladesh-available products used by HeroS teams, approved by the Kampus chemical protocol.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead style={{ background: "var(--hero-green)" }}>
                <tr>
                  {["Chemical / Product", "Surface Use", "Dilution Ratio", "Safety Note"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-white font-semibold text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {chemicals.map((c, i) => (
                  <tr key={c.name} style={{ background: i % 2 === 0 ? "white" : "#f8fffe" }}>
                    <td className="px-4 py-3 font-medium text-gray-800">{c.name}</td>
                    <td className="px-4 py-3 text-gray-600">{c.use}</td>
                    <td className="px-4 py-3 text-gray-600 font-mono text-xs">{c.ratio}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 p-4 rounded-xl border border-yellow-200 bg-yellow-50">
            <p className="text-sm font-semibold text-yellow-800 mb-2">⚠️ Chemical Safety — Non-Negotiables</p>
            <ul className="text-xs text-yellow-700 space-y-1">
              <li>• NEVER mix acid-based cleaners (Harpic) with bleach — produces toxic chlorine gas</li>
              <li>• NEVER use acid-based cleaners on marble, granite, or natural stone floors</li>
              <li>• ALWAYS use colour-coded cloths: RED = toilet, YELLOW = kitchen, BLUE = general, GREEN = glass</li>
              <li>• ALWAYS label spray bottles. Never refill without washing the bottle first</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "var(--hero-green)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Ready to Choose Your Package?</h2>
          <p className="mb-6 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Book now via WhatsApp or online. Our team will confirm within 24 hours.
          </p>
          <Link href="/book"
            className="inline-block px-10 py-4 rounded-full bg-white font-bold text-lg hover:bg-gray-100 transition-colors"
            style={{ color: "var(--hero-green)" }}>
            Book Now →
          </Link>
        </div>
      </section>
    </>
  );
}
