import { Microscope, Lightbulb, TrendingUp, Users, Award, BookOpen, Book } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'Students',
    heroDesc: "Pioneering research that addresses the world's greatest challenges and creates knowledge for the benefit of humanity.",
    stats: [
      { icon: TrendingUp, number: "$1.7B", label: "Annual Research Volume" },
      { icon: Users, number: "2,200+", label: "Faculty Researchers" },
      { icon: Lightbulb, number: "700+", label: "Active Projects" },
      { icon: Microscope, number: "75+", label: "Research Centers" }
    ],
    areasTitle: 'Research Areas',
    areasDesc: 'Explore our cutting-edge research across multiple disciplines',
    cards: [
      { title: 'Artificial Intelligence', description: 'Advancing AI research to benefit humanity through machine learning, robotics, and human-computer interaction.' },
      { title: 'Biomedical Sciences', description: 'Pioneering breakthroughs in medicine, genetics, and healthcare to improve human health worldwide.' },
      { title: 'Climate & Energy', description: 'Developing sustainable solutions for climate change and clean energy technologies.' },
      { title: 'Social Sciences', description: 'Understanding human behavior and society to address social challenges and inequalities.' },
    ],
    institutesTitle: 'Research Institutes & Centers',
    institutesDesc: 'Collaborative centers fostering interdisciplinary research',
    institutes: [
      'Bolashak Artificial Intelligence Lab',
      'Bio-X Program',
      'Environmental Research Center',
      'Energy Innovation Center',
      'Human-Centered AI Institute',
      'Bolashak Cancer Research Center'
    ],
    discoveriesTitle: 'Breakthrough Discoveries',
    discoveriesDesc: 'Our researchers are making groundbreaking discoveries that are changing the world. From developing new treatments for cancer to creating sustainable energy solutions, Bolashak research has real-world impact.',
    discoveries: [
      'Revolutionary AI algorithms for medical diagnosis',
      'Breakthrough gene therapy treatments',
      'Next-generation solar energy technology',
      'Advanced robotics for humanitarian aid'
    ]
  },
  kz: {
    heroTitle: 'Студенттер',
    heroDesc: 'Әлемдік маңызды мәселелерді шешуге және адамзат игілігі үшін білім жасауға бағытталған зерттеулер.',
    stats: [
      { icon: TrendingUp, number: "$1.7B", label: "Жылдық зерттеу көлемі" },
      { icon: Users, number: "2,200+", label: "Ғылыми қызметкерлер" },
      { icon: Lightbulb, number: "700+", label: "Белсенді жобалар" },
      { icon: Microscope, number: "75+", label: "Зерттеу орталықтары" }
    ],
    areasTitle: 'Зерттеу бағыттары',
    areasDesc: 'Бірнеше саладағы заманауи зерттеулерімізбен танысыңыз',
    cards: [
      { title: 'Жасанды интеллект', description: 'Машиналық оқыту, робототехника және адам-компьютерлік өзара әрекет арқылы адамзатқа пайда әкелетін AI зерттеулерін дамыту.' },
      { title: 'Биомедициналық ғылымдар', description: 'Медицина, генетика және денсаулық сақтау саласындағы жаңалықтар арқылы адам денсаулығын жақсарту.' },
      { title: 'Климат және энергия', description: 'Климаттың өзгеруі мен таза энергия технологияларына арналған тұрақты шешімдерді әзірлеу.' },
      { title: 'Әлеуметтік ғылымдар', description: 'Әлеуметтік мәселелер мен теңсіздіктерді шешу үшін адам мінез-құлқы мен қоғамды зерттеу.' },
    ],
    institutesTitle: 'Зерттеу институттары мен орталықтары',
    institutesDesc: 'Пәнаралық зерттеулерді қолдайтын орталықтар',
    institutes: [
      'Bolashak Жасанды интеллект зертханасы',
      'Bio-X бағдарламасы',
      'Экологиялық зерттеу орталығы',
      'Энергетикалық инновациялар орталығы',
      'Адамға бағытталған AI институты',
      'Bolashak қатерлі ісік зерттеу орталығы'
    ],
    discoveriesTitle: 'Таңғажайып жаңалықтар',
    discoveriesDesc: 'Зерттеушілеріміз әлемді өзгертетін жаңалықтар ашуда. Қатерлі ісікке қарсы жаңа емдеу әдістерінен бастап, тұрақты энергия шешімдеріне дейін, Bolashak зерттеулері нақты нәтижелер береді.',
    discoveries: [
      'Медициналық диагностикаға арналған AI алгоритмдері',
      'Гендік терапиядағы жетістіктер',
      'Келесі буын күн энергиясы технологиясы',
      'Гуманитарлық көмеkке арналған робототехника'
    ]
  },
  ru: {
    heroTitle: 'Студенты',
    heroDesc: 'Передовые исследования, направленные на решение важнейших мировых проблем и создание знаний на благо человечества.',
    stats: [
      { icon: TrendingUp, number: "$1.7B", label: "Годовой объем исследований" },
      { icon: Users, number: "2,200+", label: "Научные сотрудники" },
      { icon: Lightbulb, number: "700+", label: "Активные проекты" },
      { icon: Microscope, number: "75+", label: "Исследовательские центры" }
    ],
    areasTitle: 'Направления исследований',
    areasDesc: 'Ознакомьтесь с нашими передовыми исследованиями в различных областях',
    cards: [
      { title: 'Искусственный интеллект', description: 'Развитие исследований ИИ для блага человечества с помощью машинного обучения, робототехники и взаимодействия человека с компьютером.' },
      { title: 'Биомедицинские науки', description: 'Прорывы в медицине, генетике и здравоохранении для улучшения здоровья людей во всем мире.' },
      { title: 'Климат и энергия', description: 'Разработка устойчивых решений для изменения климата и чистых энергетических технологий.' },
      { title: 'Социальные науки', description: 'Изучение человеческого поведения и общества для решения социальных проблем и неравенства.' },
    ],
    institutesTitle: 'Институты и исследовательские центры',
    institutesDesc: 'Центры, способствующие междисциплинарным исследованиям',
    institutes: [
      'Лаборатория искусственного интеллекта Bolashak',
      'Программа Bio-X',
      'Центр экологических исследований',
      'Центр инноваций в энергетике',
      'Институт человеко-ориентированного ИИ',
      'Центр исследований рака Bolashak'
    ],
    discoveriesTitle: 'Выдающиеся открытия',
    discoveriesDesc: 'Наши исследователи совершают открытия, меняющие мир. От новых методов лечения рака до устойчивых энергетических решений — исследования Bolashak имеют реальное влияние.',
    discoveries: [
      'Революционные AI-алгоритмы для медицинской диагностики',
      'Прорывные методы генной терапии',
      'Технологии солнечной энергии нового поколения',
      'Передовая робототехника для гуманитарной помощи'
    ]
  }
};

