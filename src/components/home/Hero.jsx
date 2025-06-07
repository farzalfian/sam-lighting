import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  const whatsappNumber = '628136640961'; // Ganti dengan nomor WhatsApp kamu
  const whatsappMessage = encodeURIComponent(
    `Halo SAM-LIGHTING, saya tertarik untuk memanfaatkan promo spesial. Berikut adalah informasi saya:\n- Nama: [Isi Nama Anda]\n- Acara: [Jenis Acara]\n- Tanggal Acara: [Tanggal Acara]\n- Alat yang ingin dipesan: [Nama Alat]\nMohon informasi lebih lanjut. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background2.jpg"
          alt="Lighting and Sound System"
          className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 animate-fadeIn">
        <h1 className="text-5xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide mb-4">
          LIGHTING SYSTEM & SOUND
        </h1>
        <p className="text-lg md:text-xl text-gray-300 font-medium mb-6 max-w-2xl">
          Sewa peralatan lighting dan sound system berkualitas untuk acara Anda — tampil maksimal dan profesional.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-300"
        >
          <FaWhatsapp className="text-2xl" />
          PESAN SEKARANG
        </a>
      </div>
    </div>
  );
}
