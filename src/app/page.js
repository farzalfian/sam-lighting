import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedProducts from '@/components/home/FeaturedProducts';

export default function Home() {
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
    <main>
      <Hero
        title="LIGHTING AND SOUND SYSTEM"
        subtitle="Sewa peralatan lighting dan sound system berkualitas untuk acara anda"
      />

      <Categories />

      <section className="bg-gray-800 py-10">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center drop-shadow-lg">PRODUK UNGGULAN</h2>
          <FeaturedProducts />
        </div>
      </section>

      <section className="py-10 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="w-full bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 p-8 flex flex-col md:flex-row items-center rounded-lg shadow-lg">
            <div className="mb-6 md:mb-0">
              <h2 className="text-4xl font-bold text-gray-100 mb-3 drop-shadow-md">PROMO SPESIAL</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Dapatkan diskon <span className="text-yellow-400 font-bold">20%</span> untuk pemesanan paket lighting dan sound selama bulan April!
              </p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-800 font-bold py-3 px-8 rounded-full shadow-md transform transition-transform hover:scale-105 ml-auto"
            >
              PESAN SEKARANG
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
