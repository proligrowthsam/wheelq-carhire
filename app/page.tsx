import Image from 'next/image';

export default function Home() {
  return (
    <div className="pt-20 min-h-screen bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">WheelQ Tours & Car Hire</h1>
        <p className="text-3xl mb-12">Nairobi • JKIA • Mombasa | Self-Drive & Chauffeur from KES 3,500</p>

        <Image 
          src="/rate-card.jpg" 
          alt="WheelQ Rate Card 2026" 
          width={1200} 
          height={800} 
          className="mx-auto rounded-3xl shadow-2xl border border-yellow-400/20" 
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-zinc-900 p-10 rounded-3xl">Self-Drive or Chauffeur</div>
          <div className="bg-zinc-900 p-10 rounded-3xl">Free Delivery Everywhere</div>
          <div className="bg-zinc-900 p-10 rounded-3xl">Car Leasing + GPS Tracking</div>
        </div>

        <a 
          href="https://wa.me/254724430674" 
          className="mt-20 inline-block bg-green-500 text-black font-bold text-3xl px-16 py-8 rounded-full hover:bg-green-400 transition"
        >
          Book Now on WhatsApp →
        </a>
      </div>
    </div>
  );
}
