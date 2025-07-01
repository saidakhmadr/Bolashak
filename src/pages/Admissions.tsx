import { GraduationCap, FileText, Calendar, DollarSign, Users, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'Applicants',
    heroDesc: 'Learn how to apply to Bolashak College. Find deadlines, required documents, and grant information below.',
    deadlinesTitle: 'Admission Deadlines',
    deadlines: [
      { label: 'From June 20 to August 25' }
    ],
    submissionTitle: 'Submission of Documents',
    submission: [
      'In person at the college address',
      'Online consultation via WhatsApp'
    ],
    requirementsTitle: 'Required Documents',
    requirements: [
      'Application addressed to the director',
      'Certificate of education',
      'UNT certificate (if any)',
      'Medical certificates: 086-U, 063 (or 075)',
      'Photo 3×4 — 6 pieces',
      'Copy of ID card',
      'Address certificate',
      'Personal file + 2 envelopes',
      'Copy of IIN or birth certificate (if there is no certificate)'
    ],
    examsTitle: 'Exams and Grants',
    exams: [
      'Entrance exams — none',
      'UNT — not required',
      'There are budget places (755 out of 1263 students study on a grant)',
      'The rest — on a fee-paying basis (check the cost with the admissions office)'
    ]
  },
  kz: {
    heroTitle: 'Талапкерлерге',
    heroDesc: 'Болашақ колледжіне қалай түсуге болатынын біліңіз. Мерзімдер, қажетті құжаттар және гранттар туралы ақпарат төменде.',
    deadlinesTitle: 'Қабылдау мерзімдері',
    deadlines: [
      { label: '20 маусымнан 25 тамызға дейін' }
    ],
    submissionTitle: 'Құжаттарды тапсыру',
    submission: [
      'Колледж мекенжайына келіп тапсыру',
      'WhatsApp арқылы онлайн кеңес'
    ],
    requirementsTitle: 'Қажетті құжаттар',
    requirements: [
      'Директордың атына өтініш',
      'Білім туралы құжат',
      'ҰБТ сертификаты (бар болса)',
      'Медициналық анықтамалар: 086-У, 063 (немесе 075)',
      '3×4 фото — 6 дана',
      'Жеке куәліктің көшірмесі',
      'Мекенжай анықтамасы',
      'Жеке іс + 2 конверт',
      'ЖСН немесе туу туралы куәліктің көшірмесі (егер куәлік болмаса)'
    ],
    examsTitle: 'Емтихандар мен гранттар',
    exams: [
      'Кіріс емтихандары — жоқ',
      'ҰБТ — талап етілмейді',
      'Бюджеттік орындар бар (1263 студенттің 755-і грантта оқиды)',
      'Қалғаны — ақылы негізде (бағаны қабылдау комиссиясынан сұраңыз)'
    ]
  },
  ru: {
    heroTitle: 'Абитуриентам',
    heroDesc: 'Узнайте, как поступить в колледж Болашак. Сроки, необходимые документы и информация о грантах — ниже.',
    deadlinesTitle: 'Сроки приема',
    deadlines: [
      { label: 'С 20 июня по 25 августа' }
    ],
    submissionTitle: 'Подача документов',
    submission: [
      'Лично по адресу колледжа',
      'Онлайн-консультация через WhatsApp'
    ],
    requirementsTitle: 'Необходимые документы',
    requirements: [
      'Заявление на имя директора',
      'Документ об образовании',
      'Сертификат ЕНТ (при наличии)',
      'Медицинские справки: 086-У, 063 (или 075)',
      'Фото 3×4 — 6 штук',
      'Копия удостоверения личности',
      'Справка о прописке',
      'Личное дело + 2 конверта',
      'Копия ИИН или свидетельства о рождении (если нет удостоверения)'
    ],
    examsTitle: 'Экзамены и гранты',
    exams: [
      'Вступительные экзамены — отсутствуют',
      'ЕНТ — не требуется',
      'Есть бюджетные места (755 из 1263 студентов учатся на гранте)',
      'Остальные — на платной основе (уточняйте стоимость в приемной комиссии)'
    ]
  }
};

