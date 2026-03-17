import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WheelQ Tours & Car Hire | Car Hire Nairobi, JKIA, Mombasa',
  description: 'Self-drive & chauffeur car hire Nairobi • JKIA airport pickup • Mombasa. Rates from KES 3,500. Leasing & Premium GPS available. WhatsApp +254 724 430 674',
  keywords: ['car hire Nairobi', 'car rental JKIA', 'car hire Mombasa', 'self drive Kenya', 'Prado hire Nairobi', 'WheelQ Tours'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white font-sans">
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-black/90 backdrop-blur z-50 py-4">
          <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
            <h1 className="text-3xl font-bold text-yellow-400">WheelQ</h1>
            <div className="flex gap-8 text-lg">
              <a href="/" className="hover:text-yellow-400">Home</a>
              <a href="/nairobi" className="hover:text-yellow-400">Nairobi</a>
              <a href="/jkia" className="hover:text-yellow-400">JKIA Airport</a>
              <a href="/mombasa" className="hover:text-yellow-400">Mombasa</a>
            </div>
            <a 
              href="https://wa.me/254724430674?text=Hi%20WheelQ%2C%20I%20want%20to%20book%20a%20car" 
              className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-full font-bold text-lg"
            >
              WhatsApp Now
            </a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="bg-black py-12 text-center mt-20">
          <p className="text-2xl font-bold">WheelQ Tours & Car Hire</p>
          <p className="mt-3 text-xl">+254 724 430 674 • Free delivery to hotels, homes & offices</p>
          <p className="mt-8 text-sm">Self Drive • Chauffeur • Car Leasing • Premium GPS Tracking System</p>
        </footer>

        {/* Google Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRental",
            "name": "WheelQ Tours & Car Hire",
            "address": { "@type": "PostalAddress", "addressCountry": "KE", "addressLocality": "Nairobi" },
            "telephone": "+254724430674",
            "url": "https://wheelq-carhire.vercel.app",
            "priceRange": "KES 3500-30000"
          })
        }} />
      </body>
    </html>
  );
}
