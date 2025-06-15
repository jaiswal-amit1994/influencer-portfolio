"use client";
import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaGlobeAsia, FaPlay } from "react-icons/fa";
import { useState } from "react";

const AboutSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Stats data
  const stats = [
    { icon: <FaUsers className="text-2xl" />, value: "1M+", label: "Followers" },
    { icon: <FaHeart className="text-2xl" />, value: "8.7%", label: "Engagement Rate" },
    { icon: <FaGlobeAsia className="text-2xl" />, value: "120+", label: "Countries Reached" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 120 }
    },
  };

  // Video play handler
  const handlePlay = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger a video modal
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-pink-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2 w-full"
          >
            <motion.h2 
              variants={item}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-gray-800"
            >
              About <span className="text-pink-500">Me</span>
            </motion.h2>
            
            <motion.h3 
              variants={item}
              className="text-xl md:text-2xl font-semibold mb-6 text-purple-600"
            >
              Travel & Lifestyle Influencer | Content Creator
            </motion.h3>
            
            <motion.p 
              variants={item}
              className="text-gray-600 mb-6 text-lg leading-relaxed"
            >
              Hey there! I am Aisha Sharma, a passionate storyteller capturing the worlds beauty through my lens. 
              What started as sharing travel diaries has grown into a mission to inspire authentic exploration 
              and mindful living.
            </motion.p>
            
            <motion.div variants={item} className="mb-8">
              <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-3">My Niche</h4>
              <div className="flex flex-wrap gap-3">
                {["Sustainable Travel", "Cultural Immersion", "Luxury Experiences", "Local Cuisine"].map((tag, i) => (
                  <motion.span 
                    key={i}
                    whileHover={{ scale: 1.05, backgroundColor: "#fbcfe8" }}
                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={item} className="mb-8">
              <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-3">Value I Provide</h4>
              <ul className="space-y-3 pl-5">
                {[
                  "Authentic storytelling that resonates with global audiences",
                  "High-quality visual content for brand campaigns",
                  "Strategic partnerships that align with sustainable values",
                  "Engaged community of adventure-seekers and culture enthusiasts"
                ].map((point, i) => (
                  <motion.li 
                    key={i} 
                    whileHover={{ x: 5 }}
                    className="text-gray-600 relative pl-6 before:content-['✓'] before:text-pink-500 before:font-bold before:absolute before:left-0"
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={item}>
              <h4 className="font-bold text-lg md:text-xl text-gray-800 mb-3">My Mission</h4>
              <motion.p 
                whileHover={{ backgroundColor: "#fdf2f8" }}
                className="text-gray-600 italic border-l-4 border-pink-500 pl-4 py-2 bg-white/50 rounded-r-lg"
              >
                To inspire authentic exploration and showcase how travel can be both luxurious and sustainable, 
                creating meaningful connections between cultures and communities.
              </motion.p>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Stats & Video */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-1/2 w-full"
          >
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-6 md:p-8 shadow-xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    whileHover={{ y: -5, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl text-center shadow-md"
                  >
                    <div className="text-pink-600 flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-600 text-sm md:text-base">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Video Intro */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="relative rounded-2xl overflow-hidden aspect-video bg-gray-200 border-4 border-white shadow-xl cursor-pointer"
                onClick={handlePlay}
              >
                {/* Placeholder for video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-400/30 to-pink-500/30">
                  <div className="text-center">
                    <motion.button 
                      animate={isPlaying ? { scale: 0 } : { scale: 1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto"
                    >
                      <FaPlay className="text-pink-600 text-xl md:text-2xl ml-1" />
                    </motion.button>
                    <p className="mt-4 text-white font-semibold text-lg">Watch My Story</p>
                  </div>
                </div>
                
                {/* Video placeholder image */}
                <div className="w-full h-full bg-gradient-to-tr from-purple-400 to-pink-500 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">My Journey Around the World</h3>
                    <p className="max-w-md mx-auto">Join me as I explore hidden gems and share authentic travel experiences</p>
                  </div>
                </div>
              </motion.div>
              
              {/* Animated Text */}
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-center"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    repeatType: "reverse" 
                  }}
                  className="inline-block bg-white/80 px-4 py-2 md:px-6 md:py-3 rounded-full"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold text-sm md:text-base">
                    Creating content that matters since 2018
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Video Modal */}
      {isPlaying && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsPlaying(false)}
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white text-2xl z-10"
              onClick={() => setIsPlaying(false)}
            >
              ✕
            </button>
            
            {/* Video Player Placeholder */}
            <div className="w-full aspect-video bg-gradient-to-tr from-purple-700 to-pink-800 flex items-center justify-center">
              <div className="text-center text-white p-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">My Travel Journey</h3>
                <p className="max-w-md mx-auto mb-6">This would be an embedded video player in a real implementation</p>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20">
                  <FaPlay className="text-white text-xl ml-1" />
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-gray-900 text-white">
              <h4 className="text-xl font-bold mb-2">Discover My World</h4>
              <p className="text-gray-300">Join me on my adventures across 50+ countries as I explore cultures, cuisines, and breathtaking landscapes.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutSection;