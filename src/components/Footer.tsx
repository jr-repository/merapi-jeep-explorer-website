
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-merapi-900 text-white pt-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img 
              src="/asset/logo.png" 
              alt="Jeep Wisata Merapi" 
              className="h-16 mb-4" 
            />
            <p className="text-merapi-100 mb-4">
              Explore the majesty of Mount Merapi with our professional and exciting Jeep adventure tours.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-merapi-700 p-2 rounded-full hover:bg-merapi-600 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-merapi-700 p-2 rounded-full hover:bg-merapi-600 transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-merapi-100 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-merapi-100 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-merapi-100 hover:text-white transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-merapi-100 hover:text-white transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/contact" className="text-merapi-100 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Business Hours</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-merapi-400" />
                <div>
                  <p className="text-merapi-100">Monday - Friday</p>
                  <p className="text-white">8:00 AM - 6:00 PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="mr-2 h-5 w-5 text-merapi-400" />
                <div>
                  <p className="text-merapi-100">Saturday - Sunday</p>
                  <p className="text-white">7:00 AM - 8:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-merapi-400 flex-shrink-0" />
                <p className="text-merapi-100">Monumen Yogya Kembali, Yogyakarta, Indonesia</p>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-merapi-400" />
                <a href="tel:+6281573635143" className="text-merapi-100 hover:text-white transition-colors">
                  +62 815-7363-5143
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-merapi-400" />
                <a href="mailto:info@jeepwisatamerapi.com" className="text-merapi-100 hover:text-white transition-colors">
                  info@jeepwisatamerapi.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-merapi-700 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-merapi-200 text-sm">
              © {currentYear} Jeep Wisata Merapi. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-4 text-sm text-merapi-200">
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
