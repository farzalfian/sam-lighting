export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400">Lighting & Sound Rental</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Sewa lighting dan sound system terbaik untuk acara kamu! Kami memastikan kualitas dan keandalan 
            untuk memberikan pengalaman terbaik bagi kebutuhan event Anda.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigasi</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="/"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Beranda
              </a>
            </li>
            <li>
              <a
                href="#alat"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Daftar Alat
              </a>
            </li>
            <li>
              <a
                href="#kontak"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                Kontak
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h3>
          <p className="text-sm leading-relaxed">
            WhatsApp:{" "}
            <a
              href="https://wa.me/6281316640961"
              className="text-green-400 hover:underline transition-all duration-300"
            >
              +62 813-1664-0961
            </a>
          </p>
          <p className="text-sm mt-2 leading-relaxed">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/lighting_sam?igsh=MW9pMDk4Ynp5MG1seg=="
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              @lighting_sam
            </a>
          </p>
          <p className="text-sm mt-2 leading-relaxed">
            Email:{" "}
            <a
              href="mailto:info@rental-lighting.com"
              className="hover:text-yellow-400 transition-colors duration-300"
            >
              samlighting73@gmail.com
            </a>
          </p>
          <h3 className="text-lg font-semibold mt-6 mb-4 text-white">Lokasi Kami</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7510301972818!2d106.90292887650352!3d-6.327767996588177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8396093982897c20!2sSam%20Lighting!5e0!3m2!1sen!2sid!4v1687962438577!5m2!1sen!2sid"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Lighting & Sound Rental. All rights reserved.
      </div>
    </footer>
  );
}
