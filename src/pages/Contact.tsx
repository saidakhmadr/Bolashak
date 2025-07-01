import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLanguage } from '../App';

const TRANSLATIONS = {
  en: {
    heroTitle: 'Contact Us',
    heroDesc: "Get in touch with Bolashak College. We're here to help with information about admissions, academics, and campus life.",
    getInTouch: 'Get in Touch',
    getInTouchDesc: 'Multiple ways to connect with the Bolashak College community',
    sendMessage: 'Send us a Message',
    fullName: 'Full Name',
    email: 'Email Address',
    subject: 'Subject',
    selectSubject: 'Select a subject',
    admissionsInquiry: 'Admissions Inquiry',
    academicPrograms: 'Academic Programs',
    researchOpportunities: 'Research Opportunities',
    campusLife: 'Campus Life',
    financialAid: 'Financial Aid',
    other: 'Other',
    message: 'Message',
    messagePlaceholder: 'Please provide details about your inquiry...',
    submit: 'Submit',
    // ...contactInfo, departments, etc.
  },
  kz: {
    heroTitle: 'Байланыс',
    heroDesc: 'Болашақ колледжімен байланысыңыз. Қабылдау, академиялық бағдарламалар және кампус өмірі туралы ақпарат алу үшін бізге хабарласыңыз.',
    getInTouch: 'Байланысу',
    getInTouchDesc: 'Болашақ колледжімен байланысудың бірнеше жолы',
    sendMessage: 'Хабарлама жіберу',
    fullName: 'Толық аты-жөні',
    email: 'Электрондық пошта',
    subject: 'Тақырып',
    selectSubject: 'Тақырыпты таңдаңыз',
    admissionsInquiry: 'Қабылдау сұранысы',
    academicPrograms: 'Академиялық бағдарламалар',
    researchOpportunities: 'Зерттеу мүмкіндіктері',
    campusLife: 'Кампус өмірі',
    financialAid: 'Қаржылық көмек',
    other: 'Басқа',
    message: 'Хабарлама',
    messagePlaceholder: 'Сұранысыңыз туралы толық ақпарат беріңіз...',
    submit: 'Жіберу',
    // ...contactInfo, departments, etc.
  },
  ru: {
    heroTitle: 'Связаться с нами',
    heroDesc: 'Свяжитесь с колледжем Болашак. Мы поможем с информацией о поступлении, учебе и жизни на кампусе.',
    getInTouch: 'Связаться',
    getInTouchDesc: 'Несколько способов связаться с колледжем Болашак',
    sendMessage: 'Отправить сообщение',
    fullName: 'ФИО',
    email: 'Электронная почта',
    subject: 'Тема',
    selectSubject: 'Выберите тему',
    admissionsInquiry: 'Вопрос о поступлении',
    academicPrograms: 'Академические программы',
    researchOpportunities: 'Возможности для исследований',
    campusLife: 'Студенческая жизнь',
    financialAid: 'Финансовая помощь',
    other: 'Другое',
    message: 'Сообщение',
    messagePlaceholder: 'Пожалуйста, опишите ваш вопрос...',
    submit: 'Отправить',
    // ...contactInfo, departments, etc.
  }
};

const Contact = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Turkestan, Kazakhstan"
      ]
    },
    {
      icon: Phone,
      title: "Phone",
      details: [
        "Main: +7 (72533) 5-55-55",
        "Admissions: +7 (72533) 5-55-56",
        "Emergency: +7 (72533) 5-55-57"
      ]
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "info@bolashakcollege.kz",
        "admissions@bolashakcollege.kz",
        "media@bolashakcollege.kz"
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const departments = [
    { name: "Admissions Office", email: "admissions@bolashakcollege.kz", phone: "+7 (72533) 5-55-56" },
    { name: "Registrar", email: "registrar@bolashakcollege.kz", phone: "+7 (72533) 5-55-58" },
    { name: "Financial Aid", email: "finaid@bolashakcollege.kz", phone: "+7 (72533) 5-55-59" },
    { name: "Student Affairs", email: "studentaffairs@bolashakcollege.kz", phone: "+7 (72533) 5-55-60" },
    { name: "Research Office", email: "research@bolashakcollege.kz", phone: "+7 (72533) 5-55-61" },
    { name: "Alumni Relations", email: "alumni@bolashakcollege.kz", phone: "+7 (72533) 5-55-62" }
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

      {/* Contact Information */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.getInTouch}</h2>
            <p className="text-xl text-gray-600">
              {t.getInTouchDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="text-center bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-700 text-white rounded-full mb-6">
                  <info.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">{t.sendMessage}</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t.email}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-colors"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.subject}
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-colors"
                    required
                  >
                    <option value="">{t.selectSubject}</option>
                    <option value="admissions">{t.admissionsInquiry}</option>
                    <option value="academics">{t.academicPrograms}</option>
                    <option value="research">{t.researchOpportunities}</option>
                    <option value="campus">{t.campusLife}</option>
                    <option value="financial">{t.financialAid}</option>
                    <option value="other">{t.other}</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-700 focus:border-transparent transition-colors resize-none"
                    placeholder={t.messagePlaceholder}
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>{t.submit}</span>
                </button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Find Us</h2>
              <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center mb-8 overflow-hidden">
                <img
                  src="/img/map.png"
                  alt="Bolashak College Campus Map"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Campus Information</h3>
                <div className="space-y-3 text-gray-600">
                  <p>• Modern campus in the heart of Turkestan</p>
                  <p>• Free campus tours available Monday-Friday</p>
                  <p>• Visitor parking available at various locations</p>
                  <p>• Accessible facilities and services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Department Contacts */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Department Contacts</h2>
            <p className="text-xl text-gray-600">
              Connect directly with specific departments for specialized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{dept.name}</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-red-700" />
                    <a href={`mailto:${dept.email}`} className="hover:text-red-700 transition-colors">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-red-700" />
                    <a href={`tel:${dept.phone}`} className="hover:text-red-700 transition-colors">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
