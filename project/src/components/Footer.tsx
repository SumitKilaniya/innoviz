import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, Newspaper } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Information */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Newspaper className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-bold text-white">FactVerse</h3>
            </div>
            <p className="mb-4">
              Your trusted source for factual, unbiased news and information. We're committed to bringing you the truth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/fake-news-detector" className="text-gray-400 hover:text-white transition-colors">Fake News Detector</Link>
              </li>
              <li>
                <Link to="/category/politics" className="text-gray-400 hover:text-white transition-colors">Politics</Link>
              </li>
              <li>
                <Link to="/category/technology" className="text-gray-400 hover:text-white transition-colors">Technology</Link>
              </li>
              <li>
                <Link to="/category/science" className="text-gray-400 hover:text-white transition-colors">Science</Link>
              </li>
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Categories</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/category/business" className="text-gray-400 hover:text-white transition-colors">Business</Link>
              </li>
              <li>
                <Link to="/category/health" className="text-gray-400 hover:text-white transition-colors">Health</Link>
              </li>
              <li>
                <Link to="/category/entertainment" className="text-gray-400 hover:text-white transition-colors">Entertainment</Link>
              </li>
              <li>
                <Link to="/category/sports" className="text-gray-400 hover:text-white transition-colors">Sports</Link>
              </li>
              <li>
                <Link to="/category/world" className="text-gray-400 hover:text-white transition-colors">World</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                <span>123 News Street, Media City, IN 46032</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-blue-400 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-blue-400 flex-shrink-0" />
                <span>info@factverse.com</span>
              </li>
            </ul>
            <Link to="/contact" className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          <p>&copy; {currentYear} FactVerse. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;