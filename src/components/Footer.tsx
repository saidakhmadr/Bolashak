import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const footerSections = [
    {
      title: 'Schools',
      links: [
        'Business',
        'Earth, Energy & Environmental Sciences',
        'Education',
        'Engineering',
        'Humanities & Sciences',
        'Law',
        'Medicine'
      ]
    },
    {
      title: 'Departments',
      links: [
        'Aeronautics & Astronautics',
        'Anthropology',
        'Art & Art History',
        'Biology',
        'Chemistry',
        'Computer Science',
        'Economics'
      ]
    },
    {
      title: 'Research',
      links: [
        'Research Centers',
        'Libraries',
        'Health Care',
        'Woods Institute',
        'Precourt Institute',
        'Bio-X',
        'HAI'
      ]
    },
    {
      title: 'Campus Life',
      links: [
        'Athletics',
        'Arts',
        'Student Life',
        'Residential Education',
        'Dining',
        'Transportation',
        'Safety'
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-semibold mb-4 text-red-400">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-sm hover:underline"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media and Contact */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <h4 className="text-sm font-medium">Follow Bolashak College:</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Youtube className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors hover:scale-110 transform duration-200">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">Bolashak College</p>
              <p className="text-sm text-gray-400">Turkestan, Kazakhstan</p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 Bolashak College. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
