import Link from "next/link";

const preVisit = [
  { step: 1, action: "Review Client Profile", detail: "Peer Leader checks client notes: allergies, surface types, special requests, pets, elderly present" },
  { step: 2, action: "Equipment Check", detail: "Confirm all equipment and chemicals loaded. Check PPE (gloves, masks, aprons) for all team members." },
  { step: 3, action: "Team Brief", detail: "5-minute briefing: today's scope, special instructions, assigned zones per team member" },
  { step: 4, action: "Arrival Confirmation", detail: "WhatsApp client 30 minutes before arrival: 'Your HeroS team is on the way — arriving by [time].'" },
];

const phase1 = [
  { step: 1, action: "Shoe Removal & PPE On", detail: "All team members remove shoes at entrance. Gloves, masks, and aprons worn before entering." },
  { step: 2, action: "Client Greeting", detail: "Peer Leader greets client formally. Confirms scope of today's clean. Notes any changes." },
  { step: 3, action: "Preliminary Walk-Through", detail: "Peer Leader does a 3-minute room-by-room assessment. Flags fragile items, special surfaces." },
  { step: 4, action: "Equipment Setup", detail: "Mop bucket, vacuum, chemical trolley set up centrally. Chemicals pre-diluted to correct ratios." },
  { step: 5, action: "Zone Assignment", detail: "Each team member assigned specific rooms/zones. Peer Leader oversees kitchen + bathrooms (highest-risk)." },
];

const phase2 = [
  { step: 1, action: "Ceiling Fans & AC Vents", detail: "Dry microfibre cloth on extendable handle. Fan blades wiped individually. AC louvers dusted." },
  { step: 2, action: "Cobweb Removal", detail: "Extendable duster along ceiling corners, light fixtures, and curtain rods." },
  { step: 3, action: "Furniture Dusting", detail: "Dry microfibre cloth top-to-bottom. Shelves, wardrobes, TV units, frames. Electronics: dry cloth only." },
  { step: 4, action: "Sofa & Upholstery", detail: "Vacuum attachment on sofas, cushions, curtain hems. Fabric checked for stain pre-treatment." },
  { step: 5, action: "Vacuum All Floors", detail: "All floor surfaces vacuumed before mopping: carpets, tiles, marble, wood. Removes loose dust." },
];

const phase3 = [
  { zone: "Kitchen — Countertops", method: "Spray, wait 2 min, wipe with microfibre. Rinse with damp cloth. Dry completely.", chemical: "Savlon All-Purpose Cleaner (1:10)" },
  { zone: "Kitchen — Stove & Hood", method: "Degreaser applied, 5-min dwell, scrubbed with non-scratch pad, wiped clean. Hood filter soaked.", chemical: "Vim Gel / imported degreaser" },
  { zone: "Kitchen — Sink", method: "Descaling agent applied. Scrub with soft brush. Polish stainless steel. Remove water marks.", chemical: "Harpic Bathroom Cleaner (for limescale). Rinse thoroughly." },
  { zone: "Bathroom — Toilet", method: "Interior: Harpic inside bowl, brush after 5 min. Exterior: surface spray + microfibre. Seat: RED cloth only.", chemical: "Harpic Power Plus. NEVER bleach on coloured surfaces." },
  { zone: "Bathroom — Floor & Walls", method: "Mop with diluted disinfectant. Grout lines scrubbed with small brush. Walls wiped top down.", chemical: "Domex Floor Cleaner / Savlon Disinfectant (1:20)" },
  { zone: "Bathroom — Mirror & Glass", method: "Glass cleaner sprayed and wiped with lint-free cloth in Z-pattern. No circular motion (prevents streaks).", chemical: "Colin Glass Cleaner or diluted white vinegar (1:3)" },
  { zone: "Bedroom — Floor", method: "After vacuum: mop with clean, well-wrung mop. Change mop water every 2 rooms. Baseboards wiped.", chemical: "Savlon Floor Cleaner / Dettol Antibacterial (1:20)" },
  { zone: "Glass Doors & Windows", method: "Frame wiped first, then glass. Two cloths: one damp, one dry. Vertical outside, horizontal inside.", chemical: "Colin Glass & Surface Cleaner" },
  { zone: "Garage / Workshop Floor", method: "Degreaser on oil stains — 10 min dwell. Stiff brush scrub. Pressure wash or bucket rinse. Squeegee.", chemical: "Super Clean Industrial Degreaser or Castrol Degreaser" },
];

