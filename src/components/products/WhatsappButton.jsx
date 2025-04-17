export default function WhatsappButton({ product, className }) {
  const whatsappNumber = "6281316640961"; // Replace with your WhatsApp number
  const message = encodeURIComponent(
    `Halo SAM-LIGHTING, saya ingin melakukan pemesanan. Berikut adalah informasi saya:
    \n- Nama: [Isi Nama Anda]
    \n- Acara: [Jenis Acara]
    \n- Tanggal Acara: [Tanggal Acara]
    \n- Alat yang ingin disewa: ${product.name}
    \nMohon informasi lebih lanjut. Terima kasih!`
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-full shadow-lg transform transition-transform hover:scale-105 ${className}`}
    >
      PESAN SEKARANG
    </a>
  );
}
