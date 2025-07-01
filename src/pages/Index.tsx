import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Users, BookOpen, Trophy, Globe, ChevronDown, Award, Lightbulb, Heart, Star, MapPin, Calendar, GraduationCap, Microscope, Building } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  const featuredNews = [
    {
      image: "/img/college/img1.jpeg",
      title: "Болашақ колледжінің студенттері ұлттық марапаттарға ие болды",
      description: "Болашақ колледжінің студенттері ұлттық олимпиадаларда, зерттеулерде және спорттық жарыстарда жоғары нәтижелерге қол жеткізді.",
      date: "2024 жылғы 1 маусым",
      category: "Жетістіктер"
    },
    {
      image: "/img/college/img2.jpeg",
      title: "Болашақ колледжіндегі инновациялық зерттеулер",
      description: "Болашақ колледжінің оқытушылары мен студенттері ғылым мен технология саласында инновациялық зерттеулер жүргізуде.",
      date: "2024 жылғы 20 мамыр",
      category: "Зерттеу"
    },
    {
      image: "/img/college/img3.jpeg",
      title: "Кампус өмірі: Мәдениет және спорт",
      description: "Біздің жарқын кампус өмірімізге мәдени фестивальдер, спорттық іс-шаралар және студенттік бастамалар кіреді.",
      date: "2024 жылғы 10 мамыр",
      category: "Кампус өмірі"
    }
  ];

  // Add the video as the first slide in the hero section
  const heroSlides = [
    {
      type: 'video',
      src: '/img/final.mp4',
      alt: 'Bolashak College Campus Video',
    },
    ...featuredNews.map(news => ({
      type: 'image',
      src: news.image,
      alt: news.title,
    })),
  ];

  useEffect(() => {
    let timeout;
    const durations = [30000, 6000, 6000]; // ms for each slide
    timeout = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, durations[currentSlide]);
    return () => clearTimeout(timeout);
  }, [currentSlide, heroSlides.length]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Enhanced Parallax */}
      <div className="relative h-screen overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          >
            {slide.type === 'video' ? (
              <video
                src={slide.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                poster="/img/college/img1.jpeg"
              />
            ) : (
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat scale-100 transition-transform duration-2000"
                style={{ backgroundImage: `url(${slide.src})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/70" />
              </div>
            )}
          </div>
        ))}
        
        <div className="absolute inset-0 flex items-center justify-center text-center text-white">
          <div className="max-w-5xl mx-auto px-4 space-y-8">
            <div className="animate-fade-in">
              <span className="inline-block px-4 py-2 bg-red-600/80 text-sm font-helvetica font-semibold rounded-full mb-4 backdrop-blur-sm">
                Лидерство в будущем
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-georgia-bold mb-8 animate-scale-in leading-tight">
              Добро пожаловать в колледж Болашак!
            </h1>
            <p className="text-2xl md:text-3xl mb-12 animate-fade-in font-georgia leading-relaxed max-w-4xl mx-auto" 
               style={{ animationDelay: '0.3s' }}>
              Вдохновляем умы менять мир через инновации и открытия
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" 
                 style={{ animationDelay: '0.6s' }}>
              <Link
                to="/admissions"
                className="bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 font-helvetica text-lg"
              >
                Подать заявку
              </Link>
              <Link
                to="/news#campus-tour"
                className="border-2 border-white text-white hover:bg-white hover:text-red-700 px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 font-helvetica backdrop-blur-sm text-lg"
              >
                <Play className="w-6 h-6" />
                Тур по кампусу
              </Link>
            </div>
          </div>
        </div>

        {/* Enhanced Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-500 flex items-center justify-center shadow-md
                ${index === currentSlide ? 'bg-white border-red-700 scale-125 shadow-lg animate-pulse' : 'bg-white/50 border-white hover:bg-white/80'}
              `}
              style={{ outline: 'none' }}
            >
              <span className="sr-only">Go to slide {index + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="py-20 bg-gradient-to-r from-gray-50 to-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300">
                <Award className="w-8 h-8" />
              </div>
              <div className="text-2xl font-georgia-bold text-gray-900 mb-1">120+ студенческих наград</div>
              <div className="text-sm text-gray-600 font-georgia">За последние 3 года в олимпиадах, исследованиях и спорте</div>
            </div>
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300">
                <BookOpen className="w-8 h-8" />
              </div>
              <div className="text-2xl font-georgia-bold text-gray-900 mb-1">15 образовательных программ</div>
              <div className="text-sm text-gray-600 font-georgia">Современные специальности и направления</div>
            </div>
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-2xl font-georgia-bold text-gray-900 mb-1">2000+ выпускников</div>
              <div className="text-sm text-gray-600 font-georgia">Успешно окончили колледж Болашак</div>
            </div>
            <div
              className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl mb-4 group-hover:shadow-xl transition-all duration-300">
                <Star className="w-8 h-8" />
              </div>
              <div className="text-2xl font-georgia-bold text-gray-900 mb-1">25 лет опыта</div>
              <div className="text-sm text-gray-600 font-georgia">В сфере профессионального образования</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Campus Life Section */}
      <div className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-georgia-bold text-gray-900 mb-6 animate-fade-in">
              Жизнь в колледже Болашак
            </h2>
            <p className="text-2xl text-gray-600 animate-fade-in font-georgia max-w-3xl mx-auto leading-relaxed" 
               style={{ animationDelay: '0.2s' }}>
              Откройте для себя уникальный опыт колледжа Болашак: динамичная культура кампуса, современные условия и яркая студенческая жизнь
            </p>
          </div>
          
          <div className="space-y-24">
            <div
              className="flex flex-col lg:flex-row items-center gap-16 animate-fade-in"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-georgia-bold text-gray-900">Современная инфраструктура</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-georgia">Новые учебные корпуса, современные лаборатории, библиотека и коворкинг-зоны для комфортного обучения</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Учебные корпуса</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Лаборатории</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Библиотека и коворкинг</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/img/college/img4.jpeg"
                    alt="Современная инфраструктура"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col lg:flex-row-reverse items-center gap-16 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-georgia-bold text-gray-900">Активная студенческая жизнь</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-georgia">20+ кружков и клубов, волонтерские и творческие проекты, ежегодные фестивали и конкурсы</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Кружки и клубы</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Волонтерство и творчество</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Фестивали и конкурсы</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/img/college/img5.jpeg"
                    alt="Активная студенческая жизнь"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
            <div
              className="flex flex-col lg:flex-row items-center gap-16 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <div className="flex-1 space-y-8">
                <div className="space-y-6">
                  <h3 className="text-4xl font-georgia-bold text-gray-900">Поддержка и развитие</h3>
                  <p className="text-xl text-gray-600 leading-relaxed font-georgia">Центр карьеры, академическая поддержка, стажировки и практика на предприятиях</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Центр карьеры</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Академическая поддержка</span>
                  </div>
                  <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-gray-800 font-helvetica font-medium">Стажировки и практика</span>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src="/img/college/img2.jpeg"
                    alt="Поддержка и развитие"
                    className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Improved Stats Section */}
      <div 
        ref={statsRef}
        className="py-32 bg-red-700 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-800 to-red-600"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-georgia-bold mb-6">Болашак колледж в цифрах</h2>
            <p className="text-xl font-georgia opacity-90">Превосходство, измеряемое достижениями и влиянием</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div
              className={`text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                statsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.2s' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Users className="w-10 h-10" />
              </div>
              <div className="text-4xl font-georgia-bold mb-2">2,000+</div>
              <div className="text-lg font-helvetica font-semibold mb-2">Выпускников</div>
              <div className="text-sm opacity-80 font-georgia">Успешно окончили колледж</div>
            </div>
            <div
              className={`text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                statsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.4s' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <BookOpen className="w-10 h-10" />
              </div>
              <div className="text-4xl font-georgia-bold mb-2">15</div>
              <div className="text-lg font-helvetica font-semibold mb-2">Образовательных программ</div>
              <div className="text-sm opacity-80 font-georgia">Современные специальности</div>
            </div>
            <div
              className={`text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                statsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.6s' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Award className="w-10 h-10" />
              </div>
              <div className="text-4xl font-georgia-bold mb-2">120+</div>
              <div className="text-lg font-helvetica font-semibold mb-2">Студенческих наград</div>
              <div className="text-sm opacity-80 font-georgia">За последние 3 года</div>
            </div>
            <div
              className={`text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-500 hover:scale-105 ${
                statsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: '0.8s' }}
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                <Star className="w-10 h-10" />
              </div>
              <div className="text-4xl font-georgia-bold mb-2">25</div>
              <div className="text-lg font-helvetica font-semibold mb-2">Лет опыта</div>
              <div className="text-sm opacity-80 font-georgia">В сфере образования</div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced News Section */}
      <div className="py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-georgia-bold text-gray-900 mb-6 animate-fade-in">
              Последние открытия
            </h2>
            <p className="text-2xl text-gray-600 animate-fade-in font-georgia max-w-3xl mx-auto" 
               style={{ animationDelay: '0.2s' }}>
              Следите за новейшими исследованиями, новостями кампуса и достижениями сообщества
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {featuredNews.map((news, index) => (
              <article
                key={index}
                className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-red-600 text-white text-sm font-helvetica font-semibold rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4 font-helvetica">
                    <Calendar className="w-4 h-4" />
                    <span>{news.date}</span>
                  </div>
                  <h3 className="text-2xl font-georgia-bold text-gray-900 mb-4 group-hover:text-red-700 transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed font-georgia mb-6">{news.description}</p>
                  <Link
                    to="/news"
                    className="inline-flex items-center space-x-2 text-red-700 hover:text-red-800 font-helvetica font-semibold transition-colors"
                  >
                    Подробнее
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/news"
              className="inline-flex items-center space-x-3 bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 font-helvetica text-lg hover:shadow-xl"
            >
              Все новости
            </Link>
          </div>
        </div>
      </div>

      {/* Enhanced Call-to-Action Section */}
      <div className="py-32 bg-gradient-to-r from-red-800 via-red-700 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="w-full h-full bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80)` }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in group lg:col-span-1">
              <div className="mb-8 p-6 inline-block rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <Users className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-georgia-bold mb-6">Будущие студенты Болашак</h3>
              <p className="mb-8 font-georgia text-lg leading-relaxed opacity-90">
                Присоединяйтесь к сообществу новаторов, лидеров и тех, кто меняет мир. Ваш путь в колледже Болашак начинается здесь.
              </p>
              <Link
                to="/admissions"
                className="inline-flex items-center space-x-3 bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-helvetica shadow-lg"
              >
                Подать заявку
              </Link>
            </div>
            
            <div className="text-center animate-fade-in group lg:col-span-1" style={{ animationDelay: '0.2s' }}>
              <div className="mb-8 p-6 inline-block rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <BookOpen className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-georgia-bold mb-6">Текущие студенты</h3>
              <p className="mb-8 font-georgia text-lg leading-relaxed opacity-90">
                Получайте доступ к мировым ресурсам, общайтесь с единомышленниками и оставляйте свой след в мире.
              </p>
              <Link
                to="/academics"
                className="inline-flex items-center space-x-3 bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-helvetica shadow-lg"
              >
                Студенческий центр
              </Link>
            </div>
            
            <div className="text-center animate-fade-in group lg:col-span-1" style={{ animationDelay: '0.4s' }}>
              <div className="mb-8 p-6 inline-block rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300 backdrop-blur-sm">
                <Trophy className="w-16 h-16" />
              </div>
              <h3 className="text-3xl font-georgia-bold mb-6">Преподавательское превосходство</h3>
              <p className="mb-8 font-georgia text-lg leading-relaxed opacity-90">
                Сотрудничайте с ведущими исследователями и формируйте будущее знаний.
              </p>
              <Link
                to="/research"
                className="inline-flex items-center space-x-3 bg-white text-red-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 font-helvetica shadow-lg"
              >
                Научный портал
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Index;
