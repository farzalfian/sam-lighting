import Image from 'next/image';

export default function Hero() {
  const whatsappNumber = "6281316640961"; // Replace with your actual WhatsApp number
  const whatsappMessage = encodeURIComponent(
    `Halo SAM-LIGHTING, saya tertarik untuk memanfaatkan promo spesial. Berikut adalah informasi saya:
    \n- Nama: [Isi Nama Anda]
    \n- Acara: [Jenis Acara]
    \n- Tanggal Acara: [Tanggal Acara]
    \n- Alat yang ingin dipesan: [Nama Alat]
    \nMohon informasi lebih lanjut. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return (
    <div className="relative h-[80vh] bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Lighting and Sound System"
          className="w-full h-full object-cover brightness-75 transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide">
          LIGHTING SYSTEM & SOUND
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mt-4">
          Sewa peralatan lighting dan sound system berkualitas untuk acara Anda
        </p>
        <div className="flex justify-center mt-6">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transform transition-transform hover:scale-105"
      >
        PESAN SEKARANG
      </a>
        </div>
      </div>
    </div>
  );
}
