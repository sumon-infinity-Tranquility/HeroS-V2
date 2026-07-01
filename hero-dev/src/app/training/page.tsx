import Link from "next/link";

const eligibility = {
  minimum: [
    "At least 6 months of HeroS or equivalent cleaning service experience",
    "SSC or equivalent educational qualification (Bangladesh certificate)",
    "Able to read and write in Bengali and communicate effectively",
    "Physically capable and experienced in team-based work",
  ],
  professional: [
    "Knowledge of cleaning methods and chemicals",
    "Proficiency in machinery operation",
    "Schedule and reporting management",
    "Quality control inspection",
    "Enforcement of safety rules",
  ],
  personal: [
    "Honest and trustworthy behaviour",
    "Respectful treatment of team members",
    "Polite and professional communication with clients",
    "Ability to remain calm under pressure",
    "Ability to motivate and unify the team",
  ],
};

const modules = [
  {
    id: "M-1",
    title: "HeroS Introduction & Company Values",
    objective: "Understand company mission, standards, and service benchmarks",
    duration: "3 hours",
    color: "#1a7a4a",
    content: [
      "History and mission of HeroS and Kampus Vertical",
      "Our service types: residential, commercial, industrial, and educational",
      "Company code of conduct and uniform policy",
      "Service standards: client satisfaction is the highest priority",
    ],
    motto: "Clean Environment, Healthy Life",
  },
  {
    id: "M-2",
    title: "Cleaning Methods & Chemical Use",
    objective: "Safely handle all cleaning processes and chemicals",
    duration: "6 hours",
    color: "#d97706",
    content: [
      "Correct dilution ratios for all approved chemicals",
      "Which chemicals may/may not be used on which surfaces",
      "Ensuring PPE is worn at all times",
      "First aid in emergency situations",
      "Chemical storage and waste management",
    ],
    motto: null,
  },
  {
    id: "M-3",
    title: "Machinery Operation & Maintenance",
    objective: "Correctly operate all types of cleaning machinery",
    duration: "5 hours",
    color: "#2563eb",
    content: [
      "Vacuum cleaner, pressure washer, floor scrubber, steam cleaner",
      "Correct start-up and shut-down procedures for each machine",
      "Overseeing daily maintenance",
      "Reporting faulty or broken machinery",
    ],
    motto: null,
  },
  {
    id: "M-4",
    title: "Team Management & Leadership",
    objective: "Manage, motivate, and evaluate team members",
    duration: "5 hours",
    color: "#7c3aed",
    content: [
      "Brief the team before work each day — state area, time, and objectives",
      "Assign tasks based on each member's skills and experience",
      "Inspect work in progress and identify issues early",
      "Evaluate team performance after work and provide feedback",
      "Submit a report to management at end of day",
    ],
    motto: null,
  },
  {
    id: "M-5",
    title: "Client Relations & Quality Control",
    objective: "Maintain professional client relationships",
    duration: "5 hours",
    color: "#dc2626",
    content: [
      "Always begin conversation with a polite greeting and introduction",
      "Listen to client requests carefully before starting work",
      "Maintain professionalism at all times while in the client's home",
      "Handle complaints calmly and report to management immediately",
      "Quality checklist submission after every visit",
    ],
    motto: null,
  },
];

const respectRules = [
  "Never reprimand someone in front of others — counsel them privately",
  "Be respectful regarding religious and social matters",
  "Ensure daily prayer times and breaks are honoured",
  "Ensure separate rest facilities are available for female workers",
  "Praise good work — motivation increases productivity",
];

const careerPath = [
  { stage: "Entry", title: "HeroS Cleaning Technician", trigger: "Kampus cleaning course graduate", salary: "BDT 12,000–16,000/mo" },
  { stage: "Level 2", title: "Senior Technician", trigger: "6 months + positive client ratings", salary: "BDT 16,000–20,000/mo" },
  { stage: "Level 3", title: "Peer Leader", trigger: "Peer Leadership cert + 3 trained juniors", salary: "BDT 22,000–28,000/mo" },
  { stage: "Level 4", title: "Area Team Lead", trigger: "Managing 3+ Peer Leader teams in a zone", salary: "BDT 30,000–38,000/mo" },
  { stage: "Level 5", title: "HeroS Operations Manager", trigger: "Full zone management + client acquisition", salary: "BDT 40,000–55,000/mo" },
];

