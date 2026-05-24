export default function JMGarage() {
  const gallery = [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans">
      {/* HERO */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-6">
          <p className="tracking-[0.4em] text-sm text-zinc-300 mb-4">
            SEOUL NIGHT DRIVE
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-4">
            JM GARAGE
          </h1>

          <p className="text-zinc-300 text-lg md:text-2xl mb-10">
            BMW G80 M3 Competition
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white text-black rounded-2xl font-semibold hover:scale-105 transition">
              Gallery
            </button>

            <button className="px-8 py-3 border border-white/30 rounded-2xl hover:bg-white/10 transition">
              Spec
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            ABOUT
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Built Not Bought
          </h2>

          <p className="text-zinc-400 leading-8 text-lg">
            OEM+ style focused G80 M3 build.
            <br />
            Black Sapphire Metallic.
            <br />
            Night drive culture.
            <br />
            Clean. Simple. Fast.
          </p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?q=80&w=1200&auto=format&fit=crop"
            className="rounded-3xl shadow-2xl object-cover h-[500px] w-full"
          />
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            GALLERY
          </p>

          <h2 className="text-5xl font-black">Night Drive Collection</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl bg-[#151515] group"
            >
              <img
                src={img}
                className="h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SPEC */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="mb-14">
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            VEHICLE SPEC
          </p>

          <h2 className="text-5xl font-black">G80 M3 Competition</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["MODEL", "BMW G80 M3 Competition xDrive"],
            ["COLOR", "Black Sapphire Metallic"],
            ["WHEEL", "RAYS TE37 Black Edition 19\""],
            ["TIRE", "Michelin Pilot Sport 4S"],
            ["SUSPENSION", "KW Variant 3"],
            ["EXHAUST", "Valvetronic"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="bg-[#151515] rounded-3xl p-8 border border-white/5"
            >
              <p className="text-zinc-500 text-sm tracking-[0.2em] mb-3">
                {title}
              </p>

              <h3 className="text-2xl font-bold">{value}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* DRIVE LOG */}
      <section className="py-28 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
            DRIVE LOG
          </p>

          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
            Seoul Rainy Night
          </h2>

          <p className="text-zinc-400 text-xl leading-9">
            Comfort Mode.
            <br />
            Harman Kardon playlist.
            <br />
            Empty roads and turbo sounds.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <p className="text-blue-400 tracking-[0.3em] text-sm mb-4">
          CONTACT
        </p>

        <h2 className="text-5xl font-black mb-12">Connect</h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {[
            "Instagram",
            "YouTube",
            "Open Chat",
            "Mail",
          ].map((item) => (
            <button
              key={item}
              className="px-8 py-4 rounded-2xl bg-[#151515] hover:bg-white hover:text-black transition text-lg"
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 py-10 text-center text-zinc-500 text-sm">
        © 2026 JM GARAGE · BMW G80 M3
      </footer>
    </div>
  );
}
