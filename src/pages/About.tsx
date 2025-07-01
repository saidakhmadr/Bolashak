import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Globe, Award, BookOpen, Lightbulb, Heart, Star, TrendingUp, Map } from 'lucide-react';
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'About Bolashak College',
    heroDesc: 'Bolashak College is a modern educational institution located in the city of Turkestan. The college began its activities in 2006 and over the years has established itself as one of the reliable educational institutions in the region.',
    missionTitle: 'Our Mission',
    mission: [
      'Our mission is to provide students with a quality education, develop their critical thinking skills, and prepare them for successful professional activity in a rapidly changing world.',
      'We are committed to providing students with an education that combines rigorous academic study and the excitement of discovery with the support and intellectual stimulation of a diverse campus community.'
    ],
    valuesTitle: 'Our Values',
    valuesDesc: 'The principles that guide everything we do at Bolashak College',
    values: [
      { icon: Lightbulb, title: 'Innovation', description: 'Pioneering breakthrough discoveries that transform industries and improve lives worldwide.' },
      { icon: Heart, title: 'Community', description: 'Fostering an inclusive environment where diverse perspectives drive collaborative excellence.' },
      { icon: Globe, title: 'Global Impact', description: 'Addressing humanity\'s greatest challenges through education, research, and service.' },
      { icon: Star, title: 'Excellence', description: 'Maintaining the highest standards in teaching, research, and intellectual achievement.' }
    ],
    achievementsTitle: 'Achievements',
    achievementsDesc: 'Bolashak College actively participates in educational, scientific, sports and cultural projects at both the regional and national levels.',
    achievements: [
      { icon: Award, color: 'from-pink-400 via-red-500 to-yellow-500', num: '120+', numColor: 'text-white', label: 'Prizes in competitions and Olympiads', sub: '(last 3 years)' },
      { icon: BookOpen, color: 'from-blue-400 via-cyan-400 to-blue-600', num: '40', numColor: 'text-white', label: 'Victories in city and regional subject Olympiads' },
      { icon: Target, color: 'from-green-400 via-emerald-400 to-green-600', num: '30', numColor: 'text-white', label: 'Prizes in national professional skills competitions' },
      { icon: Star, color: 'from-yellow-400 via-orange-400 to-pink-500', num: '20', numColor: 'text-white', label: 'Awards in cultural and creative festivals and competitions' },
      { icon: Users, color: 'from-purple-400 via-fuchsia-400 to-pink-600', num: '15', numColor: 'text-white', label: 'Diplomas in research conferences' },
      { icon: TrendingUp, color: 'from-pink-400 via-red-400 to-yellow-400', num: '15', numColor: 'text-white', label: 'Medals for sports achievements' }
    ],
    achievementsCards: [
      { icon: Award, title: 'Scientific and practical conferences', desc: 'Regularly organized and held' },
      { icon: BookOpen, title: 'Trainings and master classes', desc: 'With the participation of experts' },
      { icon: Users, title: 'Student volunteer campaigns', desc: 'Active student involvement' },
      { icon: Map, title: 'Meetings with employers & career forums', desc: 'Career development opportunities' }
    ],
    staffTitle: 'Staff',
    staff: [
      { name: 'Бегалиев Бақдаулет Байсеитович', job: 'Директор', specialty: 'Құқықтану' },
      { name: 'Бегалиева Шолпан Маратовна', job: 'Оқу өндірістік жөніндегі орынбасары', specialty: 'Заңгер' },
      { name: 'Ильясова Салима Тургановна', job: 'Оқу ісі орынбасары', specialty: 'Қаржы' }
    ]
  },
  kz: {
    heroTitle: 'Болашақ колледжі туралы',
    heroDesc: 'Болашақ колледжі – Түркістан қаласында орналасқан заманауи білім ордасы. Колледж 2006 жылдан бастап жұмыс істейді және осы уақыт ішінде аймақтағы сенімді оқу орындарының бірі ретінде танылды.',
    missionTitle: 'Миссиямыз',
    mission: [
      'Біздің миссиямыз – студенттерге сапалы білім беру, сыни ойлау қабілеттерін дамыту және оларды тез өзгеретін әлемде табысты кәсіби қызметке дайындау.',
      'Біз студенттерге қатаң академиялық оқуды, жаңалық ашу қуанышын және әртүрлі кампус қауымдастығының қолдауын біріктіретін білім беруге ұмтыламыз.'
    ],
    valuesTitle: 'Біздің құндылықтарымыз',
    valuesDesc: 'Болашақ колледжіндегі барлық іс-әрекетімізді басқаратын қағидалар',
    values: [
      { icon: Lightbulb, title: 'Инновация', description: 'Салаларды өзгертетін және өмірді жақсартатын жаңалықтар.' },
      { icon: Heart, title: 'Қауымдастық', description: 'Әртүрлі көзқарастар ынтымақтастыққа жетелейтін орта құру.' },
      { icon: Globe, title: 'Ғаламдық ықпал', description: 'Білім, зерттеу және қызмет арқылы адамзаттың басты мәселелерін шешу.' },
      { icon: Star, title: 'Үздіксіздік', description: 'Оқыту мен зерттеуде ең жоғары стандарттарды сақтау.' }
    ],
    achievementsTitle: 'Жетістіктер',
    achievementsDesc: 'Болашақ колледжі аймақтық және ұлттық деңгейде білім, ғылым, спорт және мәдени жобаларға белсенді қатысады.',
    achievements: [
      { icon: Award, color: 'from-pink-400 via-red-500 to-yellow-500', num: '120+', numColor: 'text-white', label: 'Олимпиадалар мен байқаулардағы жүлделер', sub: '(соңғы 3 жыл)' },
      { icon: BookOpen, color: 'from-blue-400 via-cyan-400 to-blue-600', num: '40', numColor: 'text-white', label: 'Қалалық және аймақтық пәндік олимпиадалардағы жеңістер' },
      { icon: Target, color: 'from-green-400 via-emerald-400 to-green-600', num: '30', numColor: 'text-white', label: 'Ұлттық кәсіби шеберлік байқауларындағы жүлделер' },
      { icon: Star, color: 'from-yellow-400 via-orange-400 to-pink-500', num: '20', numColor: 'text-white', label: 'Мәдени және шығармашылық фестивальдердегі марапаттар' },
      { icon: Users, color: 'from-purple-400 via-fuchsia-400 to-pink-600', num: '15', numColor: 'text-white', label: 'Ғылыми конференциялардағы дипломдар' },
      { icon: TrendingUp, color: 'from-pink-400 via-red-400 to-yellow-400', num: '15', numColor: 'text-white', label: 'Спорттық жетістіктер үшін медальдар' }
    ],
    achievementsCards: [
      { icon: Award, title: 'Ғылыми-практикалық конференциялар', desc: 'Тұрақты түрде ұйымдастырылады' },
      { icon: BookOpen, title: 'Тренингтер мен мастер-кластар', desc: 'Сарапшылардың қатысуымен' },
      { icon: Users, title: 'Студенттік волонтерлік акциялар', desc: 'Белсенді студенттік қатысу' },
      { icon: Map, title: 'Жұмыс берушілермен кездесулер және мансап форумдары', desc: 'Мансаптық даму мүмкіндіктері' }
    ],
    staffTitle: 'Қызметкерлер',
    staff: [
      { name: 'Бегалиев Бақдаулет Байсеитович', job: 'Директор', specialty: 'Құқықтану' },
      { name: 'Бегалиева Шолпан Маратовна', job: 'Оқу өндірістік жөніндегі орынбасары', specialty: 'Заңгер' },
      { name: 'Ильясова Салима Тургановна', job: 'Оқу ісі орынбасары', specialty: 'Қаржы' }
    ]
  },
  ru: {
    heroTitle: 'О колледже Болашак',
    heroDesc: 'Колледж Болашак — современное образовательное учреждение в городе Туркестан. Колледж начал свою деятельность в 2006 году и за это время зарекомендовал себя как одно из надежных учебных заведений региона.',
    missionTitle: 'Наша миссия',
    mission: [
      'Наша миссия — дать студентам качественное образование, развить их критическое мышление и подготовить к успешной профессиональной деятельности в быстро меняющемся мире.',
      'Мы стремимся дать студентам образование, сочетающее строгую академическую подготовку, радость открытий и поддержку разнообразного кампусного сообщества.'
    ],
    valuesTitle: 'Наши ценности',
    valuesDesc: 'Принципы, которыми мы руководствуемся в колледже Болашак',
    values: [
      { icon: Lightbulb, title: 'Инновации', description: 'Открытия, меняющие отрасли и улучшающие жизнь.' },
      { icon: Heart, title: 'Сообщество', description: 'Создание среды, где разные взгляды ведут к сотрудничеству.' },
      { icon: Globe, title: 'Глобальное влияние', description: 'Решение важнейших проблем человечества через образование, науку и служение.' },
      { icon: Star, title: 'Совершенство', description: 'Соблюдение высочайших стандартов в обучении и исследованиях.' }
    ],
    achievementsTitle: 'Достижения',
    achievementsDesc: 'Колледж Болашак активно участвует в образовательных, научных, спортивных и культурных проектах на региональном и национальном уровнях.',
    achievements: [
      { icon: Award, color: 'from-pink-400 via-red-500 to-yellow-500', num: '120+', numColor: 'text-white', label: 'Призы на олимпиадах и конкурсах', sub: '(за последние 3 года)' },
      { icon: BookOpen, color: 'from-blue-400 via-cyan-400 to-blue-600', num: '40', numColor: 'text-white', label: 'Победы в городских и региональных олимпиадах' },
      { icon: Target, color: 'from-green-400 via-emerald-400 to-green-600', num: '30', numColor: 'text-white', label: 'Призы на национальных конкурсах профмастерства' },
      { icon: Star, color: 'from-yellow-400 via-orange-400 to-pink-500', num: '20', numColor: 'text-white', label: 'Награды на культурных и творческих фестивалях' },
      { icon: Users, color: 'from-purple-400 via-fuchsia-400 to-pink-600', num: '15', numColor: 'text-white', label: 'Дипломы на научных конференциях' },
      { icon: TrendingUp, color: 'from-pink-400 via-red-400 to-yellow-400', num: '15', numColor: 'text-white', label: 'Медали за спортивные достижения' }
    ],
    achievementsCards: [
      { icon: Award, title: 'Научно-практические конференции', desc: 'Проводятся регулярно' },
      { icon: BookOpen, title: 'Тренинги и мастер-классы', desc: 'С участием экспертов' },
      { icon: Users, title: 'Волонтерские акции студентов', desc: 'Активное участие студентов' },
      { icon: Map, title: 'Встречи с работодателями и карьерные форумы', desc: 'Возможности карьерного роста' }
    ],
    staffTitle: 'Сотрудники',
    staff: [
      { name: 'Бегалиев Бақдаулет Байсеитович', job: 'Директор', specialty: 'Құқықтану' },
      { name: 'Бегалиева Шолпан Маратовна', job: 'Заместитель по учебно-производственной работе', specialty: 'Юрист' },
      { name: 'Ильясова Салима Тургановна', job: 'Заместитель по учебной работе', specialty: 'Финансы' }
    ]
  }
};

