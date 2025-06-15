"use client"
import { motion } from "framer-motion";
import { FaInstagram, FaYoutube, FaTiktok, FaHeart, FaArrowUp } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="relative bg-gray-50 pt-24 pb-16 overflow-hidden">
      {/* Geometric Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-60 -right-40 w-80 h-80 bg-pink-100 rounded-full opacity-40 blur-3xl"></div>
        
        <div className="absolute top-1/4 right-20 w-24 h-24 border-4 border-purple-200 rounded-full"></div>
        <div className="absolute bottom-1/3 left-24 w-16 h-16 border-4 border-pink-200 rounded-full"></div>
        
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2">
          <div className="w-12 h-12 bg-pink-500 opacity-10 rotate-45"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Newsletter Section */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-16 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Join My Community</h3>
              <p className="text-gray-600">
                Get exclusive content, travel tips, and behind-the-scenes updates
              </p>
            </div>
            
            <div className="md:w-1/2 w-full">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 w-[150] px-4 py-3 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-r-xl font-medium"
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <Link href="/">
              <motion.h2 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent mb-4 inline-block"
              >
                StyleByAisha
              </motion.h2>
            </Link>
            <p className="text-gray-600 mb-6">
              Creating authentic content that inspires travel, lifestyle, and mindful living.
            </p>
            
            {/* Social Links - Circular Design */}
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute inset-0 w-32 h-32 border-2 border-purple-200 rounded-full animate-ping opacity-20"></div>
                <div className="w-32 h-32 border-2 border-pink-100 rounded-full flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <span className="text-gray-600 text-sm mb-2">Follow Me</span>
                    <div className="flex gap-3">
                      <motion.a
                        whileHover={{ y: -5, scale: 1.2 }}
                        href="https://instagram.com/stylebyaisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        <FaInstagram className="text-xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -5, scale: 1.2 }}
                        href="https://youtube.com/stylebyaisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="text-gray-600 hover:text-red-600 transition-colors"
                      >
                        <FaYoutube className="text-xl" />
                      </motion.a>
                      <motion.a
                        whileHover={{ y: -5, scale: 1.2 }}
                        href="https://tiktok.com/@stylebyaisha"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="TikTok"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        <FaTiktok className="text-xl" />
                      </motion.a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Me", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Collaborations", path: "/collaborations" },
                { name: "Services", path: "/services" },
                { name: "Contact", path: "/contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {[
                { name: "Privacy Policy", path: "/privacy" },
                { name: "Terms of Service", path: "/terms" },
                { name: "Cookie Policy", path: "/cookies" },
                { name: "Disclosure", path: "/disclosure" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    href={link.path}
                    className="text-gray-600 hover:text-purple-600 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-gray-800 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:hello@stylebyaisha.com" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  hello@stylebyaisha.com
                </a>
              </li>
              <li>
                <a 
                  href="tel:+11234567890" 
                  className="text-gray-600 hover:text-purple-600 transition-colors"
                >
                  +1 (123) 456-7890
                </a>
              </li>
              <li className="text-gray-600">
                New York, NY
              </li>
              <li className="mt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm"
                >
                  Download Media Kit
                </motion.button>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 text-sm order-2 md:order-1">
            © {new Date().getFullYear()} Aisha sharma. All rights reserved.
          </div>
          
          <div className="flex items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-2 text-gray-600">
              <FaHeart className="text-pink-500" />
              <span> Developed by <a href="https://www.linkedin.com/in/amit-jaiswal-103138344/" className="underline hover:text-purple-500">Amit Jaiswal</a></span>
            </div>
            
            <motion.button
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="hidden md:flex items-center gap-2 bg-white border border-gray-300 px-4 py-2 rounded-full text-gray-600 hover:bg-gray-100 transition-all"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <FaArrowUp className="text-sm" />
            </motion.button>
          </div>
        </div>
        
        {/* Floating Back to Top (Mobile) */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 md:hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-50"
          aria-label="Back to top"
        >
          <FaArrowUp />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;