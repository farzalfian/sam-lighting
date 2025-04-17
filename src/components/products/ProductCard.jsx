import Image from 'next/image';

export default function ProductCard({ product }) {
  const { id, name, image, price, originalPrice, description } = product;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-xl overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative aspect-square bg-gray-700 rounded-t-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-contain p-4"
        />
      </div>
      <div className="p-6">
        <h3 className="text-white font-bold text-lg">{name}</h3>
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      </div>
    </div>
  );
}
