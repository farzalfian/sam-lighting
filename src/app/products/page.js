import Image from 'next/image';
import Link from 'next/link';

export default function ProductsPage() {
  const categories = [
    {
      id: 'lighting',
      name: 'Lighting Equipment',
      description: 'Explore high-quality lights for your events, from stage lighting to decorative effects.',
      image: '/images/hero-background.jpg',
      link: '/products/lighting',
    },
    {
      id: 'sound',
      name: 'Sound System',
      description: 'Premium sound systems for clear, impactful audio at any event.',
      image: '/images/sound.jpg',
      link: '/products/sound',
    },
    {
      id: 'effects',
      name: 'Special Effects',
      description: 'Create stunning atmospheres with smoke machines, strobes, and more.',
      image: '/images/products/effects/category.jpg',
      link: '/products/effects',
    },
    {
      id: 'packages',
      name: 'Packages',
      description: 'Pre-built bundles designed for a hassle-free setup and excellent results.',
      image: '/images/packages.jpg',
      link: '/products/packages',
    },
  ];

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black py-12">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="relative h-[60vh] md:h-[80vh] shadow-xl rounded-lg overflow-hidden mb-12">
          <Image
            src="/images/hero-background2.jpg"
            alt="Our Products"
            fill
            className="object-cover brightness-75 transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center bg-gradient-to-b from-transparent to-black/70">
            <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg">
              OUR PRODUCTS
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mt-4">
              Discover the best lighting and sound solutions for your unforgettable events.
            </p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {categories.map((category) => (
            <div key={category.id} className="group rounded-lg shadow-lg overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700 hover:shadow-xl hover:scale-105 transition-transform">
              <div className="relative h-40 md:h-48 lg:h-56">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-yellow-400 font-bold text-xl group-hover:text-yellow-300 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {category.description}
                </p>
                <Link href={category.link}>
                  <button className="mt-4 py-2 px-4 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-md hover:scale-105 transition-transform">
                    View Products
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 rounded-lg shadow-xl text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Plan Your Perfect Event Today</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Let us help you create unforgettable moments with the best lighting and sound systems.
          </p>
          <Link href="/contact">
            <button className="py-3 px-8 bg-yellow-500 text-gray-900 font-bold rounded-full shadow-lg hover:scale-105 transition-transform">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
