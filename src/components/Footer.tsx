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
                <svg fill="#000000" height="40px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479.545 479.545" xmlnsXlink="http://www.w3.org/1999/xlink" enableBackground="new 0 0 479.545 479.545">
                <g>
                  <path d="m410.325,249.771h7.691c4.193,12.526 16.03,21.581 29.948,21.581 17.414,0 31.581-14.167 31.581-31.58 0-17.414-14.167-31.581-31.581-31.581-13.918,0-25.754,9.055-29.948,21.58h-7.692c-1.382-23.83-7.67-46.363-17.867-66.605l6.681-3.856c5.822,5.149 13.33,7.941 20.987,7.941 5.354,0 10.777-1.361 15.737-4.225 15.08-8.707 20.265-28.059 11.559-43.139-8.706-15.08-28.056-20.266-43.14-11.56-7.306,4.218-12.53,11.028-14.714,19.176-1.29,4.813-1.417,9.752-0.444,14.495l-6.696,3.865c-12.783-19.353-29.392-35.962-48.745-48.745l3.873-6.706c2.076,0.422 4.173,0.636 6.26,0.636 10.922,0 21.561-5.665 27.403-15.784 4.218-7.305 5.338-15.816 3.155-23.964-2.184-8.148-7.409-14.958-14.715-19.176-15.078-8.706-34.432-3.522-43.14,11.559 0,0 0,0 0,0.001-6.96,12.054-5.035,26.832 3.716,36.727l-3.856,6.677c-20.242-10.197-42.774-16.484-66.603-17.867v-7.692c12.524-4.195 21.577-16.03 21.577-29.947 0-17.413-14.167-31.58-31.58-31.58-17.414,0-31.581,14.167-31.581,31.58 0,13.92 9.057,25.757 21.584,29.95v7.69c-23.83,1.382-46.364,7.669-66.607,17.866l-3.849-6.667c3.214-3.621 5.571-7.96 6.861-12.772 2.184-8.148 1.063-16.659-3.155-23.964v0.001c-4.218-7.305-11.027-12.531-19.176-14.714-8.147-2.183-16.657-1.063-23.964,3.155-7.306,4.218-12.53,11.028-14.714,19.176-2.184,8.148-1.063,16.659 3.155,23.964 5.843,10.12 16.479,15.784 27.402,15.784 2.089,0 4.187-0.214 6.265-0.637l3.871,6.705c-19.354,12.783-35.964,29.392-48.748,48.746l-6.697-3.866c0.973-4.742 0.845-9.68-0.444-14.492-2.184-8.148-7.409-14.958-14.715-19.176-15.08-8.707-34.433-3.521-43.14,11.559-4.218,7.305-5.338,15.816-3.155,23.964 2.184,8.148 7.409,14.958 14.715,19.176 4.866,2.81 10.267,4.245 15.738,4.245 2.743,0 5.505-0.361 8.226-1.09 4.814-1.29 9.155-3.649 12.776-6.865l6.665,3.848c-10.198,20.243-16.486,42.777-17.868,66.607h-7.691c-4.194-12.525-16.03-21.58-29.948-21.58-17.411-0.003-31.578,14.164-31.578,31.577 0,17.413 14.167,31.58 31.58,31.58 13.919,0 25.756-9.055 29.949-21.581h7.69c1.382,23.829 7.669,46.362 17.866,66.604l-6.667,3.849c-3.62-3.213-7.959-5.571-12.771-6.86-8.146-2.183-16.658-1.063-23.964,3.155-7.306,4.218-12.531,11.028-14.715,19.176-2.183,8.148-1.063,16.658 3.155,23.964 5.844,10.12 16.48,15.784 27.403,15.784 5.354,0 10.776-1.361 15.736-4.225 7.306-4.218 12.531-11.028 14.715-19.176 1.29-4.815 1.417-9.754 0.443-14.498l6.695-3.865c12.782,19.353 29.391,35.962 48.744,48.746l-3.874,6.71c-12.943-2.628-26.699,3.095-33.657,15.147-4.218,7.305-5.339,15.816-3.155,23.964 2.184,8.148 7.408,14.958 14.714,19.176 4.962,2.864 10.383,4.225 15.737,4.225 10.922-0.001 21.561-5.665 27.402-15.783 4.218-7.305 5.339-15.816 3.155-23.964-1.291-4.815-3.65-9.158-6.867-12.779l3.847-6.663c20.245,10.2 42.781,16.488 66.615,17.87v7.69c-12.527,4.193-21.584,16.03-21.584,29.95 0,17.413 14.167,31.58 31.581,31.58 17.413,0 31.58-14.167 31.58-31.58 0-13.918-9.053-25.753-21.577-29.947v-7.692c23.83-1.383 46.363-7.67 66.605-17.868l3.848,6.664c-3.216,3.621-5.575,7.963-6.865,12.777-2.183,8.148-1.063,16.658 3.155,23.964 5.844,10.12 16.48,15.783 27.403,15.783 5.354,0 10.776-1.361 15.736-4.225 7.306-4.218 12.531-11.028 14.715-19.176 2.183-8.148 1.063-16.658-3.155-23.964v-0.001c-6.959-12.052-20.718-17.775-33.661-15.146l-3.874-6.709c19.354-12.784 35.963-29.393 48.746-48.747l6.695,3.866c-0.974,4.744-0.847,9.683 0.443,14.497 2.184,8.148 7.408,14.958 14.714,19.176 4.962,2.864 10.383,4.225 15.737,4.225 10.922,0 21.561-5.665 27.402-15.784 8.707-15.081 3.521-34.433-11.559-43.139-12.056-6.959-26.831-5.035-36.724,3.713l-6.679-3.856c10.198-20.246 16.485-42.778 17.867-66.608zm-1.439-117.092c0.801-2.988 2.717-5.485 5.396-7.032 5.53-3.192 12.627-1.292 15.819,4.238 3.192,5.53 1.291,12.627-4.238,15.819-5.533,3.193-12.627,1.291-15.819-4.239-1.548-2.677-1.959-5.798-1.158-8.786zm-75.047-78.996c3.192-5.53 10.289-7.433 15.819-4.239 2.679,1.547 4.596,4.044 5.396,7.031 0.801,2.988 0.391,6.109-1.156,8.787-3.193,5.53-10.291,7.431-15.819,4.24-5.53-3.192-7.433-10.289-4.24-15.819zm-208.192,11.58c-1.547-2.678-1.958-5.799-1.157-8.787s2.717-5.485 5.396-7.032c1.784-1.03 3.765-1.556 5.771-1.556 1.006,0 2.019,0.132 3.017,0.399 2.987,0.801 5.484,2.717 7.031,5.396v0.001c1.547,2.678 1.958,5.799 1.157,8.787-0.801,2.988-2.717,5.485-5.396,7.032-5.529,3.192-12.625,1.29-15.819-4.24zm-56.145,76.204c-1.547,2.679-4.044,4.595-7.032,5.395-2.987,0.8-6.109,0.389-8.787-1.157-2.679-1.547-4.596-4.044-5.396-7.031-0.801-2.988-0.391-6.109 1.156-8.787 2.143-3.712 6.043-5.788 10.049-5.788 1.963,0 3.952,0.499 5.771,1.549 2.679,1.547 4.596,4.044 5.396,7.031 0.8,2.988 0.39,6.109-1.157,8.788zm1.156,205.399c-0.8,2.988-2.717,5.485-5.396,7.032-5.532,3.192-12.627,1.29-15.819-4.239-1.547-2.679-1.957-5.8-1.156-8.787 0.8-2.988 2.717-5.485 5.396-7.031 1.784-1.03 3.765-1.556 5.771-1.556 1.006,0 2.019,0.132 3.016,0.4 2.988,0.801 5.485,2.717 7.032,5.395 1.547,2.677 1.957,5.798 1.156,8.786zm75.047,78.996c-3.193,5.529-10.287,7.431-15.819,4.239-2.679-1.547-4.595-4.044-5.396-7.032s-0.39-6.109 1.157-8.787c2.143-3.711 6.043-5.788 10.049-5.788 1.963,0 3.951,0.499 5.771,1.549 2.679,1.547 4.595,4.044 5.396,7.032s0.389,6.108-1.158,8.787zm208.192-11.581c1.547,2.679 1.957,5.8 1.156,8.788-0.8,2.988-2.717,5.485-5.396,7.032-5.529,3.193-12.626,1.292-15.819-4.239-1.547-2.679-1.957-5.8-1.156-8.788 0.8-2.988 2.717-5.485 5.396-7.032 1.819-1.05 3.808-1.549 5.771-1.549 4.005,0.001 7.905,2.078 10.048,5.788zm56.146-76.203c2.143-3.711 6.043-5.788 10.048-5.788 1.964,0 3.953,0.499 5.771,1.549 5.529,3.193 7.431,10.289 4.238,15.819-3.192,5.529-10.288,7.431-15.819,4.239-2.679-1.547-4.595-4.044-5.396-7.032s-0.389-6.108 1.158-8.787zm-34.935-31.72l-25.526-14.738c6.104-12.875 10.008-26.986 11.225-41.848h29.478c-1.328,20.196-6.647,39.318-15.177,56.586zm-135.336,34.864c-55.939,0-101.45-45.51-101.45-101.45s45.511-101.45 101.45-101.45 101.449,45.51 101.449,101.45-45.509,101.45-101.449,101.45zm208.192-113.03c6.386,0 11.581,5.195 11.581,11.581s-5.195,11.58-11.581,11.58-11.58-5.195-11.58-11.58 5.194-11.581 11.58-11.581zm-57.679,1.579h-29.478c-1.217-14.864-5.123-28.977-11.229-41.854l25.527-14.735c8.532,17.268 13.852,36.391 15.18,56.589zm-25.203-73.896l-25.533,14.739c-8.301-11.939-18.686-22.323-30.625-30.624l14.743-25.53c16.346,10.98 30.435,25.069 41.415,41.415zm-58.723-51.438l-14.74,25.525c-12.874-6.103-26.984-10.007-41.844-11.225v-29.478c20.197,1.329 39.318,6.648 56.584,15.178zm-66.587-84.437c6.386,0 11.58,5.195 11.58,11.58s-5.194,11.581-11.58,11.581-11.581-5.195-11.581-11.581 5.196-11.58 11.581-11.58zm-9.997,69.259v29.478c-14.863,1.217-28.976,5.122-41.852,11.226l-14.737-25.526c17.268-8.531 36.391-13.85 56.589-15.178zm-73.896,25.201l14.74,25.532c-11.94,8.3-22.324,18.684-30.625,30.624l-25.532-14.741c10.981-16.347 25.07-30.436 41.417-41.415zm-51.44,58.721l25.526,14.737c-6.105,12.877-10.011,26.989-11.228,41.853h-29.478c1.328-20.198 6.648-39.321 15.18-56.59zm-72.859,78.172c-6.386,0-11.58-5.195-11.58-11.58s5.194-11.581 11.58-11.581 11.581,5.195 11.581,11.581-5.195,11.58-11.581,11.58zm57.679-1.582h29.478c1.217,14.863 5.122,28.976 11.227,41.853l-25.527,14.735c-8.531-17.267-13.85-36.39-15.178-56.588zm25.201,73.896l25.533-14.739c8.3,11.938 18.683,22.322 30.621,30.622l-14.742,25.531c-16.344-10.98-30.433-25.069-41.412-41.414zm58.719,51.438l14.738-25.525c12.878,6.106 26.993,10.012 41.858,11.229v29.478c-20.2-1.329-39.326-6.649-56.596-15.182zm66.593,84.44c-6.386,0-11.581-5.195-11.581-11.58s5.195-11.581 11.581-11.581 11.58,5.195 11.58,11.581-5.194,11.58-11.58,11.58zm10.003-69.259v-29.478c14.862-1.218 28.974-5.122 41.849-11.227l14.738,25.526c-17.267,8.53-36.389,13.85-56.587,15.179zm73.894-25.203l-14.741-25.531c11.941-8.301 22.326-18.687 30.626-30.628l25.531,14.742c-10.979,16.346-25.069,30.436-41.416,41.417z" />
                  <path d="m239.772,205.058c-19.142,0-34.715,15.573-34.715,34.715s15.573,34.715 34.715,34.715 34.715-15.573 34.715-34.715-15.573-34.715-34.715-34.715zm0,49.429c-8.114,0-14.715-6.601-14.715-14.715s6.601-14.715 14.715-14.715 14.715,6.601 14.715,14.715-6.6,14.715-14.715,14.715z" />
                </g>
              </svg>
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