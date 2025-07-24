import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black text-white">
        <Navbar/>
        {children}
        <Analytics/>
        <Footer/>
      </body>
    </html>
  );
}