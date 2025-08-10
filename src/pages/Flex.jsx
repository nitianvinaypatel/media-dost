import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Flex = () => {
  const [hoveredPackage, setHoveredPackage] = useState(null);

  // Sample design packages data
  const designPackages = [
    {
      title: "Basic Design",
      price: "₹999",
      features: [
        "2 Design Concepts",
        "1 Revision Round",
        "Standard Resolution",
        "3 Days Delivery",
        "Basic File Formats"
      ],
      icon: "fas fa-star",
      color: "from-blue-500 to-blue-600",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600"
    },
    {
      title: "Professional Design",
      price: "₹2,499",
      features: [
        "4 Design Concepts",
        "3 Revision Rounds",
        "High Resolution",
        "2 Days Delivery",
        "Multiple File Formats",
        "Source Files Included"
      ],
      icon: "fas fa-crown",
      color: "from-purple-500 to-purple-600",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-600",
      recommended: true
    },
    {
      title: "Premium Design",
      price: "₹4,999",
      features: [
        "6 Design Concepts",
        "Unlimited Revisions",
        "Ultra-High Resolution",
        "1 Day Delivery",
        "All File Formats",
        "Source Files Included",
        "Social Media Kit",
        "Print-Ready Files"
      ],
      icon: "fas fa-gem",
      color: "from-pink-500 to-pink-600",
      gradient: "bg-gradient-to-br from-pink-500 to-pink-600"
    }
  ];

  // Sample design services with enhanced descriptions
  const designServices = [
    {
      title: "Logo Design",
      description: "Create a unique and memorable brand identity that sets you apart from competitors",
      icon: "fas fa-paint-brush",
      gradient: "from-blue-500 to-indigo-600"
    },
    {
      title: "Banner Design",
      description: "Eye-catching banners that command attention and drive engagement in outdoor spaces",
      icon: "fas fa-image",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Brochure Design",
      description: "Professional marketing materials that tell your brand story and convert prospects",
      icon: "fas fa-book-open",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Social Media Design",
      description: "Scroll-stopping content that builds engagement and grows your online presence",
      icon: "fas fa-share-alt",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Packaging Design",
      description: "Distinctive packaging that makes your products irresistible on store shelves",
      icon: "fas fa-box-open",
      gradient: "from-yellow-500 to-orange-600"
    },
    {
      title: "Vehicle Wraps",
      description: "Transform vehicles into mobile billboards that capture attention everywhere",
      icon: "fas fa-truck",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Creative Design Services - Media Dost</title>
        <meta
          name="description"
          content="Professional creative design services for your brand. Get logos, banners, brochures, and more designed by experts."
        />
      </Helmet>

      <main>
        {/* Hero Section with Animated Background */}
        <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-purple-600 to-indigo-700 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 right-0"></div>
            <div className="absolute w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000 bottom-0"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <motion.h1 
                className="text-5xl md:text-7xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Creative Design Services
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl mb-12 text-purple-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Transform your brand with our professional design services. From logos to complete brand identities, we've got you covered.
              </motion.p>
              <motion.div 
                className="flex flex-wrap justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <a
                  href="#packages"
                  className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  View Packages
                </a>
                <Link
                  to="/contact"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid with Hover Effects */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Design Services
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Professional design solutions for every need
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 hover:rotate-12`}>
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages with Interactive Hover */}
        <section id="packages" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                className="text-4xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Design Packages
              </motion.h2>
              <motion.p 
                className="text-xl text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Choose the perfect package for your needs
              </motion.p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative bg-white rounded-2xl p-8 ${
                    pkg.recommended
                      ? 'border-2 border-purple-500 shadow-xl'
                      : 'border border-gray-200 shadow-lg'
                  } hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
                  onMouseEnter={() => setHoveredPackage(index)}
                  onMouseLeave={() => setHoveredPackage(null)}
                >
                  {pkg.recommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                        Recommended
                      </div>
                    </div>
                  )}
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${pkg.gradient} rounded-2xl flex items-center justify-center mb-6 transform transition-transform duration-300 ${
                      hoveredPackage === index ? 'scale-110 rotate-12' : ''
                    }`}
                  >
                    <i className={`${pkg.icon} text-2xl text-white`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {pkg.title}
                  </h3>
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600 mb-6">
                    {pkg.price}
                  </div>
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <i className="fas fa-check text-green-500 mr-3"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`block w-full py-4 text-center font-bold rounded-xl transition-all duration-300 transform hover:scale-105 ${
                      pkg.recommended
                        ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white hover:shadow-lg'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Gradient Animation */}
        <section className="py-24 bg-gradient-to-br from-purple-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000 right-0"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-3xl mx-auto">
              <motion.h2 
                className="text-4xl font-bold mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Ready to Transform Your Brand?
              </motion.h2>
              <motion.p 
                className="text-xl mb-12 text-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Get in touch with us today and let's create something amazing together.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Link
                  to="/contact"
                  className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-xl hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Start Your Project
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Flex; 