export default function Training() {
  return (
    <>
      {/* Header */}
      <section className="py-16 text-white" style={{ background: "linear-gradient(135deg, #1a1a2e, #1a7a4a)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#86efac" }}>HeroS Supervisor Training Programme</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Supervisor Training Guide</h1>
          <p className="text-lg max-w-2xl" style={{ color: "rgba(255,255,255,0.75)" }}>
            A 3-day, 24-hour certification programme for HeroS Peer Leaders — Bangladesh Edition.
            No one is appointed to a supervisory position without completing this training.
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-xl px-4 py-3">
              <div className="text-2xl font-bold text-white">3 Days</div>
              <div className="text-xs text-white/60">Total Duration</div>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3">
              <div className="text-2xl font-bold text-white">24 Hours</div>
              <div className="text-xs text-white/60">Training Hours</div>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-3">
              <div className="text-2xl font-bold text-white">5 Modules</div>
              <div className="text-xs text-white/60">Core Curriculum</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Eligibility */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>Eligibility & Qualities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Minimum Requirements</h3>
              <ul className="space-y-2">
                {eligibility.minimum.map((e) => (
                  <li key={e} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-green-500 mt-0.5">✓</span> {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Professional Skills</h3>
              <ul className="space-y-2">
                {eligibility.professional.map((e) => (
                  <li key={e} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-blue-500 mt-0.5">✓</span> {e}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase tracking-wide">Personal Skills</h3>
              <ul className="space-y-2">
                {eligibility.personal.map((e) => (
                  <li key={e} className="text-sm text-gray-600 flex gap-2">
                    <span className="text-purple-500 mt-0.5">✓</span> {e}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modules */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>Training Curriculum — 5 Modules</h2>
          <div className="space-y-5">
            {modules.map((m) => (
              <div key={m.id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="flex items-center gap-4 px-5 py-4" style={{ borderLeft: `4px solid ${m.color}` }}>
                  <div className="text-2xl font-bold w-14 shrink-0" style={{ color: m.color }}>{m.id}</div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-800">{m.title}</div>
                    <div className="text-sm text-gray-500">{m.objective}</div>
                  </div>
                  <div className="text-sm font-semibold shrink-0 px-3 py-1 rounded-full text-white" style={{ background: m.color }}>
                    {m.duration}
                  </div>
                </div>
                <div className="px-5 pb-4 pt-2 pl-24">
                  <ul className="space-y-1.5">
                    {m.content.map((c) => (
                      <li key={c} className="text-sm text-gray-600 flex gap-2">
                        <span style={{ color: m.color }}>→</span> {c}
                      </li>
                    ))}
                  </ul>
                  {m.motto && (
                    <div className="mt-3 text-sm font-semibold italic" style={{ color: m.color }}>
                      📌 HeroS Core Motto: &quot;{m.motto}&quot;
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Respect — Bangladesh Context */}
        <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm">
          <h2 className="text-xl font-bold mb-4" style={{ color: "#1a1a2e" }}>Treating Staff with Respect (Bangladesh Context)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {respectRules.map((r) => (
              <div key={r} className="flex gap-3 text-sm text-gray-600">
                <span className="text-green-500 mt-0.5 shrink-0">✓</span> {r}
              </div>
            ))}
          </div>
        </div>

        {/* Career Path */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: "#1a1a2e" }}>Peer Leader Career Path</h2>
          <div className="space-y-3">
            {careerPath.map((lvl, i) => (
              <div key={lvl.stage} className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                  style={{ background: `hsl(${140 + i * 20}, 60%, ${35 + i * 5}%)` }}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-gray-800">{lvl.title}</span>
                    <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">{lvl.stage}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-0.5">{lvl.trigger}</div>
                </div>
                <div className="text-sm font-bold shrink-0" style={{ color: "var(--hero-green)" }}>{lvl.salary}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <section className="py-16 text-white text-center" style={{ background: "var(--hero-green)" }}>
        <div className="max-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-3">Join the HeroS Team</h2>
          <p className="mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
            Are you a Kampus graduate ready to become a Peer Leader? Enquire today.
          </p>
          <Link href="/book"
            className="inline-block px-10 py-4 rounded-full bg-white font-bold text-lg hover:bg-gray-100 transition-colors"
            style={{ color: "var(--hero-green)" }}>
            Get in Touch →
          </Link>
        </div>
      </section>
    </>
  );
}
