import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Dialog, DialogContent } from "../components/ui/dialog";
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'Bolashak College News',
    heroDesc: 'Stay updated with the latest news, achievements, and events from the Bolashak College community.',
    categories: ['All', 'Research', 'Campus Life', 'Academics', 'Athletics', 'Alumni'],
    searchPlaceholder: 'Search news...',
    featuredStories: 'Featured Stories',
    latestNews: 'Latest News',
    readMore: 'Read More',
    getInformed: 'Stay Informed',
    getInformedDesc: 'Subscribe to Bolashak College News to receive the latest updates and stories directly in your inbox.',
    subscribe: 'Subscribe',
    newsArticles: [],
  },
  kz: {
    heroTitle: 'Болашақ колледжінің жаңалықтары',
    heroDesc: 'Болашақ колледжінің соңғы жаңалықтары, жетістіктері және оқиғаларымен танысыңыз.',
    categories: ['Барлығы', 'Зерттеу', 'Кампус өмірі', 'Академия', 'Спорт', 'Түлектер'],
    searchPlaceholder: 'Жаңалықтардан іздеу...',
    featuredStories: 'Таңдаулы жаңалықтар',
    latestNews: 'Соңғы жаңалықтар',
    readMore: 'Толығырақ',
    getInformed: 'Хабардар болыңыз',
    getInformedDesc: 'Болашақ колледжінің жаңалықтарына жазылып, соңғы жаңалықтарды тікелей поштаңызға алыңыз.',
    subscribe: 'Жазылу',
    newsArticles: [
      {
        id: 1,
        title: "Болашақ колледжінің студенттері соңғы үш жылда 120-дан астам марапатқа ие болды",
        excerpt: "Соңғы үш жылда Болашақ колледжінің студенттері олимпиадаларда, кәсіби шеберлік, мәдениет, зерттеу және спорт салаларында 120-дан астам марапатқа қол жеткізді.",
        image: "/img/college/img1.jpeg",
        category: "Жетістіктер",
        author: "Болашақ колледжінің жаңалықтар бөлімі",
        date: "2024 жылғы 1 маусым",
        readTime: "4 минут",
        featured: true,
        content: `Соңғы үш жылда Болашақ колледжінің студенттері ерекше дарындылық пен табандылық танытып, түрлі ұлттық жарыстарда 120-дан астам марапатқа ие болды. Бұл жетістіктер математика, ғылым, тіл олимпиадалары, кәсіби шеберлік байқаулары, мәдени фестивальдер, зерттеу форумдары және спорттық турнирлерді қамтиды.\n\nСтуденттеріміз колледжді мақтанышпен таныстырып, үнемі жүлделі орындарға ие болып, алтын, күміс және қола медальдарды жеңіп алды. Олардың жетістігі – Болашақ колледжіндегі сапалы білімнің, қолдаушы оқытушылардың және белсенді кампус өмірінің нәтижесі.\n\nБарлық марапат иелерін құттықтаймыз және оларды жетістікке жеткізген ұстаздар мен тәлімгерлерге алғыс айтамыз!`
      },
      {
        id: 2,
        title: "Болашақ колледжінде ғылыми-практикалық конференциялар өтеді",
        excerpt: "Колледж жыл сайын ғылыми-практикалық конференциялар, тренингтер және шеберлік сыныптарын ұйымдастырып, зерттеу мен инновация мәдениетін дамытады.",
        image: "/img/college/img2.jpeg",
        category: "Зерттеу",
        author: "Болашақ колледжінің жаңалықтар бөлімі",
        date: "2024 жылғы 20 мамыр",
        readTime: "3 минут",
        featured: true,
        content: `Болашақ колледжі зерттеу мен инновация мәдениетін дамытуға ерекше көңіл бөледі. Оқу жылы барысында колледж ғылыми-практикалық конференциялар, жетекші сарапшылар мен сала мамандарын шақырып, тренингтер мен шеберлік сыныптарын өткізеді.\n\nБұл іс-шаралар ғылым, технология және білім саласындағы соңғы трендтерді талқылауға, студенттер мен оқытушыларға тәжірибе алмасуға мүмкіндік береді. Студенттер өз зерттеу жобаларын ұсынып, сарапшылардан құнды пікір мен тәжірибе алады.\n\nКонференциялар тек академиялық білімді арттырып қана қоймай, студенттерді өз идеяларын жүзеге асыруға және жаңа білімге ұмтылуға шабыттандырады.`
      },
      {
        id: 3,
        title: "Болашақ колледжінің студенттері спорт пен мәдениетте үздік нәтиже көрсетті",
        excerpt: "Студенттер спорттық жарыстарда медальдар, мәдени және шығармашылық фестивальдерде марапаттар жеңіп алып, өздерінің жан-жақты талантын көрсетті.",
        image: "/img/college/img3.jpeg",
        category: "Спорт және мәдениет",
        author: "Болашақ колледжінің жаңалықтар бөлімі",
        date: "2024 жылғы 10 мамыр",
        readTime: "3 минут",
        featured: false,
        content: `Болашақ колледжі студенттерінің жетістіктері тек академияда ғана емес, спорт пен мәдениетте де жоғары. Біздің спортшылар футбол, волейбол, шахмат және жеңіл атлетика бойынша аймақтық және ұлттық жарыстарда медальдар жеңіп алды.\n\nСонымен қатар, студенттер шығармашылық және мәдени фестивальдерде өнер көрсетіп, музыка, би, театр және бейнелеу өнері бойынша марапаттарға ие болды. Бұл жетістіктер колледждің жан-жақты дамуға және әртүрлі таланттарды қолдауға бағытталғанын көрсетеді.\n\nБіз студенттеріміздің ынтасы мен шығармашылығын мақтан тұтамыз!`
      },
      {
        id: 4,
        title: "Болашақ колледжінде мансап форумдары мен жұмыс берушілермен кездесулер өтеді",
        excerpt: "Колледж студенттерді жұмыс берушілермен байланыстыратын мансап форумдары мен кездесулер ұйымдастырып, кәсіби дамуға қолдау көрсетеді.",
        image: "/img/college/img4.jpeg",
        category: "Мансап",
        author: "Болашақ колледжінің жаңалықтар бөлімі",
        date: "2024 жылғы 28 сәуір",
        readTime: "2 минут",
        featured: false,
        content: `Болашақ колледжі студенттерді табысты мансапқа дайындауды басты мақсат етеді. Колледж тұрақты түрде мансап форумдары, жұмыс берушілермен кездесулер және нетворкинг іс-шараларын ұйымдастырады.\n\nБұл іс-шаралар студенттерге еңбек нарығы, мансаптық мүмкіндіктер және кәсіби табысқа жету үшін қажетті дағдылар туралы ақпарат береді. Жұмыс берушілер өз талаптарын бөлісіп, үздік студенттерге тағылымдамалар мен жұмыс орындарын ұсынады.\n\nОсы бастамалар арқылы Болашақ колледжі студенттерге құнды байланыстар орнатуға және болашақ мансабына сенімді қадам жасауға көмектеседі.`
      },
      {
        id: 5,
        title: "Еріктілік акциялар мен студенттік бастамалар",
        excerpt: "Болашақ колледжінің студенттері еріктілік акциялар мен қоғамдық бастамаларға белсенді қатысып, қоғамға оң әсерін тигізуде.",
        image: "/img/college/img5.jpeg",
        category: "Қоғам",
        author: "Болашақ колледжінің жаңалықтар бөлімі",
        date: "2024 жылғы 15 сәуір",
        readTime: "3 минут",
        featured: false,
        content: `Әлеуметтік жауапкершілік пен қоғамға қызмет ету – Болашақ колледжінің басты құндылықтарының бірі. Студенттеріміз экологиялық акциялар, қайырымдылық шаралар, білім беру жобалары және денсаулық сақтау бағдарламаларына белсенді қатысады.\n\nСтуденттік бастамалар жергілікті қоғамдастыққа нақты үлес қосып, көшбасшылық, жанашырлық және командалық рухты дамытады. Колледж бұл бастамаларды ресурстармен, кеңес берумен және үздік жетістіктерді мойындаумен қолдайды.\n\nБіз студенттеріміздің қоғамға оң әсер етіп, жарқын болашақ құруға ұмтылысын мақтан тұтамыз!`
      }
    ],
  },
  ru: {
    heroTitle: 'Новости колледжа Болашак',
    heroDesc: 'Следите за последними новостями, достижениями и событиями колледжа Болашак.',
    categories: ['Все', 'Наука', 'Студенческая жизнь', 'Академия', 'Спорт', 'Выпускники'],
    searchPlaceholder: 'Поиск по новостям...',
    featuredStories: 'Избранные новости',
    latestNews: 'Последние новости',
    readMore: 'Подробнее',
    getInformed: 'Будьте в курсе',
    getInformedDesc: 'Подпишитесь на новости колледжа Болашак и получайте свежие новости прямо на почту.',
    subscribe: 'Подписаться',
    newsArticles: [],
  }
};

