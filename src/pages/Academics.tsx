import { Book, Users, Award, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'Specialties',
    heroDesc: 'Discover the specialties and academic programs offered at Bolashak College.',
    programsTitle: 'Academic Programs',
    programsDesc: 'Choose from a wide range of professional specialties and modern programs.',
    specialtiesTitle: 'Specialties',
    specialties: [
      'Primary education (pedagogy, methodology)',
      'Banking and insurance',
      'Accounting and auditing',
      'Software Development',
      'Pre-school education and training',
      'Physical education and sports',
      'Jurisprudence',
      'Auto mechanics',
      'Maintenance, repair of vehicles',
      'Laboratory diagnostics',
      'Catering'
    ],
    schoolsTitle: 'Schools & Departments',
    schoolsDesc: 'Explore our schools and discover your academic path',
    academicExcellenceTitle: 'Academic Excellence',
    academicExcellence: [
      { title: 'Top-Ranked Programs', desc: 'Multiple programs ranked #1 nationally' },
      { title: 'World-Class Faculty', desc: 'Nobel laureates, Pulitzer Prize winners, and field leaders' },
      { title: 'Innovative Curriculum', desc: 'Cutting-edge courses that prepare students for the future' }
    ],
    learnMore: 'Learn More',
    // ...schools, programs, etc.
  },
  kz: {
    heroTitle: 'Мамандықтар',
    heroDesc: 'Bolashak колледжіндегі мамандықтар мен академиялық бағдарламалар.',
    programsTitle: 'Академиялық бағдарламалар',
    programsDesc: 'Кәсіби мамандықтар мен заманауи бағдарламалардың кең таңдауы.',
    specialtiesTitle: 'Мамандықтар',
    specialties: [
      'Бастауыш білім беру (педагогика, әдістеме)',
      'Банк ісі және сақтандыру',
      'Есеп және аудит',
      'Бағдарламалық қамтамасыз етуді әзірлеу',
      'Мектепке дейінгі тәрбие және оқыту',
      'Дене шынықтыру және спорт',
      'Құқықтану',
      'Автомеханика',
      'Көлік құралдарын жөндеу және қызмет көрсету',
      'Зертханалық диагностика',
      'Тамақтандыруды ұйымдастыру'
    ],
    schoolsTitle: 'Мектептер мен бөлімдер',
    schoolsDesc: 'Мектептерімізбен танысып, өз академиялық жолыңызды табыңыз',
    academicExcellenceTitle: 'Академиялық жетістік',
    academicExcellence: [
      { title: 'Жоғары рейтингті бағдарламалар', desc: 'Бірнеше бағдарлама ұлттық деңгейде №1' },
      { title: 'Әлемдік деңгейдегі оқытушылар', desc: 'Нобель лауреаттары, Пулитцер сыйлығының иегерлері және сала көшбасшылары' },
      { title: 'Инновациялық оқу жоспары', desc: 'Болашаққа дайындыққа арналған заманауи курстар' }
    ],
    learnMore: 'Толығырақ',
    // ...schools, programs, etc.
  },
  ru: {
    heroTitle: 'Специальности',
    heroDesc: 'Специальности и академические программы колледжа Болашак.',
    programsTitle: 'Академические программы',
    programsDesc: 'Широкий выбор профессиональных специальностей и современных программ.',
    specialtiesTitle: 'Специальности',
    specialties: [
      'Начальное образование (педагогика, методика)',
      'Банковское дело и страхование',
      'Бухгалтерский учет и аудит',
      'Разработка программного обеспечения',
      'Дошкольное воспитание и обучение',
      'Физическая культура и спорт',
      'Юриспруденция',
      'Автомеханика',
      'Техническое обслуживание и ремонт автомобилей',
      'Лабораторная диагностика',
      'Организация питания'
    ],
    schoolsTitle: 'Школы и отделения',
    schoolsDesc: 'Познакомьтесь с нашими школами и найдите свой академический путь',
    academicExcellenceTitle: 'Академическое превосходство',
    academicExcellence: [
      { title: 'Лучшие программы', desc: 'Несколько программ занимают 1-е место в стране' },
      { title: 'Преподаватели мирового уровня', desc: 'Лауреаты Нобелевской премии, Пулитцеровской премии и лидеры отрасли' },
      { title: 'Инновационная учебная программа', desc: 'Современные курсы для подготовки к будущему' }
    ],
    learnMore: 'Подробнее',
    // ...schools, programs, etc.
  }
};

