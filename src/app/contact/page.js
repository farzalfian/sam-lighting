export default function ContactUsPage() {
    const whatsappNumber = "6281316640961"; // Replace with your WhatsApp number
    const whatsappMessage = encodeURIComponent(
      `Halo SAM-LIGHTING, saya ingin melakukan pemesanan. Berikut adalah informasi saya: 
      \n- Nama: 
      \n- Acara: 
      \n- Tanggal Acara: 
      \n- Alat yang ingin disewa: 
      \nMohon informasi lebih lanjut. Terima kasih!`
    );
  
    return (
      <main className="bg-gradient-to-b from-gray-900 to-black py-12">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="relative h-64 mb-12 rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-center justify-center">
              <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-lg">
                CONTACT US
              </h1>
            </div>
          </div>
  
          {/* Information Section */}
          <div className="bg-gray-800 p-6 rounded-lg shadow-md text-gray-300">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">Hubungi Kami</h2>
            <p className="leading-relaxed mb-6">
              Jika Anda memiliki pertanyaan atau ingin memesan peralatan, hubungi kami melalui WhatsApp. Kami akan membantu kebutuhan Anda untuk acara yang sempurna.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full text-center shadow-lg transition-transform transform hover:scale-105"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>
      </main>
    );
  }
  