const About = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Pioneering breakthrough discoveries that transform industries and improve lives worldwide."
    },
    {
      icon: Heart,
      title: "Community",
      description: "Fostering an inclusive environment where diverse perspectives drive collaborative excellence."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Addressing humanity's greatest challenges through education, research, and service."
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Maintaining the highest standards in teaching, research, and intellectual achievement."
    }
  ];

  const timeline = [
    { year: "1885", event: "Stanford University founded by Leland and Jane Stanford" },
    { year: "1891", event: "First students enrolled, tuition-free education begins" },
    { year: "1930s", event: "Emergence as major research university" },
    { year: "1950s", event: "Stanford Industrial Park established, birth of Silicon Valley" },
    { year: "1970s", event: "Personal computer revolution begins on campus" },
    { year: "1990s", event: "Internet pioneers create Google, Yahoo, and other tech giants" },
    { year: "2000s", event: "Biomedical research breakthroughs and renewable energy innovations" },
    { year: "Today", event: "Leading AI research, climate solutions, and social innovation" }
  ];

  const leadership = [
    {
      name: "Marc Tessier-Lavigne",
      role: "President",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
      bio: "Renowned neuroscientist and academic leader driving Stanford's mission of excellence."
    },
    {
      name: "Persis Drell",
      role: "Provost",
      image: "https://images.unsplash.com/photo-1494790108755-2616c926e3b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
      bio: "Particle physicist and former SLAC director overseeing academic strategy."
    },
    {
      role: "Vice President for Business Affairs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80",
      bio: "Strategic leader managing university operations and financial sustainability."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-fuchsia-50 to-rose-100 transition-colors duration-1000">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 z-0 animate-hero-gradient" style={{background: 'linear-gradient(120deg, #232946 0%, #3a506b 50%, #5f6caf 100%)', opacity: 0.95}} />
        {/* Optional SVG overlay for uniqueness */}
        <svg className="absolute bottom-0 left-0 w-full h-32 z-10" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill="#232946" fillOpacity="0.4" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,154.7C840,149,960,171,1080,186.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <h1 className="text-6xl font-georgia-bold text-white mb-6 animate-fade-in drop-shadow-lg">{t.heroTitle}</h1>
            <p className="text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed font-georgia animate-fade-in drop-shadow" style={{ animationDelay: '0.2s' }}>
              {t.heroDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl font-georgia-bold text-gray-900 mb-8">{t.missionTitle}</h2>
              <div className="space-y-6 text-lg font-georgia text-gray-700 leading-relaxed">
                {t.mission.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Bolashak Campus"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-20 bg-white/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-georgia-bold text-gray-900 mb-6 animate-fade-in">{t.valuesTitle}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-georgia">{t.valuesDesc}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 text-red-700 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-georgia-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 font-georgia leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-20 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-georgia-bold text-gray-900 mb-6 animate-fade-in">{t.achievementsTitle}</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-georgia animate-fade-in">{t.achievementsDesc}</p>
          </div>
          <div className="relative w-full" style={{ height: '340px' }}>
            <style>{`
              @keyframes achievements-marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .achievements-marquee-row {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateX(0);
                display: flex;
                gap: 2rem;
                width: max-content;
                animation: achievements-marquee 60s linear infinite;
                will-change: transform;
                height: 320px;
                align-items: center;
              }
              .achievements-marquee-row:hover {
                animation-play-state: paused;
              }
            `}</style>
            <div className="achievements-marquee-row">
              {/* Repeat the cards twice for seamless infinite scroll */}
              {[t.achievements, t.achievements].flat().map((item, idx) => (
                <div
                  key={idx}
                  className={`min-w-[300px] max-w-[340px] h-[260px] flex flex-col items-center justify-center rounded-3xl shadow-2xl mx-6 p-10 relative overflow-hidden group animate-slide-in-up border-0`}
                  style={{ boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15), 0 0 0 4px rgba(255,255,255,0.08)' }}
                >
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.color} opacity-95 z-0`} />
                  <div className="absolute inset-0 rounded-3xl bg-white/10 group-hover:bg-white/20 transition-all duration-500 z-10" style={{backdropFilter:'blur(2px)'}} />
                  <div className="absolute top-0 left-0 w-full h-1/2 rounded-t-3xl bg-gradient-to-b from-white/60 to-transparent opacity-60 z-20 pointer-events-none" />
                  <div className="relative z-30 flex flex-col items-center justify-center h-full w-full">
                    <item.icon className="w-16 h-16 mb-4 text-white drop-shadow-lg" />
                    <div className={`text-6xl font-extrabold mb-2 drop-shadow-lg ${item.numColor}`}>{item.num}</div>
                    <div className="text-lg text-white text-center font-semibold drop-shadow-lg mb-1">{item.label}</div>
                    {item.sub && <div className="text-sm text-white/80 text-center">{item.sub}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 animate-fade-in">
            {t.achievementsCards.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 transition-transform duration-500 animate-slide-in-left"
              >
                <card.icon className="w-10 h-10 text-red-600 mb-2" />
                <div className="text-lg text-gray-800 text-center font-semibold mb-2">{card.title}</div>
                <div className="text-gray-600 text-center">{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Staff Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-georgia-bold text-gray-900 mb-6">{t.staffTitle}</h2>
          </div>
          <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-10">
            {t.staff.map((staff, idx) => {
              const initials = staff.name.split(' ').map(w => w[0]).join('').slice(0,2).toUpperCase();
              const gradient = [
                'from-pink-400 via-red-400 to-yellow-400',
                'from-blue-400 via-cyan-400 to-blue-600',
                'from-green-400 via-emerald-400 to-green-600',
              ][idx % 3];
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-6 bg-gradient-to-r ${gradient} rounded-2xl shadow-xl px-8 py-6 hover:scale-[1.025] hover:shadow-2xl transition-all duration-300 animate-slide-in-up`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white/80 flex items-center justify-center text-3xl font-bold text-gray-800 shadow-lg border-4 border-white">
                    {initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-2xl font-bold text-white truncate">{staff.name}</div>
                    <span className="inline-block mt-1 mb-1 px-3 py-1 rounded-full bg-white/80 text-red-700 font-semibold text-sm shadow">{staff.job}</span>
                    <div className="text-lg italic text-white/80 truncate">{staff.specialty}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
