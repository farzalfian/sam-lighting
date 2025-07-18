'use client';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand Section */}
        <div>
          <div className="flex items-center space-x-3">
            <Image src="/images/logo.png" alt="SAM LIGHTING Logo" width={48} height={48} />
            <h2 className="text-2xl font-extrabold text-yellow-400">Lighting & Sound Rental</h2>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            Sewa lighting dan sound system terbaik untuk acara kamu! Kami menjamin kualitas dan keandalan
            untuk memberikan pengalaman terbaik bagi kebutuhan event Anda.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Navigasi</h3>
          <ul className="space-y-2">
            {[
              { label: 'Beranda', href: '/' },
              { label: 'Daftar Alat', href: '#alat' },
              { label: 'Kontak', href: '#kontak' },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact & Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Hubungi Kami</h3>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>
              WhatsApp:{' '}
              <a
                href="https://wa.me/6281316640961"
                className="text-green-400 hover:underline"
              >
                +62 813-1664-0961
              </a>
            </li>
            <li>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/lighting_sam?igsh=MW9pMDk4Ynp5MG1seg=="
                className="hover:text-yellow-400 transition"
              >
                @lighting_sam
              </a>
            </li>
            <li>
              Email:{' '}
              <a
                href="mailto:samlighting73@gmail.com"
                className="hover:text-yellow-400"
              >
                samlighting73@gmail.com
              </a>
            </li>
          </ul>

          <h3 className="text-lg font-semibold mt-6 mb-2 text-white">Lokasi Kami</h3>
          <div className="overflow-hidden rounded-lg shadow-lg border border-gray-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7510301972818!2d106.90292887650352!3d-6.327767996588177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8396093982897c20!2sSam%20Lighting!5e0!3m2!1sen!2sid!4v1687962438577!5m2!1sen!2sid"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="border-none"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Lighting & Sound Rental. All rights reserved.
      </div>
    </footer>
  );
}
