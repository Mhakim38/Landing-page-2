'use client';

import React from 'react';
import { Facebook, Instagram, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-apb-red/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-apb-gold/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="https://gaji-apb.vercel.app/src/APB.png" 
                alt="Ayam Penyet Best Logo" 
                className="h-16 w-auto brightness-110"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ayam Penyet Best
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Authentic Indonesian cuisine serving the best Ayam Penyet in town.
              Fresh ingredients, traditional recipes, unforgettable taste.
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-full hover:from-red-500 hover:to-red-600 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-3 rounded-full hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-gray-400 hover:text-apb-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-apb-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Home
                </a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-apb-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-apb-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Menu
                </a>
              </li>
              <li>
                <a href="#promotions" className="text-gray-400 hover:text-apb-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-apb-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Promotions
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-apb-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-apb-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-apb-gold transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-apb-gold transition-all duration-300 mr-0 group-hover:mr-2"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-red-600 to-red-700 p-2 rounded-lg group-hover:from-red-500 group-hover:to-red-600 transition-all duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  123 Jalan Raya, Jakarta
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 p-2 rounded-lg group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                  <Phone size={18} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  +62 812-3456-7890
                </span>
              </li>
              <li className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-red-600 to-yellow-500 p-2 rounded-lg group-hover:shadow-lg transition-all duration-300">
                  <Mail size={18} className="text-white" />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  info@ayampenyetbest.com
                </span>
              </li>
            </ul>

            {/* Opening Hours */}
            <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <h5 className="text-sm font-semibold text-apb-gold mb-2">Opening Hours</h5>
              <p className="text-gray-400 text-sm">Mon - Sun: 10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Ayam Penyet Best. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-500 hover:text-apb-gold transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 hover:text-apb-gold transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
