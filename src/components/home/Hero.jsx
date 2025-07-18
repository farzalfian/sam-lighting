'use client';

import Image from 'next/image';
import { FaWhatsapp } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  const whatsappNumber = '628136640961';
  const whatsappMessage = encodeURIComponent(
    `Halo SAM-LIGHTING, saya tertarik untuk memanfaatkan promo spesial. Berikut adalah informasi saya:\n- Nama: [Isi Nama Anda]\n- Acara: [Jenis Acara]\n- Tanggal Acara: [Tanggal Acara]\n- Alat yang ingin dipesan: [Nama Alat]\nMohon informasi lebih lanjut. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative h-[90vh] bg-gradient-to-b from-black via-gray-900 to-gray-800 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background2.jpg"
          alt="Lighting and Sound System"
          fill
          className="object-cover brightness-75 transition-transform duration-700 hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {},
        }}
        className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6"
      >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-yellow-400 drop-shadow-lg tracking-wide mb-4"
        >
          <Typewriter
            words={[
              'LIGHTING SYSTEM & SOUND',
              'SAM-LIGHTING PRO SERVICE',
              'ACARA ANDA LEBIH MERIAH!',
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.h1>

        <motion.p
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 font-medium mb-6 max-w-2xl"
        >
          Sewa peralatan lighting dan sound system berkualitas untuk acara Anda — tampil maksimal dan profesional.
        </motion.p>

        <motion.a
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
          transition={{ duration: 0.6 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 hover:scale-105 hover:bg-yellow-300"
        >
          <FaWhatsapp className="text-2xl" />
          PESAN SEKARANG
        </motion.a>
      </motion.div>
    </div>
  );
}