const News = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [openArticle, setOpenArticle] = useState(null);
  
  const categories = t.categories;
  // Always use the Kazakh newsArticles for all languages
  const newsArticles = TRANSLATIONS.kz.newsArticles;

  const filteredArticles = selectedCategory === 'All' 
    ? newsArticles 
    : newsArticles.filter(article => article.category === selectedCategory);

  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

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

      {/* Search and Categories */}
      <div className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-red-700 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      {selectedCategory === 'All' && (
        <div className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-fade-in">{t.featuredStories}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article, index) => (
                <article
                  key={article.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in cursor-pointer"
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onClick={() => setOpenArticle(article)}
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                      <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                        {article.category}
                      </span>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{article.date}</span>
                      </div>
                      <span>{article.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 hover:text-red-700 transition-colors cursor-pointer">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">{article.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      
                      <button
                        className="inline-flex items-center text-red-700 hover:text-red-800 font-medium"
                        onClick={e => { e.stopPropagation(); setOpenArticle(article); }}
                      >
                        {t.readMore}
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Regular Articles */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 animate-fade-in">
            {selectedCategory === 'All' ? t.latestNews : `${selectedCategory} News`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article, index) => (
              <article
                key={article.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setOpenArticle(article)}
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 hover:text-red-700 transition-colors cursor-pointer">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold mb-4">{t.getInformed}</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t.getInformedDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-700 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-700"
              />
              <button className="bg-white text-red-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                {t.subscribe}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* News Fullscreen Modal */}
      <Dialog open={!!openArticle} onOpenChange={v => !v && setOpenArticle(null)}>
        <DialogContent className="w-full max-w-4xl h-[90vh] sm:rounded-2xl p-0 overflow-hidden bg-white animate-fade-in-up">
          {openArticle && (
            <div className="flex flex-col h-full">
              <div className="relative w-full h-80 bg-gray-200">
                <img
                  src={openArticle.image}
                  alt={openArticle.title}
                  className="w-full h-full object-cover object-center"
                />
                <span className="absolute top-4 left-4 bg-red-700 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                  {openArticle.category}
                </span>
              </div>
              <div className="flex-1 flex flex-col p-8 overflow-y-auto">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>{openArticle.date}</span>
                  <User className="w-4 h-4 ml-4" />
                  <span>{openArticle.author}</span>
                  <span className="ml-4">{openArticle.readTime}</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 font-georgia">
                  {openArticle.title}
                </h2>
                {openArticle.content.split('\n').map((para, idx) => (
                  <p key={idx} className="text-lg text-gray-700 leading-relaxed font-georgia mb-4">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default News;