const phase4 = [
  { step: 1, action: "Trash Removal", detail: "All bins emptied. New bin liners placed. Trash taken to building disposal area — not left in flat." },
  { step: 2, action: "Toilet Sanitiser Strip", detail: "Fresh toilet strip placed after cleaning as a visual hygiene signal. Small cost, huge client impact." },
  { step: 3, action: "Peer Leader Final Inspection", detail: "Room-by-room walkthrough with quality checklist. Photographs taken for client record." },
  { step: 4, action: "Item Repositioning", detail: "All moved items returned to original positions. Nothing rearranged without client instruction." },
  { step: 5, action: "Client Walkthrough", detail: "Peer Leader invites client for a brief walkthrough. Any feedback addressed immediately." },
  { step: 6, action: "HeroS Completion Card", detail: "Small card left: 'Your HeroS visit is complete. Your Hero today: [Name]. Next visit: [Date].' + Kampus QR." },
  { step: 7, action: "Digital Report Submitted", detail: "WhatsApp report sent to client within 1 hour. Corporate clients: PDF service log emailed." },
];

const machines = [
  {
    name: "Vacuum Cleaner",
    use: "Carpets, hard floors, sofas, car seats",
    power: "220V AC",
    caution: "Do not vacuum liquids, glass, or sharp objects",
    steps: ["Check dust canister is empty", "Attach correct nozzle for floor type", "Press on button", "Move slowly back to front", "Multiple passes on carpets", "Switch off, unplug, empty canister", "Clean brush and filter"],
  },
  {
    name: "High-Pressure Washer",
    use: "Outdoor floors, car bays, parking, exterior walls",
    power: "Connected water supply required",
    caution: "NEVER direct jet at people. Never use 0° nozzle.",
    steps: ["Connect water supply", "Attach 40° nozzle (general start)", "Hold trigger, apply pressure", "Keep nozzle 30–60 cm from surface", "Work top to bottom, left to right", "Switch off, disconnect water, release pressure", "Clean and dry nozzle before storing"],
  },
  {
    name: "Floor Scrubber / Polisher",
    use: "Large offices, hospitals, shopping malls, school corridors",
    power: "Electric — ensure correct pad fitted",
    caution: "Work carefully on wet floors. Place wet-floor signs.",
    steps: ["Check machine is clean, pad correctly fitted", "Fill detergent tank at correct dosage", "Switch on, set speed to minimum", "Work from large areas toward corners", "Rinse each section with clean water", "Switch off, remove and clean pad", "Empty and clean detergent tank"],
  },
  {
    name: "Steam Cleaner",
    use: "Bathroom tiles, grout, kitchen appliances, sofas",
    power: "220V — heat-up time 5–10 minutes",
    caution: "Steam is above 100°C — NEVER direct at the body.",
    steps: ["Fill tank with filtered water (NOT tap water)", "Switch on, allow 7–10 min to heat up", "Attach correct nozzle", "Hold 10–15 cm from surface", "Cover with microfibre to prevent spreading", "Use brush nozzle for grout or corners", "Switch off; drain remaining water once cool"],
  },
];

const maintenance: { machine: string; daily: string; weekly: string; monthly: string }[] = [
  { machine: "Vacuum Cleaner", daily: "Empty dust bag, clean brush", weekly: "Clean filter", monthly: "Professional machine check" },
  { machine: "Pressure Washer", daily: "Flush with clean water, dry nozzle", weekly: "Check hose for cracks/leaks", monthly: "Inspect pump; professional service if needed" },
  { machine: "Floor Scrubber", daily: "Remove and clean pad, empty tank", weekly: "Clean brush rollers, inspect cables", monthly: "Full machine inspection" },
  { machine: "Steam Cleaner", daily: "Drain water tank after use", weekly: "Descale with white vinegar (1:3)", monthly: "Check seals, nozzles, and cord" },
];

