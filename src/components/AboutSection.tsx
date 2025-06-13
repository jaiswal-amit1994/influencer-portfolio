"use client"
import { motion } from "framer-motion";
import { FaUsers, FaHeart, FaGlobeAsia, FaPlay } from "react-icons/fa";

const AboutSection = () => {
  // Stats data
  const stats = [
    { icon: <FaUsers />, value: "1M+", label: "Followers" },
    { icon: <FaHeart />, value: "8.7%", label: "Engagement Rate" },
    { icon: <FaGlobeAsia />, value: "120+", label: "Countries Reached" },
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
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-1/2"
          >
            <motion.h2 
              variants={item}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
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
              Hey there! I'm Aisha Sharma, a passionate storyteller capturing the world's beauty through my lens. 
              What started as sharing travel diaries has grown into a mission to inspire authentic exploration 
              and mindful living.
            </motion.p>
            
            <motion.div variants={item} className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-3">My Niche</h4>
              <div className="flex flex-wrap gap-2">
                {["Sustainable Travel", "Cultural Immersion", "Luxury Experiences", "Local Cuisine"].map((tag, i) => (
                  <span 
                    key={i}
                    className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={item} className="mb-8">
              <h4 className="font-bold text-lg text-gray-800 mb-3">Value I Provide</h4>
              <ul className="space-y-2 pl-5">
                {[
                  "Authentic storytelling that resonates with global audiences",
                  "High-quality visual content for brand campaigns",
                  "Strategic partnerships that align with sustainable values",
                  "Engaged community of adventure-seekers and culture enthusiasts"
                ].map((point, i) => (
                  <li key={i} className="text-gray-600 relative pl-6 before:content-['✓'] before:text-pink-500 before:font-bold before:absolute before:left-0">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div variants={item}>
              <h4 className="font-bold text-lg text-gray-800 mb-3">My Mission</h4>
              <p className="text-gray-600 italic border-l-4 border-pink-500 pl-4 py-2">
                "To inspire authentic exploration and showcase how travel can be both luxurious and sustainable, 
                creating meaningful connections between cultures and communities."
              </p>
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
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl p-8 shadow-xl">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                    className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl text-center shadow-md"
                  >
                    <div className="text-2xl text-pink-600 flex justify-center mb-2">
                      {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-gray-600">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Video Intro */}
              <div className="relative rounded-2xl overflow-hidden aspect-video bg-gray-200 border-4 border-white shadow-xl">
                {/* Placeholder for video */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-400/30 to-pink-500/30">
                  <div className="text-center">
                    <motion.button 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg mx-auto"
                    >
                      <FaPlay className="text-pink-600 text-2xl ml-1" />
                    </motion.button>
                    <p className="mt-4 text-white font-semibold">Watch My Story</p>
                  </div>
                </div>
              </div>
              
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
                  className="inline-block bg-white/80 px-6 py-3 rounded-full"
                >
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-bold">
                    Creating content that matters since 2018
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;