const AnimatedBlob = ({ className, style }) => (
  <div
    className={`absolute rounded-full filter blur-2xl opacity-40 mix-blend-multiply pointer-events-none ${className}`}
    style={style}
  />
);

const Admissions = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const infoBlocks = [
    {
      title: t.deadlinesTitle,
      icon: <Calendar className="w-10 h-10 text-red-700 mb-4" />,
      items: t.deadlines.map((d) => d.label),
      color: 'from-pink-100 to-red-50',
    },
    {
      title: t.submissionTitle,
      icon: <FileText className="w-10 h-10 text-red-700 mb-4" />,
      items: t.submission,
      color: 'from-red-100 to-yellow-50',
    },
    {
      title: t.requirementsTitle,
      icon: <CheckCircle className="w-10 h-10 text-red-700 mb-4" />,
      items: t.requirements,
      color: 'from-yellow-100 to-pink-50',
    },
    {
      title: t.examsTitle,
      icon: <GraduationCap className="w-10 h-10 text-red-700 mb-4" />,
      items: t.exams,
      color: 'from-pink-50 to-yellow-50',
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-red-50 via-white to-red-100 overflow-x-hidden">
      {/* Animated Gradient Blobs */}
      <AnimatedBlob className="z-0" style={{ top: '-6rem', left: '-6rem', width: '32rem', height: '32rem', background: 'radial-gradient(circle at 30% 30%, #f43f5e 0%, #fbbf24 100%)', animation: 'blobMove1 18s infinite alternate' }} />
      <AnimatedBlob className="z-0" style={{ top: '60vh', right: '-8rem', width: '28rem', height: '28rem', background: 'radial-gradient(circle at 70% 70%, #f472b6 0%, #f43f5e 100%)', animation: 'blobMove2 22s infinite alternate' }} />
      <Navigation />
      {/* Hero Section */}
      <div className="relative h-96 bg-gradient-to-r from-red-700 via-red-600 to-pink-500 shadow-2xl animate-fade-in rounded-b-3xl overflow-hidden">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center z-10">
          <div className="text-white animate-fade-in-up">
            <h1 className="text-6xl font-extrabold mb-4 drop-shadow-xl animate-scale-in tracking-tight bg-gradient-to-r from-yellow-200 via-pink-200 to-red-400 bg-clip-text text-transparent">
              {t.heroTitle}
            </h1>
            <p className="text-2xl max-w-2xl drop-shadow-md animate-fade-in font-georgia" style={{ animationDelay: '0.2s' }}>{t.heroDesc}</p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-pink-400 via-red-500 to-yellow-400 opacity-90 animate-gradient-x" />
      </div>
      {/* Fancy Section Divider */}
      <div className="w-full h-16 -mt-8 z-10 relative">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#fbbf24" fillOpacity="0.15" d="M0,224L48,202.7C96,181,192,139,288,144C384,149,480,203,576,197.3C672,192,768,128,864,128C960,128,1056,192,1152,197.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Info Cards Grid */}
      <section className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {infoBlocks.map((block, idx) => (
              <div
                key={block.title}
                className={`relative bg-gradient-to-br ${block.color} rounded-3xl shadow-2xl p-10 flex flex-col items-center glass-card border border-white/30 hover:scale-[1.03] transition-transform duration-300 animate-fade-in-up`}
                style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-white/80 rounded-full shadow-lg p-3 flex items-center justify-center animate-bounce-slow">
                    {block.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-6 mt-8 text-center tracking-tight font-georgia drop-shadow-lg">
                  {block.title}
                </h3>
                <ul className="space-y-4 w-full">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-start space-x-3 group">
                      <span className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-red-400 to-yellow-400 group-hover:scale-125 transition-transform duration-200" />
                      <span className="text-lg text-gray-800 font-medium group-hover:text-red-700 transition-colors duration-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admissions;

