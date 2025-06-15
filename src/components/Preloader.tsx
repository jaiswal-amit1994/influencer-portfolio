"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaPlane, FaGlobeAmericas, FaMapMarkerAlt } from "react-icons/fa";

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [activeIcon, setActiveIcon] = useState(0);
  const icons = [FaPlane, FaGlobeAmericas, FaMapMarkerAlt];

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Rotate icons
    const iconInterval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % icons.length);
    }, 800);

    // Hide preloader when progress completes
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsLoading(false);
        document.body.style.overflow = "auto";
      }, 800);
      
      return () => {
        clearInterval(interval);
        clearInterval(iconInterval);
        clearTimeout(timeout);
      };
    }

    return () => {
      clearInterval(interval);
      clearInterval(iconInterval);
    };
  }, [progress, icons.length]);

  // Prevent scrolling while preloader is active
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] bg-gradient-to-br from-purple-900 to-pink-800 flex flex-col items-center justify-center p-4"
        >
          <div className="relative w-32 h-32 mb-8">
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-white/20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-white/30"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.2
              }}
            />
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute w-full h-full rounded-full border-2 border-dashed border-white/30" />
            </motion.div>
            
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{
                rotate: -360,
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute w-3/4 h-3/4 rounded-full border-2 border-dashed border-white/20" />
            </motion.div>
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-white text-4xl">
                {icons.map((Icon, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ 
                      opacity: activeIcon === index ? 1 : 0,
                      scale: activeIcon === index ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="text-white" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
          
          <motion.h1 
            className="text-3xl md:text-4xl font-bold text-center mb-6 text-white"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Aisha Sharma
          </motion.h1>
          
          <motion.p 
            className="text-lg text-white/80 mb-8 text-center max-w-md"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Travel & Lifestyle Influencer
          </motion.p>
          
          <div className="w-full max-w-xs md:max-w-md h-3 bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          
          <motion.p 
            className="mt-4 text-white/80 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress}%
          </motion.p>
          
          <motion.div 
            className="mt-8 text-white/60 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p>Discovering the worlds hidden gems...</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;