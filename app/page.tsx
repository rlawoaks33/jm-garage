export default function JMGarage() {
  const gallery = [
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=1400&auto=format&fit=crop",
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans">
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
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-28">
        <h2 className="text-5xl font-black mb-10">Gallery</h2>

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
    </div>
  );
}
