"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Wrench, 
  User, 
  MessageCircle,
  CheckCircle,
  Clock,
  Zap,
  Star
} from "lucide-react";

export default function ContactUsPage() {
  const whatsappNumber = "6281316640961";
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    lokasi: "",
    alat: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('id-ID', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Validate form
  useEffect(() => {
    const isValid = Object.values(form).every(value => value.trim() !== "");
    setIsFormValid(isValid);
  }, [form]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateMessage = () => {
    return encodeURIComponent(
      `🎬 *BOOKING REQUEST - SAM-LIGHTING* 🎬\n\n` +
        `👤 *Nama:* ${form.nama}\n` +
        `📅 *Tanggal Acara:* ${form.tanggal}\n` +
        `📍 *Lokasi:* ${form.lokasi}\n` +
        `🎭 *Equipment yang dibutuhkan:*\n${form.alat}\n\n` +
        `⏰ *Waktu Inquiry:* ${currentTime} WIB\n\n` +
        `Mohon informasi lebih lanjut mengenai ketersediaan dan pricing. Terima kasih! 🙏`
    );
  };

  const waLink = `https://wa.me/${whatsappNumber}?text=${generateMessage()}`;

  const handleWhatsAppClick = () => {
    if (isFormValid) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const floatingElements = Array.from({ length: 6 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
      animate={{
        x: [0, Math.random() * 100 - 50],
        y: [0, Math.random() * 100 - 50],
        opacity: [0.3, 0.8, 0.3]
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        repeatType: "reverse"
      }}
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }}
    />
  ));

  return (
    <main className="bg-gradient-to-br from-gray-900 via-black to-gray-900 py-12 min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/3 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-80 mb-16 rounded-2xl shadow-2xl overflow-hidden group"
        >
          <Image
            src="/images/hero-background2.jpg"
            alt="Contact Background"
            fill
            className="object-cover brightness-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-yellow-900/30">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="mb-4"
              >
                <Zap className="w-16 h-16 text-yellow-400 mx-auto" />
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 drop-shadow-2xl mb-4"
              >
                CONTACT US
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-xl text-gray-300 max-w-2xl"
              >
                Siap mewujudkan acara impian Anda dengan peralatan lighting terbaik
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Clock, label: "Response Time", value: "< 30 Menit", color: "text-green-400" },
            { icon: Star, label: "Rating Client", value: "4.9/5.0", color: "text-yellow-400" },
            { icon: CheckCircle, label: "Project Selesai", value: "500+", color: "text-blue-400" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
              }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700/50 text-center"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
              <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-700/50">
              <h2 className="text-3xl font-bold text-yellow-400 mb-6 flex items-center">
                <MessageCircle className="w-8 h-8 mr-3" />
                Kenapa Pilih Kami?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: "Equipment Premium",
                    desc: "Peralatan lighting profesional dengan teknologi terkini"
                  },
                  {
                    icon: Clock,
                    title: "Service 24/7",
                    desc: "Tim support siap membantu kapan saja Anda membutuhkan"
                  },
                  {
                    icon: Star,
                    title: "Trusted Partner",
                    desc: "Dipercaya lebih dari 500+ client untuk berbagai jenis acara"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 10 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-700/30 transition-colors"
                  >
                    <div className="bg-yellow-400/20 p-3 rounded-lg">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-r from-yellow-400/10 to-yellow-600/10 p-6 rounded-2xl border border-yellow-400/20"
            >
              <h3 className="text-xl font-bold text-yellow-400 mb-4">Info Kontak</h3>
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <span>WhatsApp: +{whatsappNumber}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">
                Online {currentTime} WIB
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-gray-700/50"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-2">
              Request Quote
            </h2>
            <p className="text-gray-300 mb-8">
              Isi detail acara Anda dan dapatkan penawaran terbaik dalam hitungan menit
            </p>
            
            <form className="space-y-6">
              {[
                { name: "nama", icon: User, type: "text", label: "Nama Lengkap" },
                { name: "tanggal", icon: Calendar, type: "date", label: "Tanggal Acara" },
                { name: "lokasi", icon: MapPin, type: "text", label: "Lokasi Acara" }
              ].map((field) => (
                <motion.div
                  key={field.name}
                  whileFocus={{ scale: 1.02 }}
                  className="relative"
                >
                  <label className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                    <field.icon className="w-4 h-4 mr-2 text-yellow-400" />
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    className="w-full p-4 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder-gray-400"
                    required
                  />
                </motion.div>
              ))}
              
              <motion.div whileFocus={{ scale: 1.02 }}>
                <label className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                  <Wrench className="w-4 h-4 mr-2 text-yellow-400" />
                  Equipment yang Dibutuhkan
                </label>
                <textarea
                  name="alat"
                  value={form.alat}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contoh: LED Par Light, Moving Head, Smoke Machine, dll..."
                  className="w-full p-4 rounded-lg bg-gray-700/50 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all placeholder-gray-400 resize-none"
                  required
                />
              </motion.div>

              <motion.div
                whileHover={isFormValid ? { scale: 1.02 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
              >
                <a
                  href={isFormValid ? waLink : "#"}
                  target={isFormValid ? "_blank" : "_self"}
                  rel={isFormValid ? "noopener noreferrer" : ""}
                  onClick={handleWhatsAppClick}
                  className={`
                    block w-full py-4 px-6 rounded-xl text-center font-bold text-lg shadow-lg transition-all duration-300
                    ${isFormValid 
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-gray-900 hover:from-yellow-400 hover:to-yellow-500 hover:shadow-xl hover:shadow-yellow-400/25' 
                      : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                    }
                  `}
                >
                  <span className="flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isFormValid ? "Kirim ke WhatsApp" : "Lengkapi Form Terlebih Dahulu"}
                  </span>
                </a>
              </motion.div>
            </form>
          </motion.div>
        </div>

        {/* Success Animation */}
        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="fixed top-8 right-8 bg-green-500 text-white p-4 rounded-lg shadow-lg z-50"
            >
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Mengarahkan ke WhatsApp...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}