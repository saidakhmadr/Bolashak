import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SignIn = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setTimeout(() => {
      setLoading(false);
      if (email === 'admin@gmail.com' && password === 'admin') {
        navigate('/admin-panel');
      } else {
        setError(t('signin.invalid_credentials') || 'Invalid credentials');
      }
    }, 1200); // Simulate loading
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
                className="px-3 py-1 rounded-lg border border-neutral-300 bg-neutral-50 text-neutral-700 text-sm focus:ring-2 focus:ring-blue-300 focus:outline-none"
              >
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="kk">Қазақша</option>
              </select>
            </div>
            <div className="flex flex-col items-center mb-2">
              <img src="/img/logo.png" alt="Logo" className="w-16 h-16 mb-2" />
              <h2 className="text-4xl font-extrabold text-neutral-900 mb-1 tracking-tight">{t('signin.title')}</h2>
              <p className="text-neutral-500 text-base">{t('signin.subtitle')}</p>
            </div>
            <input
              type="email"
              placeholder={t('signin.email')}
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            />
            <input
              type="password"
              placeholder={t('signin.password')}
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="px-5 py-3 rounded-xl bg-neutral-50 border border-neutral-300 text-neutral-900 font-medium shadow-sm focus:ring-2 focus:ring-blue-300 focus:outline-none transition-all duration-300"
            />
            {error && <div className="text-red-600 text-center text-sm">{error}</div>}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 text-lg"
            >
              {loading ? t('signin.loading') : t('signin.button')}
            </button>
            <div className="text-center text-neutral-600 mt-2">
              {t('signin.no_account')}{' '}
              <Link to="/signup" className="text-blue-700 font-bold hover:underline">{t('signin.signup_link')}</Link>
            </div>
          </form>
        </div>
        {/* Right: Illustration or image */}
        <div className="hidden md:flex w-1/2 h-full items-center justify-center">
          <img src="/img/college/img1.jpeg" alt="Sign in illustration" className="rounded-3xl shadow-2xl w-4/5 h-auto object-cover" />
        </div>
      </div>
    </div>
  );
};

export default SignIn; 