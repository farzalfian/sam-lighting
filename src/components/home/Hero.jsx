'use client';

import Image from 'next/image';
import { FaWhatsapp, FaPlay, FaStar } from 'react-icons/fa';
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
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black z-10" />
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-500" />
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
          className="flex justify-center pt-8 px-4"
        >
          <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 backdrop-blur-sm border border-yellow-400/30 rounded-full px-4 py-2">
            <FaStar className="text-yellow-400 text-sm" />
            <span className="text-yellow-400 text-xs sm:text-sm font-semibold">TRUSTED PROFESSIONAL SERVICE</span>
            <FaStar className="text-yellow-400 text-sm" />
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
              hidden: {},
            }}
            className="text-center max-w-5xl mx-auto"
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
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight tracking-tight">
                <span className="block mb-2">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                    SAM-LIGHTING
                  </span>
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-300">
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
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-medium mb-8 max-w-3xl mx-auto leading-relaxed px-4"
            >
              Transformasi acara Anda dengan teknologi audio visual terdepan. 
              <span className="text-yellow-400 font-semibold"> Profesional, berkualitas, dan terpercaya.</span>
            </motion.p>

            {/* Features Grid */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto px-4"
            >
              {[
                { icon: '🎵', text: 'Premium Sound' },
                { icon: '💡', text: 'Professional Lighting' },
                { icon: '⚡', text: '24/7 Support' }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <div className="text-white font-medium text-sm">{item.text}</div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4"
            >
              {/* Main CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-4 px-8 rounded-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/25 flex items-center gap-3 text-lg min-w-[280px] justify-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <FaWhatsapp className="text-2xl relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">KONSULTASI GRATIS</span>
              </a>

              {/* Secondary CTA */}
              {/* <button className="group flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-2xl hover:bg-white/20 transition-all duration-300 min-w-[240px] justify-center">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all duration-300">
                  <FaPlay className="text-sm ml-1" />
                </div>
                <span>LIHAT PORTFOLIO</span>
              </button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats/Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pb-8 px-4"
        >
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              {[
                { number: '500+', label: 'Acara Sukses' },
                { number: '100+', label: 'Client Puas' },
                { number: '24/7', label: 'Support' },
                { number: '5★', label: 'Rating' }
              ].map((stat, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 hover:bg-white/10 transition-all duration-300">
                  <div className="text-xl sm:text-2xl font-bold text-yellow-400 mb-1">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0] 
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/4 left-[10%] w-2 h-2 bg-yellow-400 rounded-full opacity-60"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, -5, 0] 
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2 
          }}
          className="absolute top-1/3 right-[15%] w-3 h-3 bg-purple-400 rounded-full opacity-40"
        />
        <motion.div
          animate={{ 
            y: [0, -25, 0],
            rotate: [0, 10, 0] 
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4 
          }}
          className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50"
        />
      </div>
    </div>
  );
}