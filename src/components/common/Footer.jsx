import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt,FaChevronRight,FaRegNewspaper} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          
          <div className="col-span-2 md:col-span-1 space-y-4">
            <div className="text-2xl font-bold text-white">TeamFlow</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Online Team, Projects & Task Management Software for modern teams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="Twitter">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="LinkedIn">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition" aria-label="GitHub">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Product Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Product</h4>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'Use Cases', 'Integrations', 'API Docs', 'Roadmap'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition flex items-center group"
                  >
                    <FaChevronRight className="h-2 w-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Company Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Careers', 'Blog', 'Press Kit', 'Partners', 'News'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-white text-sm transition flex items-center group"
                  >
                    <FaChevronRight className="h-2 w-2 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact & Support */}
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <FaEnvelope className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <a href="mailto:support@teamflow.com" className="text-gray-400 hover:text-white text-sm transition">
                  support@teamflow.com
                </a>
              </li>
              <li className="flex items-start">
                <FaPhone className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-white text-sm transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="h-4 w-4 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Tokyo, JP</span>
              </li>
            </ul>
            <button className="w-full bg-primary hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-lg transition">
              Contact Support
            </button>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 pt-8 mb-8 hidden md:block">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="flex items-center gap-2 mb-2">
                <FaRegNewspaper className="text-primary" />
                <h4 className="text-white font-semibold">Product Updates & Tips</h4>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Get the latest TeamFlow updates, productivity tips, and team management insights.
              </p>
            </div>
            <div className="flex w-full md:w-auto">
              <input
                type="email"
                placeholder="Your work email"
                className="bg-gray-900 text-white px-4 py-3 rounded-l-lg w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-primary"
                aria-label="Email for newsletter"
              />
              <button className="bg-primary hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg transition font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Legal & Copyright*/}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
              © 2024 TeamFlow, Inc. All rights reserved.
              <span className="block md:inline md:ml-4 text-gray-600">
                Online Team, Projects & Task Management Software
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security', 'Status'].map((item) => (
                <a 
                  key={item} 
                  href="#" 
                  className="text-gray-500 hover:text-gray-300 text-sm transition"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Mobile-only CTA (replaces newsletter on mobile) */}
        <div className="mt-8 pt-6 border-t border-gray-800 md:hidden">
          <div className="text-center">
            <h4 className="text-white font-semibold mb-3">Get TeamFlow Updates</h4>
            <div className="flex">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-gray-900 text-white px-4 py-2.5 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button className="bg-primary hover:bg-blue-700 text-white px-4 py-2.5 rounded-r-lg transition text-sm font-medium">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;