const STUDENT_INFO = [
  {
    key: 'schedule',
    icon: Lightbulb,
    color: 'from-yellow-100 to-red-50',
    en: {
      title: 'Schedule',
      desc: 'Through the curator or the academic department'
    },
    kz: {
      title: 'Сабақ кестесі',
      desc: 'Куратор немесе оқу бөлімі арқылы'
    },
    ru: {
      title: 'Расписание',
      desc: 'Через куратора или учебный отдел'
    }
  },
  {
    key: 'certificates',
    icon: Award,
    color: 'from-pink-100 to-yellow-50',
    en: {
      title: 'Certificates (study, military registration and enlistment office)',
      desc: 'Issued through the methodologist.'
    },
    kz: {
      title: 'Анықтамалар (оқу, әскери есепке алу және шақыру бөлімі)',
      desc: 'Әдіскер арқылы беріледі.'
    },
    ru: {
      title: 'Справки (учебные, военкомат)',
      desc: 'Выдаются через методиста.'
    }
  },
  {
    key: 'transfer',
    icon: Users,
    color: 'from-red-100 to-pink-50',
    en: {
      title: 'Transfer, reinstatement',
      desc: 'Upon application and a package of documents'
    },
    kz: {
      title: 'Ауыстыру, қайта қабылдау',
      desc: 'Өтініш пен құжаттар пакеті бойынша'
    },
    ru: {
      title: 'Перевод, восстановление',
      desc: 'По заявлению и пакету документов'
    }
  },
  {
    key: 'practice',
    icon: Microscope,
    color: 'from-yellow-50 to-pink-100',
    en: {
      title: 'Practice',
      desc: 'Opened through the curator and the methods department'
    },
    kz: {
      title: 'Практика',
      desc: 'Куратор және әдістемелік бөлім арқылы ашылады'
    },
    ru: {
      title: 'Практика',
      desc: 'Открывается через куратора и методический отдел'
    }
  },
  {
    key: 'card',
    icon: BookOpen,
    color: 'from-pink-50 to-yellow-100',
    en: {
      title: 'Student card and pass',
      desc: 'Issued after enrollment'
    },
    kz: {
      title: 'Студенттік билет және рұқсатнама',
      desc: 'Оқуға қабылданғаннан кейін беріледі'
    },
    ru: {
      title: 'Студенческий билет и пропуск',
      desc: 'Выдаются после зачисления'
    }
  },
  {
    key: 'library',
    icon: Book,
    color: 'from-yellow-100 to-pink-50',
    en: {
      title: 'Library and reading room',
      desc: 'Check with the academic department'
    },
    kz: {
      title: 'Кітапхана және оқу залы',
      desc: 'Оқу бөлімі арқылы анықтаңыз'
    },
    ru: {
      title: 'Библиотека и читальный зал',
      desc: 'Уточняйте в учебном отделе'
    }
  }
];

