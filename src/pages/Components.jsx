export default function Components() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16 text-text">
      <h1 className="font-display text-4xl font-bold mb-10">Reusable Components</h1>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Buttons</h2>
        <div className="flex gap-4">
          <button className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-[#25A699]">
            Primary
          </button>
          <button className="border border-text text-text px-6 py-2 rounded-full font-semibold hover:bg-neutral">
            Secondary
          </button>
          <button className="text-text font-semibold hover:underline">Ghost</button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-display text-2xl mb-4">Cards</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <div key={i} className="bg-white shadow rounded-xl p-6">
              <img
                src={`https://source.unsplash.com/random/800x500?architecture,${i}`}
                alt="Example"
                className="rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">Component Card {i}</h3>
              <p className="text-gray-600 text-sm">
                Example reusable layout element demonstrating image + text block.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-display text-2xl mb-4">Navigation & Footer</h2>
        <p className="text-gray-600 text-sm">
          The navigation and footer components are already wired globally in <code>App.jsx</code>.
          They include logo placement, link structure, and brand colors.
        </p>
      </section>
    </main>
  );
}

