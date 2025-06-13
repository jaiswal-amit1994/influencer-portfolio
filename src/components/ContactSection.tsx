"use client"
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaInstagram, FaYoutube, FaTiktok, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
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
   <>
   
       <section id="contact" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Lets <span className="text-purple-600">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch for collaborations, inquiries, or just to say hello!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Information */}
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:w-2/5"
          >
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-xl h-full">
              <motion.h3 variants={item} className="text-2xl font-bold mb-8">
                Contact Information
              </motion.h3>
              
              {/* Contact Methods */}
              <div className="space-y-8">
                <motion.div variants={item} className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <FaEnvelope className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email Me</h4>
                    <a 
                      href="mailto:hello@stylebyaisha.com" 
                      className="text-purple-100 hover:text-white transition-colors"
                    >
                      hello@stylebyaisha.com
                    </a>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <FaPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Call Me</h4>
                    <a 
                      href="tel:+11234567890" 
                      className="text-purple-100 hover:text-white transition-colors"
                    >
                      +1 (123) 456-7890
                    </a>
                    <p className="text-sm text-purple-200 mt-1">
                      Available Mon-Fri, 10am-6pm EST
                    </p>
                  </div>
                </motion.div>
                
                <motion.div variants={item} className="flex items-start gap-4">
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <FaPaperPlane className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-3">Follow Me</h4>
                    <div className="flex gap-4">
                      <a 
                        href="https://instagram.com/stylebyaisha" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                        aria-label="Instagram"
                      >
                        <FaInstagram className="text-xl" />
                      </a>
                      <a 
                        href="https://youtube.com/stylebyaisha" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                        aria-label="YouTube"
                      >
                        <FaYoutube className="text-xl" />
                      </a>
                      <a 
                        href="https://tiktok.com/@stylebyaisha" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm w-12 h-12 rounded-full flex items-center justify-center transition-all"
                        aria-label="TikTok"
                      >
                        <FaTiktok className="text-xl" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <motion.div 
                variants={item}
                className="mt-12 pt-8 border-t border-white/20"
              >
                <h4 className="font-bold text-lg mb-3">Business Inquiries</h4>
                <p className="text-purple-100">
                  For brand partnerships and collaborations, please email:
                  <br />
                  <a 
                    href="mailto:partnerships@stylebyaisha.com" 
                    className="font-medium text-white hover:underline"
                  >
                    partnerships@stylebyaisha.com
                  </a>
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:w-3/5"
          >
            <div className="bg-white rounded-3xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="I'd love to hear from you..."
                  ></textarea>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    <p>Typically replies within 24 hours</p>
                  </div>
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#7e22ce"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                    type="submit"
                  >
                    Send Message
                    <FaPaperPlane className="text-sm" />
                  </motion.button>
                </div>
              </form>
              
              {/* Decorative Elements */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <p className="text-gray-600">
                  <span className="font-medium text-purple-600">Note:</span> For urgent inquiries, 
                  please call or text my business line at +1 (123) 456-7890
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  className="min-h-screen flex flex-col justify-center items-center bg-white shadow-xl overflow-hidden mt-16"
>
  {/* Top Info Block */}
  <div className="w-full px-6 py-8 border-b border-gray-200 text-center z-20 bg-white/80 backdrop-blur">
    <h3 className="text-2xl md:text-3xl font-bold text-gray-800">📍 Based in New York City</h3>
    <p className="mt-2 text-gray-600 text-base md:text-lg">
      Available for events and meetings in the Tri-State area
    </p>
  </div>

  {/* Video Background */}
  <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
    {/* Video */}
    <video
  className="absolute inset-0 w-full h-full object-cover"
  src="https://videos.pexels.com/video-files/6258206/6258206-uhd_2560_1440_24fps.mp4" // Replace with your video URL
  autoPlay
  loop        // 🔁 This makes it loop
  muted
  playsInline
/>

    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 z-0" />

    {/* Info Card */}
    <div className="relative z-10 text-center p-4">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-2xl inline-block max-w-xs sm:max-w-sm">
        <h4 className="text-lg font-semibold text-gray-800">Aisha Sharma Productions</h4>
        <p className="text-gray-600 mt-1">123 Influencer Avenue, Suite 456</p>
        <p className="text-gray-600">New York, NY 10001</p>
      </div>
    </div>
  </div>
</motion.section>
   


   </>
  );
};

export default ContactSection;