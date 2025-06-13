"use client"
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Brand data structure
interface Brand {
  id: number;
  name: string;
  logo: string;
  campaign: string;
  testimonial?: {
    text: string;
    author: string;
    role: string;
  };
}

const BrandCollaborations = () => {
  // Brand collaboration data
  const brands: Brand[] = [
    {
      id: 1,
      name: "Luxury Escapes",
      logo: "/brands/luxury-escapes.png",
      campaign: "Global luxury resort campaign targeting premium travelers",
      testimonial: {
        text: "Aisha delivered exceptional content that perfectly captured our brand essence. Her audience engagement surpassed all our expectations.",
        author: "Sarah Johnson",
        role: "Marketing Director"
      }
    },
    {
      id: 2,
      name: "Global Airlines",
      logo: "/brands/global-airlines.png",
      campaign: "Premium cabin experience showcase across 12 destinations"
    },
    {
      id: 3,
      name: "EcoLux Stays",
      logo: "/brands/ecolux-stays.png",
      campaign: "Sustainable luxury accommodation series",
      testimonial: {
        text: "Working with Aisha helped us reach a new demographic of eco-conscious travelers. Her authentic approach resonated deeply with our target audience.",
        author: "Michael Chen",
        role: "Brand Manager"
      }
    },
    {
      id: 4,
      name: "Beachwear Co.",
      logo: "/brands/beachwear-co.png",
      campaign: "Summer collection launch across Southeast Asia"
    },
    {
      id: 5,
      name: "Gourmet Explorers",
      logo: "/brands/gourmet-explorers.png",
      campaign: "Culinary journey through Mediterranean cuisine",
      testimonial: {
        text: "Aisha food content created a 35% increase in our app downloads. Her ability to showcase culinary experiences is unmatched.",
        author: "Elena Rodriguez",
        role: "Partnership Lead"
      }
    },
    {
      id: 6,
      name: "Alpine Adventures",
      logo: "/brands/alpine-adventures.png",
      campaign: "Winter sports equipment launch campaign"
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
    <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Brand <span className="text-purple-600">Collaborations</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading brands to create impactful campaigns and authentic content
          </p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {brands.map((brand) => (
            <motion.div 
              key={brand.id}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all hover:shadow-xl"
            >
              {/* Brand Header */}
              <div className="p-6 flex items-center gap-4 border-b border-gray-100">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <h3 className="text-xl font-bold text-gray-800">{brand.name}</h3>
              </div>
              
              {/* Campaign Details */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-sm font-medium text-purple-600">Campaign</span>
                </div>
                <p className="text-gray-700 mb-6">{brand.campaign}</p>
                
                {/* Testimonial (if available) */}
                {brand.testimonial && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="bg-purple-50 rounded-xl p-5 border border-purple-100"
                  >
                    <FaQuoteLeft className="text-purple-300 text-2xl mb-3" />
                    <p className="text-gray-700 italic mb-4">"{brand.testimonial.text}"</p>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-gray-800">{brand.testimonial.author}</p>
                        <p className="text-sm text-gray-600">{brand.testimonial.role}</p>
                      </div>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white max-w-4xl mx-auto"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="text-center md:text-left md:w-1/3">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Brand Testimonials</h3>
                <div className="flex justify-center md:justify-start">
                  <div className="flex text-yellow-300 text-xl">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                <p className="mt-2 text-purple-100">4.9/5 average rating</p>
              </div>
              
              <div className="md:w-2/3">
                <div className="relative">
                  <FaQuoteLeft className="absolute -top-6 -left-2 text-purple-300 text-4xl opacity-30" />
                  <p className="text-lg md:text-xl italic">
                    "Aisha transformed our campaign with her creative vision and authentic approach. 
                    Her ability to connect with audiences resulted in a 40% higher engagement rate 
                    compared to our previous influencer partnerships."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                    <div>
                      <p className="font-bold text-lg">Jennifer Martinez</p>
                      <p className="text-purple-200">Global Brand Director, Luxury Escapes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCollaborations;