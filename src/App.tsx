import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Phone, Send, ShieldCheck, Zap, Leaf, Building2, Home, Droplets, MapPin, Instagram, Menu, X, CheckCircle2, Award, Settings } from 'lucide-react';
import { translations } from './translations';
import logo from '/images/logo.png';

export default function App() {
  const [lang, setLang] = useState<'ru' | 'uz'>('ru');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'ru' ? 'uz' : 'ru');
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200 selection:text-blue-900">
      {/* Header */}
      <header
        className={`bg-white fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollTo('home')}>
            <img src={logo} alt="Power World Logo" className="h-10 w-auto object-contain" onError={(e) => {
              // Fallback if image doesn't exist in preview
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
            }} />
            <span className="hidden text-xl font-bold text-blue-600 tracking-tight">POWER WORLD</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('about')} className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>{t.nav.about}</button>
            <button onClick={() => scrollTo('why-us')} className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>{t.nav.whyUs}</button>
            <button onClick={() => scrollTo('products')} className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>{t.nav.products}</button>
            <button onClick={() => scrollTo('contacts')} className={`text-sm font-medium transition-colors hover:text-blue-600 ${isScrolled ? 'text-slate-700' : 'text-slate-800'}`}>{t.nav.contacts}</button>

            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-800 px-3 py-1.5 rounded-full text-sm font-bold transition-colors"
            >
              {lang === 'ru' ? 'UZ' : 'RU'}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-slate-100 text-slate-800 px-3 py-1.5 rounded-full text-sm font-bold"
            >
              {lang === 'ru' ? 'UZ' : 'RU'}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 p-1">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-4 flex flex-col gap-4"
          >
            <button onClick={() => scrollTo('about')} className="text-left text-slate-800 font-medium py-2 border-b border-slate-100">{t.nav.about}</button>
            <button onClick={() => scrollTo('why-us')} className="text-left text-slate-800 font-medium py-2 border-b border-slate-100">{t.nav.whyUs}</button>
            <button onClick={() => scrollTo('products')} className="text-left text-slate-800 font-medium py-2 border-b border-slate-100">{t.nav.products}</button>
            <button onClick={() => scrollTo('contacts')} className="text-left text-slate-800 font-medium py-2">{t.nav.contacts}</button>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.jpg"
            alt="Hero Background"
            className="w-full h-full object-cover object-center"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80';
            }}
          />
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
              <span className="text-sm font-medium tracking-wide uppercase">{t.hero.offer}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl border-l-4 border-blue-500 pl-4">
              {t.hero.offer}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+998701823688"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:-translate-y-1"
              >
                <Phone className="w-5 h-5" />
                {t.hero.call}
              </a>
              <a
                href="https://t.me/powerworld"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:-translate-y-1"
              >
                <Send className="w-5 h-5" />
                {t.hero.telegram}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-6">
                <CheckCircle2 className="w-4 h-4" />
                {t.about.founded}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.about.title}</h2>
              <div className="w-20 h-1.5 bg-blue-600 mb-8 rounded-full"></div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.about.desc}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Award className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.whyUs.items[0].title}</h3>
                  <p className="text-sm text-slate-600">{t.whyUs.items[0].desc}</p>
                </div>
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.whyUs.items[1].title}</h3>
                  <p className="text-sm text-slate-600">{t.whyUs.items[1].desc}</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <Settings className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="font-bold text-slate-900 mb-2">{t.whyUs.items[2].title}</h3>
                  <p className="text-sm text-slate-600">{t.whyUs.items[2].desc}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="why-us" className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.advantages.title}</h2>
            <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, ...t.advantages.items[0] },
              { icon: ShieldCheck, ...t.advantages.items[1] },
              { icon: Leaf, ...t.advantages.items[2] }
            ].map((adv, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-colors"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6">
                  <adv.icon className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold mb-4">{adv.title}</h3>
                <p className="text-slate-400 leading-relaxed">{adv.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.products.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { img: './images/0040.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/inverter-heat-pump-r32b0889b32-e169-4bf1-9548-f1a23e2cbe52.png', ...t.products.items[0] },
              { img: './images/mono.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[1] },
              { img: './images/mono.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[2] },
              { img: './images/comm.png', fallback: 'https://www.powerworldhp.com/uploads/38839/r290-commerical-heat-pump3fab2.jpg', ...t.products.items[3] },
              { img: './images/buffer.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[4] },
              { img: './images/buffer23.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[5] },
              { img: './images/tank.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[6] },
              { img: './images/fanww.jpg', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[7] },
              { img: './images/fanh.png', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[8] },
              { img: './images/fanv.jpg', fallback: 'https://www.powerworldhp.com/uploads/202338839/monobloc-commercial-heating-air-source-heat78713dee-f3aa-44ee-8266-8b0e684245bb.jpg', ...t.products.items[9] }
            ].map((prod, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { (e.target as HTMLImageElement).src = prod.fallback; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{prod.title}</h3>
                  <p className="text-slate-600">{prod.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Clients */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.target.title}</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Home, title: t.target.items[0] },
              { icon: Building2, title: t.target.items[1] },
              { icon: MapPin, title: t.target.items[2] },
              { icon: Droplets, title: t.target.items[3] }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-slate-50 border border-slate-100"
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 text-blue-600">
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-900">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{t.cta.title}</h2>
          <p className="text-xl text-blue-100 mb-10">{t.cta.offer}</p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+998701823688"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <Phone className="w-5 h-5" />
              {t.hero.call}
            </a>
            <a
              href="https://t.me/powerworld"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:-translate-y-1"
            >
              <Send className="w-5 h-5" />
              {t.hero.telegram}
            </a>
          </div>
        </div>
      </section>

      {/* Footer / Contacts */}
      <footer id="contacts" className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <img src="/images/logo.png" alt="Power World Logo" className="h-10 w-auto object-contain brightness-0 invert" onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }} />
              </div>
              <p className="text-slate-400 max-w-md mb-8">
                {t.about.desc}
              </p>
              <div className="flex items-center gap-4">
                <a href="https://t.me/powerworld" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-[#2AABEE] hover:text-white transition-colors">
                  <Send className="w-5 h-5" />
                </a>
                <a href="https://instagram.com/powerworld.uz" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.contacts.title}</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+998701823688" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                    <Phone className="w-5 h-5 text-blue-500" />
                    <span className="text-lg font-medium">+998 70 182 36 88</span>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/powerworld" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#2AABEE] transition-colors">
                    <Send className="w-5 h-5 text-[#2AABEE]" />
                    <span className="text-lg font-medium">@powerworld</span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/powerworld.uz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-pink-500 transition-colors">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-lg font-medium">@powerworld.uz</span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-bold text-lg mb-6">{t.contacts.address}</h3>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-1" />
                <span className="text-lg">{t.contacts.addressText}</span>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Power World Uzbekistan. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
