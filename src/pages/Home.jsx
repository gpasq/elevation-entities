import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="text-text bg-neutral">
      {/* Hero */}
      <section className="bg-primary text-white text-center py-32 px-6">
        <h1 className="font-display text-5xl font-bold mb-4">
          Elevating Commercial Real Estate Through Integrity & Expertise
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Development • Construction • Property Management • Leasing • Wireless Consulting
        </p>
        <Link
          to="/services"
          className="bg-accent hover:bg-[#25A699] text-white font-semibold py-3 px-6 rounded-full"
        >
          Explore Our Services
        </Link>
      </section>

      {/* Services grid */}
      <section className="py-20 max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-display text-3xl font-semibold mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Development",
              desc: "Site acquisition, entitlement, financing, and delivery for commercial projects.",
            },
            {
              title: "Construction",
              desc: "Budget-controlled, schedule-driven construction management and execution.",
            },
            {
              title: "Property Management",
              desc: "Operations, capital planning, and lease administration for managed assets.",
            },
            {
              title: "Leasing",
              desc: "Maximize occupancy through targeted marketing and leasing strategy.",
            },
            {
              title: "Wireless Consulting",
              desc: "Turnkey wireless infrastructure for carriers and property owners.",
            },
          ].map((s) => (
            <div key={s.title} className="bg-white shadow-lg hover:shadow-2xl p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-[#555]">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="bg-white py-20 text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-3xl font-semibold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-md">
                <img
                  src={`https://source.unsplash.com/random/800x600?building,${i}`}
                  alt={`Project ${i}`}
                  className="object-cover w-full h-64"
                />
                <div className="p-4 text-left">
                  <h3 className="font-semibold text-lg">Project {i}</h3>
                  <p className="text-sm text-gray-600">Commercial Development</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="bg-accent text-white py-20 text-center">
        <h2 className="font-display text-3xl font-semibold mb-6">Let’s Talk</h2>
        <p className="text-lg mb-10">
          Ready to elevate your next project? Reach out — we’d love to hear from you.
        </p>
        <form className="max-w-lg mx-auto space-y-4 text-left">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-lg px-4 py-3 text-text focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-lg px-4 py-3 text-text focus:outline-none"
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full rounded-lg px-4 py-3 text-text focus:outline-none"
          ></textarea>
          <button
            type="submit"
            className="bg-white text-text font-semibold px-8 py-3 rounded-full hover:bg-neutral"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

