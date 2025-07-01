import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignUp = () => {
  const { t, i18n } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1200); // Simulate loading
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#232946] via-[#1a1a2e] to-[#393e46] relative overflow-hidden">
      {/* Animated overlay for subtle effect */}
      <div className="absolute inset-0 z-0 pointer-events-none animate-pulse" style={{background: 'radial-gradient(ellipse at 60% 40%, rgba(80,80,160,0.12) 0%, transparent 70%), radial-gradient(ellipse at 30% 70%, rgba(120,80,200,0.10) 0%, transparent 80%)'}} />
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center h-full relative z-10">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center py-12 md:py-0">
          <form onSubmit={handleSubmit} className="w-full max-w-md bg-white/95 border border-neutral-200 rounded-3xl shadow-2xl p-12 flex flex-col gap-7 animate-fade-in backdrop-blur-xl">
            {/* Language Switcher */}
            <div className="flex justify-end mb-2">
              <select
                value={i18n.language}
                onChange={e => changeLanguage(e.target.value)}
                className="px-3 py-1 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-700 text-sm focus:ring-2 focus:ring-purple-300 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="kk">Қазақша</option>
              </select>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/img/logo.png" alt="Logo" className="w-16 h-16 mb-2" />
              <h2 className="text-4xl font-extrabold text-neutral-900 mb-1 tracking-tight">{t('signup.title')}</h2>
              <p className="text-neutral-500 text-base">{t('signup.subtitle')}</p>
            </div>
            <input
              type="text"
              placeholder={t('signup.name')}
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
            />
            <input
              type="email"
              placeholder={t('signup.email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
            />
            <input
              type="password"
              placeholder={t('signup.password')}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
            />
            <input
              type="password"
              placeholder={t('signup.confirm')}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-purple-300 focus:outline-none transition-all duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-300 text-lg"
            >
              {loading ? t('signup.loading') : t('signup.button')}
            </button>
            <div className="text-center text-neutral-600 mt-2">
              {t('signup.have_account')}{' '}
              <Link to="/signin" className="text-purple-700 font-bold hover:underline">{t('signup.signin_link')}</Link>
            </div>
          </form>
        </div>
        {/* Right: Illustration or image */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <img src="/img/college/img2.jpeg" alt="Sign up illustration" className="rounded-3xl shadow-2xl w-4/5 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignUp; 