export default function ProcessPage() {
  return (
    <>
      {/* Header */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1a1a2e, #1a7a4a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#86efac" }}>The Kampus-Certified Protocol</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Cleaning Process</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            Every HeroS visit follows a standardised, trained process — not improvisation.
            This is the Kampus-certified cleaning protocol enforced by the Peer Leader on every single visit.
          </p>
        </div>
      </section>

      {/* PPE Section */}
      <section className="py-12 bg-yellow-50 border-b border-yellow-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold mb-4 text-yellow-800">⚠️ Personal Protective Equipment (PPE)</h2>
          <p className="text-sm text-yellow-700 mb-4">Before starting any cleaning work, every HeroS team member must wear the following protective equipment:</p>
          <div className="flex flex-wrap gap-3">
            {[
              "🧤 Rubber Gloves — protect hands",
              "👕 Apron / Uniform — protect body",
              "😷 Face Mask — against harmful fumes",
              "👟 Non-Slip Shoes — against slippery floors",
              "🥽 Safety Goggles — against chemical splashes",
            ].map((item) => (
              <span key={item} className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm px-3 py-1.5 rounded-full">{item}</span>
            ))}
          </div>
          <p className="text-xs text-yellow-600 mt-3">⚠ If any chemical contacts skin, rinse immediately with plenty of water and inform the supervisor.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Pre-Visit */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: "var(--hero-green)" }}>0</span>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>Pre-Visit Protocol</h2>
            <span className="text-xs text-gray-400">(Before Arriving at the Premises)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {preVisit.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold mb-2" style={{ color: "var(--hero-green)" }}>0{s.step}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{s.action}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 1 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: "#1a7a4a" }}>1</span>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>Phase 1 — Arrival & Setup</h2>
            <span className="text-xs text-gray-400">(10–15 minutes)</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {phase1.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold mb-2" style={{ color: "#1a7a4a" }}>{s.step}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{s.action}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 2 */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: "#2563eb" }}>2</span>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>Phase 2 — Dry Cleaning Phase</h2>
          </div>
          <div className="mb-5 p-3 rounded-lg bg-blue-50 border border-blue-200">
            <p className="text-sm text-blue-800 font-medium">📋 The Top-to-Bottom, Dry-Before-Wet Rule</p>
            <p className="text-xs text-blue-600 mt-1">This prevents re-contamination of clean surfaces and is the single most important quality differentiator from untrained cleaners.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {phase2.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold mb-2 text-blue-600">{s.step}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{s.action}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Phase 3 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: "#7c3aed" }}>3</span>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>Phase 3 — Wet Cleaning Phase (Room by Room)</h2>
          </div>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead style={{ background: "#7c3aed" }}>
                <tr>
                  {["Room / Zone", "Cleaning Method", "Chemicals Used"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-white font-semibold text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {phase3.map((row, i) => (
                  <tr key={row.zone} style={{ background: i % 2 === 0 ? "white" : "#faf8ff" }}>
                    <td className="px-4 py-3 font-medium text-gray-800 text-xs whitespace-nowrap">{row.zone}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.method}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.chemical}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Phase 4 */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm" style={{ background: "#d4a017" }}>4</span>
            <h2 className="text-2xl font-bold" style={{ color: "#1a1a2e" }}>Phase 4 — Finishing & Inspection</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {phase4.map((s) => (
              <div key={s.step} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="text-2xl font-bold mb-2" style={{ color: "#d4a017" }}>{s.step}</div>
                <div className="font-semibold text-gray-800 text-sm mb-1">{s.action}</div>
                <div className="text-gray-500 text-xs leading-relaxed">{s.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Machines */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>Machinery & Equipment</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {machines.map((m) => (
              <div key={m.name} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-5 py-3 font-bold text-white" style={{ background: "var(--hero-green)" }}>{m.name}</div>
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div><span className="font-semibold text-gray-700">Use Area:</span> <span className="text-gray-500">{m.use}</span></div>
                    <div><span className="font-semibold text-gray-700">Power:</span> <span className="text-gray-500">{m.power}</span></div>
                  </div>
                  <div className="text-xs text-orange-700 bg-orange-50 border border-orange-200 rounded-lg px-3 py-2 mb-4">⚠️ {m.caution}</div>
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Operating Steps</h4>
                  <ol className="space-y-1">
                    {m.steps.map((step, i) => (
                      <li key={i} className="text-xs text-gray-600 flex gap-2">
                        <span className="text-green-600 font-bold">{i + 1}.</span> {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maintenance Schedule */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>Machinery Maintenance Schedule</h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead style={{ background: "var(--hero-green)" }}>
                <tr>
                  {["Machine", "Daily Maintenance", "Weekly Maintenance", "Monthly Maintenance"].map((h) => (
                    <th key={h} className="text-left px-4 py-3 text-white font-semibold text-xs uppercase tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {maintenance.map((row, i) => (
                  <tr key={row.machine} style={{ background: i % 2 === 0 ? "white" : "#f8fffe" }}>
                    <td className="px-4 py-3 font-medium text-gray-800 text-xs">{row.machine}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.daily}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.weekly}</td>
                    <td className="px-4 py-3 text-gray-600 text-xs">{row.monthly}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "var(--hero-green)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Confident in Our Process?</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>Every HeroS visit follows this exact protocol. Book now and see the difference.</p>
          <Link href="/book"
            className="inline-block px-10 py-4 rounded-full bg-white font-bold text-lg hover:bg-gray-100 transition-colors"
            style={{ color: "var(--hero-green)" }}>
            Book a Clean →
          </Link>
        </div>
      </section>
    </>
  );
}
