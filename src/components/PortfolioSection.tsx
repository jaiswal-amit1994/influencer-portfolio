"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPlay, FaExternalLinkAlt, FaInstagram, FaYoutube } from "react-icons/fa";
import Image from "next/image";

// Portfolio data structure
interface PortfolioItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  caption: string;
  brand?: string;
  link?: string;
  platform?: 'instagram' | 'youtube' | 'tiktok';
}

const PortfolioSection = () => {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  // Sample portfolio data
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      type: 'image',
      src: "https://images.unsplash.com/photo-1608973044790-efb1566bde7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Bali Luxury Resort Collaboration",
      brand: "Paradise Resorts",
      link: "https://instagram.com/p/...",
      platform: 'instagram'
    },
    {
      id: 2,
      type: 'video',
      src: "https://images.unsplash.com/photo-1608973043855-7c93498ffbab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Kyoto Cultural Experience",
      brand: "Visit Japan",
      link: "https://youtube.com/watch?v=...",
      platform: 'youtube'
    },
    {
      id: 3,
      type: 'image',
      src: "https://images.unsplash.com/photo-1582141011660-4f8a49ded25b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Summer Collection Launch",
      brand: "Beachwear Co.",
      link: "https://instagram.com/p/...",
      platform: 'instagram'
    },
    {
      id: 4,
      type: 'video',
      src: "https://images.unsplash.com/photo-1582502596187-a8f2daa55287?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Thai Street Food Adventure",
      brand: "Food Explorers",
      link: "https://youtube.com/watch?v=...",
      platform: 'youtube'
    },
    {
      id: 5,
      type: 'image',
      src: "https://images.unsplash.com/photo-1509725525985-dae687277f7b?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Sustainable Retreat Feature",
      brand: "EcoLux Stays",
      platform: 'instagram'
    },
    {
      id: 6,
      type: 'video',
      src: "https://plus.unsplash.com/premium_photo-1670007032969-422512af5096?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      caption: "Swiss Alps Winter Guide",
      brand: "Alpine Adventures",
      platform: 'youtube'
    }
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
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-pink-50 to-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Featured <span className="text-pink-500">Content</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Highlights from my collaborations, travel adventures, and creative projects
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {portfolioItems.map((itemData) => (
            <motion.div 
              key={itemData.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedItem(itemData)}
            >
              <div className="overflow-hidden shadow-xl h-full">
                {/* Item Image/Thumbnail */}
                <div className="relative aspect-[4/5]">
                  {/* Placeholder for image */}
                  <div className="absolute inset-0 bg-gray-200 border-2 border-dashed w-full h-full">
                    <Image src={itemData.src} alt=""/>
                  </div>
                  
                  {/* Platform Indicator */}
                  {itemData.platform && (
                    <div className="absolute top-4 right-4 bg-white p-2 shadow-lg">
                      {itemData.platform === 'instagram' ? (
                        <FaInstagram className="text-pink-600 text-xl" />
                      ) : (
                        <FaYoutube className="text-red-600 text-xl" />
                      )}
                    </div>
                  )}
                  
                  {/* Video Play Button */}
                  {itemData.type === 'video' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/80 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center">
                        <FaPlay className="text-pink-600 text-xl ml-1" />
                      </div>
                    </div>
                  )}
                  
                  {/* Brand Tag */}
                  {itemData.brand && (
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="font-medium text-pink-600">{itemData.brand}</span>
                    </div>
                  )}
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white text-lg font-medium">{itemData.caption}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "#fdf2f8"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-gray-800 border-2 border-pink-500 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all"
          >
            View Full Portfolio
          </motion.button>
        </motion.div>
      </div>

      {/* Portfolio Modal */}
      {selectedItem && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/30 hover:bg-black/50 rounded-full p-2 z-10"
              onClick={() => setSelectedItem(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="aspect-video bg-gray-200 relative">
              {/* Placeholder for content */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/30 to-pink-500/30 flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedItem.caption}</h3>
                  {selectedItem.brand && (
                    <p className="text-xl text-white mb-6">In collaboration with {selectedItem.brand}</p>
                  )}
                  {selectedItem.link ? (
                    <a 
                      href={selectedItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium transition-colors"
                    >
                      View on {selectedItem.platform === 'instagram' ? 'Instagram' : 'YouTube'}
                      <FaExternalLinkAlt className="text-sm" />
                    </a>
                  ) : (
                    <div className="bg-gray-100 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  {selectedItem.platform === 'instagram' ? (
                    <FaInstagram className="text-pink-600 text-xl" />
                  ) : (
                    <FaYoutube className="text-red-600 text-xl" />
                  )}
                  <span className="font-medium">
                    {selectedItem.platform === 'instagram' ? 'Instagram Post' : 'YouTube Video'}
                  </span>
                </div>
                {selectedItem.brand && (
                  <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm">
                    {selectedItem.brand}
                  </span>
                )}
              </div>
              <p className="text-gray-700">{selectedItem.caption}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default PortfolioSection;