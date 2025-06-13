"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center pt-16 pb-20">
      {/* Background elements */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0"
      >
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50" />
        
        {/* Animated shapes */}
        <motion.div 
          animate={{ 
            x: [0, -30, 0],
            y: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-4 left-4 w-16 h-16 md:top-20 md:left-10 md:w-72 md:h-72 rounded-full bg-pink-200 opacity-40 blur-xl md:blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            x: [0, 40, 0],
            y: [0, -30, 0],
            rotate: [0, -8, 0],
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-4 right-4 w-20 h-20 md:bottom-10 md:right-10 md:w-80 md:h-80 rounded-full bg-purple-200 opacity-30 blur-xl md:blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 z-10">
        {/* Mobile: Image on top, then text */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Image Content - Top on mobile */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative w-full max-w-xs md:max-w-md lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0"
          >
            <div className="relative w-full">
              {/* Main image */}
              <div className="relative aspect-square rounded-2xl md:rounded-[2rem] overflow-hidden shadow-xl lg:shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1624610262559-6cb0724ecc3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Aisha Sharma - Travel & Lifestyle Influencer"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-2xl md:rounded-[2rem]"
                />
              </div>
            
              
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-3 -right-3 bg-pink-500 w-12 h-12 rounded-xl rotate-12 z-[-1] md:-top-6 md:-right-6 md:w-24 md:h-24 md:rounded-2xl"
              />
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 bg-purple-500 w-16 h-16 rounded-xl -rotate-12 z-[-1] md:-bottom-6 md:-left-6 md:w-32 md:h-32 md:rounded-2xl"
              />
              
              {/* Stats badge */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-3 right-4 bg-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 text-sm md:text-base md:-bottom-4 md:right-8 md:px-6 md:py-3"
              >
                <div className="h-2 w-2 bg-green-500 rounded-full animate-pulse md:h-3 md:w-3"></div>
                <span className="font-bold text-gray-800">1M+ Followers</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content - Below image on mobile, left on desktop */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left w-full lg:w-1/2 order-2 lg:order-1"
          >
            <motion.h1 
              variants={item}
              className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Aisha Sharma
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={item}
              className="text-lg md:text-xl lg:text-3xl text-gray-600 mb-6 md:mb-8"
            >
              Travel & Lifestyle Influencer | Inspiring You To Explore The World
            </motion.h2>
            
            <motion.div 
              variants={container}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.div variants={item}>
                <Link href="#contact">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(236, 72, 153, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Work with Me
                  </motion.button>
                </Link>
              </motion.div>
              
              <motion.div variants={item}>
                <Link href="/portfolio">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#fdf2f8"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto bg-white text-gray-800 border-2 border-pink-500 px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-base md:text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;