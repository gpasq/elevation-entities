export default function StyleGuide() {
  const colors = [
    { name: "Primary", hex: "#0D1B2A" },
    { name: "Secondary", hex: "#1F4E79" },
    { name: "Accent", hex: "#2EC4B6" },
    { name: "Neutral", hex: "#F4F7FA" },
    { name: "Text", hex: "#1B263B" },
  ];
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-text">
      <h1 className="font-display text-4xl font-bold mb-10">Style Guide</h1>

      <h2 className="font-display text-2xl mb-4">Colors</h2>
      <div className="grid sm:grid-cols-5 gap-6 mb-12">
        {colors.map((c) => (
          <div key={c.name} className="rounded-xl overflow-hidden border shadow">
            <div style={{ background: c.hex }} className="h-24"></div>
            <div className="p-3 text-sm">
              <div className="font-semibold">{c.name}</div>
              <div className="text-gray-500">{c.hex}</div>
            </div>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl mb-4">Typography</h2>
      <div className="space-y-3 mb-12">
        <div className="font-display text-4xl font-bold">Heading XL — Montserrat</div>
        <div className="font-display text-2xl font-semibold">Heading L — Montserrat</div>
        <div className="text-base font-sans">
          Body — Inter. Comfortable line-height and readable contrast.
        </div>
        <div className="text-sm text-gray-600">Caption — supporting notes and UI labels.</div>
      </div>

      <h2 className="font-display text-2xl mb-4">Buttons</h2>
      <div className="flex gap-3 mb-12">
        <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-[#25A699]">
          Primary
        </button>
        <button className="border border-text text-text px-6 py-2 rounded-full font-semibold hover:bg-neutral">
          Secondary
        </button>
        <button className="text-text font-semibold hover:underline">Ghost</button>
      </div>

      <h2 className="font-display text-2xl mb-4">Cards</h2>
      <div className="max-w-md bg-white rounded-xl shadow p-6">
        <h3 className="font-semibold mb-1">Card Title</h3>
        <p className="text-gray-600 text-sm">
          Use cards for service summaries, project teasers, or team bios. Keep copy concise.
        </p>
      </div>
    </main>
  );
}