const SPECIALTIES = [
  {
    key: 'primary',
    images: ['https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Primary education (pedagogy, methodology)',
      description: 'Training future primary school teachers with a focus on pedagogy and modern teaching methods.'
    },
    kz: {
      name: 'Бастауыш білім беру (педагогика, әдістеме)',
      description: 'Педагогика және заманауи оқыту әдістеріне баса назар аудара отырып, бастауыш сынып мұғалімдерін даярлау.'
    },
    ru: {
      name: 'Начальное образование (педагогика, методика)',
      description: 'Подготовка будущих учителей начальных классов с акцентом на педагогику и современные методы обучения.'
    }
  },
  {
    key: 'banking',
    images: ['https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Banking and insurance',
      description: 'Comprehensive education in banking, finance, and insurance operations.'
    },
    kz: {
      name: 'Банк ісі және сақтандыру',
      description: 'Банк ісі, қаржы және сақтандыру салаларында жан-жақты білім беру.'
    },
    ru: {
      name: 'Банковское дело и страхование',
      description: 'Комплексное образование в области банковского дела, финансов и страхования.'
    }
  },
  {
    key: 'accounting',
    images: ['https://images.unsplash.com/photo-1556742044-3c52d6e88c62?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Accounting and auditing',
      description: 'Mastering accounting principles, auditing, and financial analysis.'
    },
    kz: {
      name: 'Есеп және аудит',
      description: 'Есеп, аудит және қаржылық талдау негіздерін меңгеру.'
    },
    ru: {
      name: 'Бухгалтерский учет и аудит',
      description: 'Освоение принципов бухгалтерии, аудита и финансового анализа.'
    }
  },
  {
    key: 'software',
    images: ['https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Software Development',
      description: 'Developing skills in programming, software engineering, and IT project management.'
    },
    kz: {
      name: 'Бағдарламалық қамтамасыз етуді әзірлеу',
      description: 'Бағдарламалау, бағдарламалық инженерия және IT жобаларды басқару дағдыларын дамыту.'
    },
    ru: {
      name: 'Разработка программного обеспечения',
      description: 'Развитие навыков программирования, инженерии ПО и управления IT-проектами.'
    }
  },
  {
    key: 'preschool',
    images: ['https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Pre-school education and training',
      description: 'Preparing educators for early childhood development and pre-school teaching.'
    },
    kz: {
      name: 'Мектепке дейінгі тәрбие және оқыту',
      description: 'Ерте жастағы балаларды дамыту және мектепке дейінгі оқытуға педагогтерді даярлау.'
    },
    ru: {
      name: 'Дошкольное воспитание и обучение',
      description: 'Подготовка педагогов для развития детей раннего возраста и дошкольного обучения.'
    }
  },
  {
    key: 'physical',
    images: ['https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Physical education and sports',
      description: 'Training specialists in physical education, sports, and healthy lifestyle promotion.'
    },
    kz: {
      name: 'Дене шынықтыру және спорт',
      description: 'Дене шынықтыру, спорт және салауатты өмір салтын насихаттау мамандарын даярлау.'
    },
    ru: {
      name: 'Физическая культура и спорт',
      description: 'Подготовка специалистов по физической культуре, спорту и здоровому образу жизни.'
    }
  },
  {
    key: 'jurisprudence',
    images: ['https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Jurisprudence',
      description: 'Studying law, legal systems, and the foundations of jurisprudence.'
    },
    kz: {
      name: 'Құқықтану',
      description: 'Құқық, құқықтық жүйелер және құқықтану негіздерін оқыту.'
    },
    ru: {
      name: 'Юриспруденция',
      description: 'Изучение права, правовых систем и основ юриспруденции.'
    }
  },
  {
    key: 'automechanics',
    images: ['/img/auto.jpg'],
    en: {
      name: 'Auto mechanics',
      description: 'Hands-on training in automotive repair, diagnostics, and maintenance.'
    },
    kz: {
      name: 'Автомеханика',
      description: 'Автокөліктерді жөндеу, диагностика және қызмет көрсету бойынша тәжірибелік оқыту.'
    },
    ru: {
      name: 'Автомеханика',
      description: 'Практическое обучение ремонту, диагностике и обслуживанию автомобилей.'
    }
  },
  {
    key: 'maintenance',
    images: ['https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Maintenance, repair of vehicles',
      description: 'Specializing in the maintenance and technical service of vehicles.'
    },
    kz: {
      name: 'Көлік құралдарын жөндеу және қызмет көрсету',
      description: 'Көлік құралдарын жөндеу және техникалық қызмет көрсету бойынша мамандану.'
    },
    ru: {
      name: 'Техническое обслуживание и ремонт автомобилей',
      description: 'Специализация по техническому обслуживанию и ремонту транспортных средств.'
    }
  },
  {
    key: 'lab',
    images: ['https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Laboratory diagnostics',
      description: 'Training in laboratory analysis, diagnostics, and medical testing.'
    },
    kz: {
      name: 'Зертханалық диагностика',
      description: 'Зертханалық талдау, диагностика және медициналық тестілеу бойынша оқыту.'
    },
    ru: {
      name: 'Лабораторная диагностика',
      description: 'Обучение лабораторному анализу, диагностике и медицинским исследованиям.'
    }
  },
  {
    key: 'catering',
    images: ['https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80'],
    en: {
      name: 'Catering',
      description: 'Learning the essentials of catering, food service, and hospitality.'
    },
    kz: {
      name: 'Тамақтандыруды ұйымдастыру',
      description: 'Тамақтандыруды ұйымдастыру, қоғамдық тамақтану және қонақжайлылық негіздерін үйрену.'
    },
    ru: {
      name: 'Организация питания',
      description: 'Изучение основ организации питания, общественного питания и гостеприимства.'
    }
  }
];