const Research = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description: "Advancing AI research to benefit humanity through machine learning, robotics, and human-computer interaction.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      funding: "$45M",
      projects: 120
    },
    {
      title: "Biomedical Sciences",
      description: "Pioneering breakthroughs in medicine, genetics, and healthcare to improve human health worldwide.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      funding: "$85M",
      projects: 200
    },
    {
      title: "Climate & Energy",
      description: "Developing sustainable solutions for climate change and clean energy technologies.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      funding: "$60M",
      projects: 90
    },
    {
      title: "Social Sciences",
      description: "Understanding human behavior and society to address social challenges and inequalities.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      funding: "$30M",
      projects: 75
    }
  ];

  const institutes = [
    "Stanford Artificial Intelligence Laboratory",
    "Bio-X Program",
    "Woods Institute for the Environment",
    "Precourt Institute for Energy",
    "Human-Centered AI Institute",
    "Stanford Cancer Institute"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-700 to-red-800">
        <div className="absolute inset-0 bg-black bg-opacity-20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">{t.heroTitle}</h1>
            <p className="text-xl max-w-2xl">
              {t.heroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Student Information Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-yellow-50 to-red-100 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{language === 'en' ? 'Student Information' : language === 'kz' ? 'Студенттерге ақпарат' : 'Информация для студентов'}</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {language === 'en'
                ? 'Essential information and services for Bolashak College students.'
                : language === 'kz'
                ? 'Болашақ колледжінің студенттеріне арналған маңызды ақпарат пен қызметтер.'
                : 'Важная информация и услуги для студентов колледжа Болашак.'}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {STUDENT_INFO.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.key}
                  className={`relative bg-gradient-to-br ${item.color} rounded-3xl shadow-2xl p-10 flex flex-col items-center glass-card border border-white/30 hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up`}
                  style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-white/80 rounded-full shadow-lg p-3 flex items-center justify-center animate-bounce-slow">
                      <Icon className="w-10 h-10 text-red-700 mb-0" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-gray-900 mb-6 mt-8 text-center tracking-tight font-georgia drop-shadow-lg">
                    {item[language].title}
                  </h3>
                  <p className="text-lg text-gray-800 font-medium text-center mb-2">
                    {item[language].desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Stats */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {t.stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-in hover:transform hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 text-white rounded-full mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Areas */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.areasTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.areasDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  
                  <div className="flex justify-between items-center text-sm text-red-700 font-semibold">
                    <span>Funding: {area.funding}</span>
                    <span>{area.projects} Active Projects</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Research Institutes */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.institutesTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.institutesDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.institutes.map((institute, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 hover:text-red-700 transition-colors cursor-pointer">
                  {institute}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Research */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.discoveriesTitle}</h2>
              <p className="text-lg text-gray-600 mb-6">
                {t.discoveriesDesc}
              </p>
              <ul className="space-y-3">
                {t.discoveries.map((discovery, index) => (
                  <li className="flex items-center space-x-3" key={index}>
                    <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                    <span className="text-gray-700">{discovery}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Research Lab"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Research;
