import Image from 'next/image';

export default function LightingPage() {
  const lightingProducts = [
    {
      id: 'parled1',
      name: 'PAR LED 54x3W RGBW',
      description: 'Lampu sorot warna dengan 54 LED, dapat berubah warna untuk berbagai kebutuhan event. Ideal untuk stage lighting dan dekorasi.',
      image: '/images/products/lighting/3.jpeg',
      category: 'lighting'
    },
    {
      id: 'moving1',
      name: 'Moving Head XM Lite 350',
      description: 'Moving head beam dengan efek cahaya bergerak untuk panggung dan event special. Menawarkan pergerakan cepat dan presisi tinggi.',
      image: '/images/products/lighting/1.jpeg',
      category: 'lighting'
    },
    {
      id: 'laser1',
      name: 'Laser Show RGB',
      description: 'Proyektor laser warna-warni untuk efek special pada event indoor. Menciptakan efek visual memukau dengan pola yang dapat diprogram.',
      image: '/images/products/lighting/laser.jpg',
      category: 'lighting'
    },
    {
      id: 'smoke1',
      name: 'Smoke Machine 1500W',
      description: 'Mesin asap dengan remote control, sempurna untuk efek kabut pada pertunjukan. Menghasilkan asap tebal dan merata.',
      image: '/images/products/lighting/smoke.jpg',
      category: 'lighting'
    },
    {
      id: 'strobe1',
      name: 'LED Strobe Light',
      description: 'Lampu strobe LED dengan efek flash kuat, cocok untuk menciptakan suasana dinamis dan energik pada event dance.',
      image: '/images/products/lighting/strobe.jpg',
      category: 'lighting'
    },
    {
      id: 'wash1',
      name: 'LED Wash 36x10W',
      description: 'Lampu wash LED dengan pencampuran warna RGBW sempurna, ideal untuk menerangi area panggung dengan warna yang kaya.',
      image: '/images/products/lighting/wash.jpg',
      category: 'lighting'
    },
    {
      id: 'LED',
      name: 'LED Wash 36x10W',
      description: 'Lampu wash LED dengan pencampuran warna RGBW sempurna, ideal untuk menerangi area panggung dengan warna yang kaya.',
      image: '/images/products/lighting/wash.jpg',
      category: 'lighting'
    }
  ];

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] mb-12 shadow-xl rounded-lg overflow-hidden">
          <Image
            src="/images/hero-background2.jpg"
            alt="Lighting Equipment"
            fill
            className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-0 bg-gradient-to-b from-transparent to-black/70">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-lg leading-tight">
              LIGHTING EQUIPMENT
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-4">
              Lighting berkualitas untuk mendukung setiap acara Anda
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg leading-relaxed mb-12">
          SAM-LIGHTING menyediakan berbagai peralatan lighting profesional untuk kebutuhan event Anda. 
          Dari stage lighting, effect lighting, hingga architectural lighting, kami memiliki solusi untuk
          setiap kebutuhan pencahayaan acara Anda. Semua peralatan kami terawat dengan baik dan siap digunakan
          untuk menghadirkan pengalaman visual yang mengesankan.
        </p>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {lightingProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
            >
              <div className="relative aspect-square bg-gray-900 rounded-t-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
