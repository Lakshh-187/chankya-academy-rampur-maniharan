
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">CIA</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Chanakya International Academy</h3>
                <p className="text-gray-300">Rampur Maniharan</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 text-sm lg:text-base">
              Empowering minds, building futures. A premier educational institution 
              committed to excellence in academics and character development.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">Rampur Maniharan, India</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm lg:text-base">info@chanakyaacademy.edu</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><Link to="/cia-official" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">CIA Official</Link></li>
              <li><Link to="/establishments" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Establishments</Link></li>
              <li><Link to="/management" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Management</Link></li>
              <li><Link to="/facilities" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Facilities</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Gallery</Link></li>
              <li><Link to="/mandatory-disclosure" className="text-gray-300 hover:text-white transition-colors text-sm lg:text-base">Mandatory Disclosure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </a>
            </div>
            <div>
              <Link 
                to="/legal" 
                className="text-gray-300 hover:text-white transition-colors block mb-2 text-sm lg:text-base"
              >
                Legal Information
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm lg:text-base text-center md:text-left">
              © 2024 Chanakya International Academy, Rampur Maniharan. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Design & Powered by <span className="text-blue-400 font-semibold">Uniford Foundation</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
