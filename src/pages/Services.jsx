export default function Services() {
  const data = [
    {
      title: "Development",
      blurb:
        "We lead site acquisition, entitlement, financing and project delivery for commercial developments across office, industrial and mixed-use.",
      bullets: [
        "Feasibility & underwriting",
        "Entitlements & permitting",
        "Capital stack & financing",
        "Owner’s representation",
      ],
    },
    {
      title: "Construction",
      blurb:
        "Schedule-driven, budget-controlled execution with transparent reporting and a safety-first culture.",
      bullets: [
        "Pre-construction & value engineering",
        "GC/CM delivery",
        "Schedule control",
        "QA/QC & safety",
      ],
    },
    {
      title: "Property Management",
      blurb:
        "Institutional-grade operations, lease administration and capital planning to protect and grow asset value.",
      bullets: ["Operating budgets", "Vendor management", "Tenant relations", "Capex planning"],
    },
    {
      title: "Leasing",
      blurb:
        "Targeted marketing and hands-on execution to maximize occupancy and tenant satisfaction.",
      bullets: ["Leasing strategy", "Broker relations", "Marketing collateral", "Tour management"],
    },
    {
      title: "Wireless Consulting",
      blurb:
        "Turnkey carrier partnerships and infrastructure deployments for rooftop and in-building solutions.",
      bullets: ["Site audits", "Carrier negotiations", "Design & install", "Optimization"],
    },
  ];

  return (
    <main>
      <section className="bg-primary text-white text-center py-20 px-6">
        <h1 className="font-display text-4xl font-bold mb-2">Our Service Capabilities</h1>
        <p className="text-gray-300">From concept to completion — we cover the full spectrum.</p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        {data.map((s) => (
          <div key={s.title} className="bg-white rounded-xl shadow p-8">
            <h2 className="font-display text-2xl font-semibold mb-2 text-text">{s.title}</h2>
            <p className="text-[#475569] mb-4">{s.blurb}</p>
            <ul className="list-disc pl-5 space-y-1 text-[#1B263B]">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <button className="mt-6 bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-[#25A699]">
              Speak with an expert
            </button>
          </div>
        ))}
      </section>
    </main>
  );
}

