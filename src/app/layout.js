import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="bg-black text-white">
        <Navbar/>
        {children}
        <Analytics/>
        <SpeedInsights/>
        <Footer/>
      </body>
    </html>
  );
}