"use client"
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
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-pink-200 opacity-40 blur-3xl"
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
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-200 opacity-30 blur-3xl"
        />
      </motion.div>

      <div className="max-w-7xl w-full mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="text-center lg:text-left lg:w-1/2"
          >
            <motion.h1 
              variants={item}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4"
            >
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Aisha Sharma
              </span>
            </motion.h1>
            
            <motion.h2 
              variants={item}
              className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-8"
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
                    className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
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
                    className="w-full sm:w-auto bg-white text-gray-800 border-2 border-pink-500 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    View Portfolio
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative lg:w-1/2 flex justify-center"
          >
            <div className="relative w-full max-w-md">
              {/* Main image */}
              <div className="relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1624610262559-6cb0724ecc3e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Update with your image path
                  alt="Aisha Sharma - Travel & Lifestyle Influencer"
                  layout="fill"
                  objectFit="cover"
                  priority
                  className="rounded-[2rem]"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -top-6 -right-6 bg-pink-500 w-24 h-24 rounded-2xl rotate-12 z-[-1]"
              />
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-purple-500 w-32 h-32 rounded-2xl -rotate-12 z-[-1]"
              />
              
              {/* Stats badge */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 right-8 bg-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2"
              >
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-gray-800">1M+ Followers</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;