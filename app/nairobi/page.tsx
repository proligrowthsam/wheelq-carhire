import Image from 'next/image';

export default function Nairobi() {
  return (
    <div className="pt-20 max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Car Hire Nairobi – Self Drive & Chauffeur</h1>
      
      <Image src="/rate-card.jpg" alt="WheelQ Rate Card" width={1200} height={800} className="mx-auto rounded-3xl mb-16" />

      <div className="prose prose-invert max-w-none text-lg">
        <p>Free delivery to Westlands, Karen, Kilimani, CBD, Ruiru, Thika & everywhere in Nairobi. Corporate accounts welcome. M-Pesa accepted.</p>
        
        <h2 className="text-3xl mt-12">Leasing & Extra Services</h2>
        <p>Lease your Harrier, CX-5, RAV4 or X-Trail → earn up to KES 100,000/month<br />
        Cars wanted: Axio, Axela, Premio, Fielder, Allion → up to KES 60,000/month<br />
        Small cars (Nissan Note etc.) → up to KES 40,000/month</p>
        
        <p className="font-bold mt-8">Premium GPS Tracking System – only KES 8,000<br />
        Real-time tracking • Engine cut-off • Tamper-proof • User-friendly app</p>
      </div>

      <div className="text-center mt-16">
        <a href="https://wa.me/254724430674" className="bg-green-500 text-black px-12 py-6 rounded-full text-2xl font-bold">WhatsApp +254 724 430 674</a>
      </div>
    </div>
  );
}
