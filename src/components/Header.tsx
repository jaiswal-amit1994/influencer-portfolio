"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";

const Header = () => {
  const navItems = [
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Collaborations", path: "/collaborations" },
    { name: "Contact", path: "/contact" },
  ];

  const socialIcons = [
    { icon: <FaInstagram />, url: "https://instagram.com", aria: "Instagram" },
    { icon: <FaYoutube />, url: "https://youtube.com", aria: "YouTube" },
    { icon: <FaTiktok />, url: "https://tiktok.com", aria: "TikTok" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <motion.header
      initial="hidden"
      animate="show"
      variants={container}
      className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo/Name */}
        <motion.div variants={item} className="mb-4 md:mb-0">
          <Link href="/">
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent"
            >
              Aisha Sharma
            </motion.h1>
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          variants={container}
          className="flex-1 flex justify-center"
        >
          <ul className="flex space-x-1 md:space-x-8">
            {navItems.map((link) => (
              <motion.li key={link.name} variants={item}>
                <Link
                  href={link.path}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  style={{ display: "inline-block" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#ec4899")}
                  onMouseLeave={e => (e.currentTarget.style.color = "")}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

        </motion.nav>

        {/* Right Section */}
        <motion.div
          variants={container}
          className="flex items-center space-x-4 mt-4 md:mt-0"
        >
          {/* Social Icons */}
          <div className="flex space-x-3">
            {socialIcons.map((social, index) => (
              <motion.a
                key={index}
                variants={item}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.aria}
                whileHover={{
                  y: -3,
                  scale: 1.2,
                  color: "#ec4899",
                }}
                className="text-gray-600 hover:text-gray-900 text-xl"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div variants={item}>
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 5px 15px rgba(236, 72, 153, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition-all"
            >
              Hire Me
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;