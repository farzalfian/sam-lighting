'use client';

import Image from 'next/image';
import { FaWhatsapp, FaStar } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';

export default function Hero() {
  const whatsappNumber = '6281316640961';
  const whatsappMessage = encodeURIComponent(
    `Halo SAM-LIGHTING, saya tertarik untuk memanfaatkan promo spesial. Berikut adalah informasi saya:\n- Nama: [Isi Nama Anda]\n- Acara: [Jenis Acara]\n- Tanggal Acara: [Tanggal Acara]\n- Alat yang ingin dipesan: [Nama Alat]\nMohon informasi lebih lanjut. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Simple animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black z-10" />
      
      {/* Subtle floating orbs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-purple-400 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-blue-400 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-background2.jpg"
          alt="Professional Lighting and Sound System"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center pt-8 px-4 mb-4 sm:mb-8"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-yellow-400 text-sm font-semibold whitespace-nowrap">TRUSTED PROFESSIONAL SERVICE</span>
            <FaStar className="text-yellow-400 text-sm" />
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="text-center max-w-5xl mx-auto w-full"
          >
            {/* Main Title */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="font-black text-white leading-tight tracking-tight">
                {/* Brand Name */}
                <span className="block mb-3">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                    SAM-LIGHTING
                  </span>
                </span>
                
                {/* Typewriter Text */}
                <span className="block font-bold text-gray-300">
                  <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl min-h-[2em] flex items-center justify-center">
                    <Typewriter
                      words={[
                        'PROFESSIONAL SOUND SYSTEM',
                        'SPECTACULAR LIGHTING EFFECTS',
                        'UNFORGETTABLE EVENT EXPERIENCE',
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={60}
                      deleteSpeed={40}
                      delaySpeed={2500}
                    />
                  </div>
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-medium max-w-3xl mx-auto leading-relaxed px-4">
                Transformasi acara Anda dengan teknologi audio visual terdepan. 
                <span className="text-yellow-400 font-semibold block sm:inline"> Profesional, berkualitas, dan terpercaya.</span>
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="mb-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
                {[
                  { icon: '🎵', text: 'Premium Sound', desc: 'Crystal Clear Audio' },
                  { icon: '💡', text: 'Professional Lighting', desc: 'Spectacular Effects' },
                  { icon: '⚡', text: '24/7 Support', desc: 'Always Ready' }
                ].map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 hover:bg-white/15 transition-all duration-300 hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-white font-semibold text-sm mb-1">{item.text}</div>
                    <div className="text-gray-400 text-xs">{item.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex justify-center px-4"
            >
              <motion.a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-yellow-400/25 flex items-center gap-3 text-lg hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaWhatsapp className="text-2xl relative z-10" />
                <span className="relative z-10 whitespace-nowrap">KONSULTASI GRATIS</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pb-8"
        >
          <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400 px-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Response Cepat</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '300ms' }}></div>
              <span>Konsultasi Gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '700ms' }}></div>
              <span>Garansi Kualitas</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Simple floating elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-yellow-400 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-purple-400 rounded-full"
        />
        <motion.div
          animate={{ 
            y: [0, -12, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4 
          }}
          className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full"
        />
      </div>
    </div>
  );
}