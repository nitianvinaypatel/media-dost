import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CreateWithUs = () => {
  const [activeTab, setActiveTab] = useState("process");

  // Process steps data remains the same
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "Schedule a meeting with our experts to discuss your vision and goals",
      icon: "fas fa-comments",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Strategy Development",
      description: "We create a customized strategy aligned with your objectives",
      icon: "fas fa-lightbulb",
      color: "from-rose-400 to-red-500"
    },
    {
      title: "Creative Production",
      description: "Our team brings your vision to life with professional execution",
      icon: "fas fa-paint-brush",
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: "Review & Refinement",
      description: "Collaborate with us to perfect every detail of your project",
      icon: "fas fa-check-circle",
      color: "from-blue-400 to-cyan-500"
    }
  ];

  // Services data remains the same
  const services = [
    {
      title: "Brand Development",
      description: "Create a unique and memorable brand identity that resonates with your audience",
      features: [
        "Brand Strategy",
        "Visual Identity",
        "Brand Guidelines",
        "Brand Voice",
        "Brand Story"
      ],
      icon: "fas fa-fingerprint",
      color: "from-amber-400 to-orange-500"
    },
    {
      title: "Content Creation",
      description: "Produce engaging content that tells your story and drives engagement",
      features: [
        "Video Production",
        "Photography",
        "Copywriting",
        "Social Media Content",
        "Blog Articles"
      ],
      icon: "fas fa-photo-video",
      color: "from-rose-400 to-red-500"
    },
    {
      title: "Marketing Campaigns",
      description: "Design and execute impactful marketing campaigns across multiple channels",
      features: [
        "Campaign Strategy",
        "Creative Direction",
        "Media Planning",
        "Performance Tracking",
        "Campaign Optimization"
      ],
      icon: "fas fa-bullhorn",
      color: "from-emerald-400 to-teal-500"
    }
  ];

  // Success stories data remains the same
  const successStories = [
    {
      client: "Tech Innovators Ltd",
      project: "Brand Transformation",
      result: "150% increase in brand recognition",
      testimonial: "Media Dost transformed our brand identity and helped us connect with our target audience in ways we never imagined possible.",
      industry: "Technology",
      color: "amber"
    },
    {
      client: "Green Earth Foods",
      project: "Product Launch Campaign",
      result: "200% ROI on marketing spend",
      testimonial: "The creative team at Media Dost brought our vision to life with exceptional attention to detail and strategic thinking.",
      industry: "Food & Beverage",
      color: "rose"
    },
    {
      client: "Urban Style Co",
      project: "Social Media Revamp",
      result: "300% increase in engagement",
      testimonial: "Our social media presence has never been stronger. Media Dost's creative approach has truly set us apart from competitors.",
      industry: "Fashion",
      color: "emerald"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Create With Us - Media Dost</title>
        <meta
          name="description"
          content="Partner with Media Dost to bring your creative vision to life. Professional creative services, brand development, and marketing solutions."
        />
      </Helmet>

      <main className="bg-gradient-to-br from-slate-50 to-slate-100">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-rose-500 to-teal-500 opacity-90"></div>
          {/* Animated background patterns */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
            <div className="absolute top-1/2 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-white opacity-10 rounded-full -translate-y-1/2 animate-blob animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-4xl mx-auto">
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-8">
                <span className="text-sm font-semibold">Let's Create Together</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                Turn Your Vision Into
                <span className="block mt-2">Reality</span>
              </h1>
              <p className="text-xl md:text-2xl mb-12 text-white text-opacity-90">
                Join forces with our creative team to bring your ideas to life. Innovation meets expertise.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#get-started"
                  className="group px-8 py-4 bg-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10 bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500 bg-clip-text text-transparent">
                    Start Your Project
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </a>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-rose-500 transition-all duration-300"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["process", "services", "success"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500 text-white shadow-lg"
                      : "bg-white text-gray-600 hover:shadow-md"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Process Content */}
            {activeTab === "process" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}
                    >
                      <i className={`${step.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Services Content */}
            {activeTab === "services" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 rounded-bl-full -translate-y-8 translate-x-8"></div>
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform`}
                    >
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <i className="fas fa-check text-emerald-500 mr-3"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Success Stories Content */}
            {activeTab === "success" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {successStories.map((story, index) => (
                  <div
                    key={index}
                    className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
                  >
                    <div className={`absolute top-0 right-0 w-40 h-40 bg-${story.color}-100 rounded-bl-full -translate-y-12 translate-x-12 opacity-50`}></div>
                    <div className="relative">
                      <span className={`inline-block px-4 py-2 bg-${story.color}-100 text-${story.color}-600 rounded-full text-sm font-semibold mb-6`}>
                        {story.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {story.client}
                      </h3>
                      <p className={`text-${story.color}-600 font-semibold mb-4`}>
                        {story.project}
                      </p>
                      <div className="flex items-center mb-6">
                        <i className="fas fa-chart-line text-emerald-500 mr-2"></i>
                        <p className="text-emerald-600 font-bold">{story.result}</p>
                      </div>
                      <blockquote className="text-gray-600 italic relative pl-4 border-l-4 border-gray-200">
                        "{story.testimonial}"
                      </blockquote>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Get Started Section */}
        <section id="get-started" className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-rose-500 to-teal-500 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjIiIGZpbGw9IiNGRkYiIGZpbGwtb3BhY2l0eT0iLjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center text-white max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Ready to Create Something Amazing?
              </h2>
              <p className="text-xl mb-12">
                Let's bring your creative vision to life. Our team is ready to help you create something extraordinary.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  to="/contact"
                  className="group px-8 py-4 bg-white rounded-full font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg relative overflow-hidden"
                >
                  <span className="relative z-10 bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500 bg-clip-text text-transparent">
                    Start Now
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
                </Link>
                <a
                  href="tel:+919942222304"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-rose-500 transition-all duration-300"
                >
                  <i className="fas fa-phone mr-2"></i>
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(-50%, -50%) scale(1);
          }
          33% {
            transform: translate(-30%, -50%) scale(1.1);
          }
          66% {
            transform: translate(-50%, -30%) scale(0.9);
          }
          100% {
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  );
};

export default CreateWithUs; 