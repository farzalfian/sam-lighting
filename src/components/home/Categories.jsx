import Link from 'next/link';
import Image from 'next/image';

export default function Categories() {
  const categories = [
    {
      id: 'lighting',
      name: 'LIGHTING EQUIPMENT',
      image: '/images/hero-background.jpg',
      url: '/products/lighting'
    },
    {
      id: 'sound',
      name: 'SOUND SYSTEM',
      image: '/images/sound.jpg',
      url: '/products/sound'
    },
    {
      id: 'packages',
      name: 'PACKAGES',
      image: '/images/packages.jpg',
      url: '/products/packages'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link href={category.url} key={category.id}>
              <div className="relative h-72 overflow-hidden group shadow-2xl rounded-lg transform transition-transform hover:scale-105">
                <Image 
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110 rounded-t-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-6">
                  <div className="flex items-center">
                    <h3 className="text-lg md:text-xl text-gray-200 font-bold drop-shadow-xl">
                      {category.name}
                    </h3>
                    <div className="ml-auto w-12 h-12 bg-yellow-500 flex items-center justify-center shadow-lg rounded-full transform transition-transform hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
