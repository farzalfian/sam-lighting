"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  const whatsappNumber = "6281316640961";
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    lokasi: "",
    alat: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const generateMessage = () => {
    return encodeURIComponent(
      `Halo SAM-LIGHTING, saya ingin melakukan pemesanan. Berikut adalah informasi saya:\n\n` +
        `- Nama: ${form.nama}\n` +
        `- Tanggal acara: ${form.tanggal}\n` +
        `- Lokasi: ${form.lokasi}\n` +
        `- Alat yang ingin disewa: ${form.alat}\n\n` +
        `Mohon informasi lebih lanjut. Terima kasih!`
    );
  };

  const waLink = `https://wa.me/${whatsappNumber}?text=${generateMessage()}`;

  return (
    <main className="bg-gradient-to-b from-gray-900 to-black py-12 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 mb-12 rounded-lg shadow-xl overflow-hidden"
        >
          <Image
            src="/images/hero-background2.jpg"
            alt="Contact Background"
            fill
            className="object-cover brightness-75"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-yellow-400 drop-shadow-2xl">
              CONTACT US
            </h1>
          </div>
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300 max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">Hubungi Kami</h2>
          <p className="leading-relaxed mb-6">
            Isi formulir di bawah ini dan kami akan menghubungi Anda melalui WhatsApp.
          </p>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-1">Nama</label>
              <input
                type="text"
                name="nama"
                value={form.nama}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Tanggal Acara</label>
              <input
                type="date"
                name="tanggal"
                value={form.tanggal}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Lokasi</label>
              <input
                type="text"
                name="lokasi"
                value={form.lokasi}
                onChange={handleChange}
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">Alat yang ingin disewa</label>
              <textarea
                name="alat"
                value={form.alat}
                onChange={handleChange}
                rows="3"
                className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
                required
              ></textarea>
            </div>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full text-center shadow-lg transition-transform transform hover:scale-105"
            >
              Kirim via WhatsApp
            </a>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
