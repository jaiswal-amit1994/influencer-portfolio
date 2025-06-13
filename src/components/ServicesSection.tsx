"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBullhorn, FaStar, FaGift, FaCalendarAlt, FaLink, FaChevronDown } from "react-icons/fa";

const ServicesSection = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  // Services data
  const services = [
    {
      id: 1,
      title: "Sponsored Posts",
      icon: <FaBullhorn />,
      description: "Authentic content creation featuring your product or service across my platforms",
      features: [
        "High-quality photos & videos",
        "Strategic platform selection",
        "Audience-tailored messaging",
        "Performance analytics report"
      ],
      color: "bg-pink-500"
    },
    {
      id: 2,
      title: "Product Reviews",
      icon: <FaStar />,
      description: "In-depth and honest evaluation of your products for my engaged audience",
      features: [
        "Comprehensive testing period",
        "Detailed feature breakdown",
        "Authentic user experience",
        "Comparison with alternatives"
      ],
      color: "bg-purple-500"
    },
    {
      id: 3,
      title: "Giveaways",
      icon: <FaGift />,
      description: "Collaborative campaigns to boost engagement and grow your audience",
      features: [
        "Full campaign management",
        "Audience targeting strategy",
        "Entry mechanism setup",
        "Winner selection & announcement"
      ],
      color: "bg-yellow-500"
    },
    {
      id: 4,
      title: "Event Appearances",
      icon: <FaCalendarAlt />,
      description: "Live presence at your events as a host, speaker, or special guest",
      features: [
        "Pre-event promotion",
        "Live content creation",
        "Audience Q&A sessions",
        "Post-event coverage"
      ],
      color: "bg-blue-500"
    },
    {
      id: 5,
      title: "Affiliate Marketing",
      icon: <FaLink />,
      description: "Performance-based partnership driving sales through trusted recommendations",
      features: [
        "Dedicated tracking links",
        "Regular promotional spots",
        "Exclusive discount codes",
        "Monthly performance reports"
      ],
      color: "bg-green-500"
    }
  ];

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

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
    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            What I <span className="text-purple-600">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored services to help brands connect with my engaged audience
          </p>
        </motion.div>

        {/* Services List - Modern Design */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={item}
              className="overflow-hidden"
            >
              {/* Service Header */}
              <motion.div
                whileHover={{ backgroundColor: "#f9fafb" }}
                className={`flex items-center justify-between p-6 cursor-pointer rounded-xl border border-gray-200 ${
                  expandedService === service.id ? 'bg-gray-50' : ''
                }`}
                onClick={() => toggleService(service.id)}
              >
                <div className="flex items-center gap-6">
                  <div className={`${service.color} w-14 h-14 rounded-full flex items-center justify-center text-white text-xl`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
                
                <motion.div
                  animate={{ rotate: expandedService === service.id ? 180 : 0 }}
                  className="text-gray-500"
                >
                  <FaChevronDown />
                </motion.div>
              </motion.div>
              
              {/* Service Details (Collapsible) */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: expandedService === service.id ? 'auto' : 0,
                  opacity: expandedService === service.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-6 border-x border-b border-gray-200 rounded-b-xl">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-800 mb-3">Service Includes:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className={`${service.color} w-2 h-2 rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="border-l border-gray-200 pl-6">
                      <h4 className="font-bold text-gray-800 mb-3">Ideal For:</h4>
                      <p className="text-gray-600 mb-4">
                        {service.id === 1 && "Brands looking to showcase products through authentic storytelling"}
                        {service.id === 2 && "Companies launching new products seeking honest reviews"}
                        {service.id === 3 && "Brands wanting to increase engagement and grow their audience"}
                        {service.id === 4 && "Events needing influencer presence to boost attendance and coverage"}
                        {service.id === 5 && "Businesses with products/services that align with my audience's interests"}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.98 }}
                        className={`${service.color} text-white px-6 py-2 rounded-lg font-medium`}
                      >
                        Request Details
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <p className="text-3xl font-bold text-purple-600">250+</p>
            <p className="text-gray-600">Successful Campaigns</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <p className="text-3xl font-bold text-purple-600">98%</p>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <p className="text-3xl font-bold text-purple-600">1.2M</p>
            <p className="text-gray-600">Average Reach</p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-xl">
            <p className="text-3xl font-bold text-purple-600">8.7%</p>
            <p className="text-gray-600">Avg. Engagement</p>
          </div>
        </motion.div>

        {/* CTA Section */}
       <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white overflow-hidden relative"
        >
          {/* Decorative elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-white/10"></div>
          
         <div className="max-w-6xl mx-auto relative z-10 px-4">
  <div className="flex flex-wrap items-center justify-between gap-8">
    
    {/* Left: Heading and Text */}
    <div className="flex-shrink text-left max-w-xl">
      <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">Ready to Collaborate?</h3>
      <p className="text-lg md:text-xl text-purple-100">
        Lets create something amazing together. Get my media kit for detailed audience insights and partnership options.
      </p>
    </div>

    {/* Right: Buttons */}
    <div className="flex gap-4 flex-wrap justify-center">
      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "#fff",
          color: "#7e22ce",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white text-purple-700 px-6 py-3 rounded-full font-bold text-base shadow-lg"
      >
        Download Media Kit
      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.05,
          backgroundColor: "rgba(255,255,255,0.2)",
        }}
        whileTap={{ scale: 0.95 }}
        className="bg-white/10 border-2 border-white text-white px-6 py-3 rounded-full font-bold text-base shadow-lg"
      >
        Contact Me
      </motion.button>
    </div>
  </div>
</div>

        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;