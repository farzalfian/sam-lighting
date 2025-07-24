"use client";

import { useState, useEffect, useMemo } from "react";
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
  Star,
  Send,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function ContactUsPage() {
  const whatsappNumber = "6281316640961";
  const [form, setForm] = useState({
    nama: "",
    tanggal: "",
    lokasi: "",
    alat: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  // Optimized time update - only update when component mounts
  useEffect(() => {
    const now = new Date();
    setCurrentTime(now.toLocaleTimeString('id-ID', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    }));
  }, []);

  // Memoized form validation
  const isFormValid = useMemo(() => {
    return Object.values(form).every(value => value.trim() !== "");
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
      setTimeout(() => setShowSuccess(false), 2500);
    }
  };

  // Simplified floating background elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-blue-400/40 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 left-1/4 w-1 h-1 bg-yellow-300/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-1 h-1 bg-green-400/30 rounded-full animate-ping" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-purple-400/20 rounded-full animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/5 to-orange-400/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/3 to-purple-400/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );

  const stats = [
    { icon: Clock, label: "Response Time", value: "< 30 Menit", color: "from-green-400 to-emerald-500", bg: "bg-green-400/10" },
    { icon: Star, label: "Rating Client", value: "4.9/5.0", color: "from-yellow-400 to-orange-500", bg: "bg-yellow-400/10" },
    { icon: CheckCircle, label: "Project Selesai", value: "500+", color: "from-blue-400 to-cyan-500", bg: "bg-blue-400/10" }
  ];

  const features = [
    {
      icon: Zap,
      title: "Equipment Premium",
      desc: "Peralatan lighting profesional dengan teknologi terkini dan kualitas broadcast"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      desc: "Tim technical support berpengalaman siap membantu setup hingga troubleshooting"
    },
    {
      icon: Star,
      title: "Trusted Partner",
      desc: "Dipercaya 500+ client mulai dari wedding, corporate, hingga concert skala besar"
    }
  ];

  const formFields = [
    { name: "nama", icon: User, type: "text", label: "Nama Lengkap", placeholder: "Masukkan nama lengkap Anda" },
    { name: "tanggal", icon: Calendar, type: "date", label: "Tanggal Acara", placeholder: "" },
    { name: "lokasi", icon: MapPin, type: "text", label: "Lokasi Acara", placeholder: "Contoh: Gedung Serbaguna Jakarta Selatan" }
  ];

  return (
    <main className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen relative overflow-hidden">
      <FloatingElements />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Enhanced Hero Section */}
        <div className="relative h-[400px] mb-16 rounded-3xl overflow-hidden group shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-800 to-black" />
          <div className="absolute inset-0 opacity-30" style={{ 
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23fbbf24' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
          }} />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <div className="mb-6 relative">
              <div className="absolute inset-0 animate-ping">
                <Zap className="w-20 h-20 text-yellow-400/30 mx-auto" />
              </div>
              <Zap className="w-20 h-20 text-yellow-400 mx-auto relative z-10" />
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-500 mb-4 tracking-tight">
              CONTACT US
            </h1>
            
            <div className="flex items-center text-xl text-gray-300 max-w-2xl mb-4">
              <Sparkles className="w-5 h-5 mr-2 text-yellow-400" />
              <span>Siap mewujudkan acara impian Anda dengan peralatan lighting terbaik</span>
            </div>
            
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`group ${stat.bg} backdrop-blur-sm p-6 rounded-2xl border border-white/10 text-center hover:scale-105 transition-all duration-300 hover:border-white/20 hover:shadow-lg`}
            >
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} p-3 mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              
              <h3 className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Enhanced Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 items-start">
          {/* Enhanced Left Column */}
          <div className="space-y-8">
            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-slate-800/80 to-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl mr-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Kenapa Pilih Kami?
                </h2>
              </div>
              
              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10"
                  >
                    <div className="bg-gradient-to-r from-yellow-400/20 to-orange-500/20 p-4 rounded-xl group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Contact Info */}
            <div className="bg-gradient-to-r from-yellow-400/10 via-orange-500/10 to-yellow-600/10 p-6 rounded-2xl border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-300">
              <h3 className="text-xl font-bold text-yellow-400 mb-4 flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                Info Kontak
              </h3>
              <div className="flex items-center text-gray-300 mb-2">
                <span className="font-medium">WhatsApp: +{whatsappNumber}</span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span>Online {currentTime} WIB</span>
              </div>
            </div>
          </div>

          {/* Enhanced Form */}
          <div className="bg-gradient-to-br from-slate-800/90 to-gray-900/90 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
            <div className="flex items-center mb-2">
              <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg mr-3">
                <Send className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Request Quote
              </h2>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Dapatkan penawaran <span className="text-yellow-400 font-semibold">eksklusif</span> dalam hitungan menit
            </p>
            
            <div className="space-y-6">
              {formFields.map((field) => (
                <div key={field.name} className="group">
                  <div className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                    <div className="p-1 bg-yellow-400/20 rounded mr-2">
                      <field.icon className="w-4 h-4 text-yellow-400" />
                    </div>
                    {field.label}
                  </div>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all placeholder-gray-500 hover:bg-white/10"
                  />
                </div>
              ))}
              
              <div className="group">
                <div className="flex items-center text-sm font-semibold text-gray-300 mb-3">
                  <div className="p-1 bg-yellow-400/20 rounded mr-2">
                    <Wrench className="w-4 h-4 text-yellow-400" />
                  </div>
                  Equipment yang Dibutuhkan
                </div>
                <textarea
                  name="alat"
                  value={form.alat}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contoh: LED Par Light 20pcs, Moving Head 8pcs, Smoke Machine, Truss System, dll..."
                  className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/50 transition-all placeholder-gray-500 resize-none hover:bg-white/10"
                />
              </div>

              <div className="pt-4">
                <a
                  href={isFormValid ? waLink : "#"}
                  target={isFormValid ? "_blank" : "_self"}
                  rel={isFormValid ? "noopener noreferrer" : ""}
                  onClick={handleWhatsAppClick}
                  className={`
                    group relative block w-full py-4 px-6 rounded-xl text-center font-bold text-lg transition-all duration-300 overflow-hidden
                    ${isFormValid 
                      ? 'bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-400 hover:to-orange-400 shadow-lg hover:shadow-yellow-400/25 hover:scale-105' 
                      : 'bg-gray-600/50 text-gray-400 cursor-not-allowed border border-gray-600/50'
                    }
                  `}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    {isFormValid ? "Kirim ke WhatsApp" : "Lengkapi Form Terlebih Dahulu"}
                    {isFormValid && <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  {isFormValid && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  )}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Success Notification */}
        {showSuccess && (
          <div className="fixed top-8 right-8 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-2xl z-50 border border-green-400/20 animate-bounce">
            <div className="flex items-center">
              <div className="p-2 bg-white/20 rounded-lg mr-3">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold">Berhasil!</div>
                <div className="text-sm opacity-90">Mengarahkan ke WhatsApp...</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}