const Academics = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const schools = [
    {
      name: "School of Engineering",
      description: "Leading the way in technological innovation and engineering excellence.",
      programs: 15,
      students: 4500,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "School of Medicine",
      description: "Advancing healthcare through research, education, and patient care.",
      programs: 8,
      students: 2800,
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "School of Business",
      description: "Developing leaders who will make a positive impact on the world.",
      programs: 6,
      students: 1200,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "School of Law",
      description: "Training the next generation of legal leaders and public servants.",
      programs: 4,
      students: 900,
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "School of Humanities & Sciences",
      description: "Exploring the breadth of human knowledge and understanding.",
      programs: 25,
      students: 6200,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      name: "School of Education",
      description: "Improving education through research, practice, and policy.",
      programs: 7,
      students: 800,
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  const specialties = t.specialties;

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

      {/* Academic Programs Overview */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.programsTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.programsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {specialties.map((spec, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-pink-50 via-white to-red-100 rounded-2xl shadow-xl p-8 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 border border-red-100 animate-fade-in"
                style={{ animationDelay: `${idx * 0.07 + 0.2}s` }}
              >
                <div className="mb-4 flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-red-600 to-pink-400 shadow-lg">
                  <Book className="w-8 h-8 text-white" />
                </div>
                <span className="text-lg text-gray-900 font-semibold text-center leading-snug drop-shadow-sm">
                  {spec}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Schools Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.schoolsTitle}</h2>
            <p className="text-xl text-gray-600">
              {t.schoolsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SPECIALTIES.map((spec, index) => (
              <div
                key={spec.key}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={spec.images[0]}
                    alt={spec[language].name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{spec[language].name}</h3>
                  <p className="text-gray-600 mb-4">{spec[language].description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Academic Excellence */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.academicExcellenceTitle}</h2>
              <div className="space-y-4">
                {t.academicExcellence.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-red-700 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Academic Excellence"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-20 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Explore our application process and take the first step toward joining the Stanford community.
            </p>
            <Link
              to="/admissions"
              className="inline-flex items-center space-x-2 bg-white text-red-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              <span>Apply Now</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Academics;
