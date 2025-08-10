import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  IoLocationOutline,
  IoCall,
  IoMailOutline,
  IoTime,
  IoSend,
  IoChatbubbles,
  IoHeadset,
  IoShield,
  IoCheckmarkCircle,
  IoRocket,
  IoHeart,
  IoTrendingUp,
} from "react-icons/io5";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setIsSubmitting(false);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: IoLocationOutline,
      title: "Visit Our Office",
      details: "GEC Jamui, Amrath-811313, Bihar, India",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: IoCall,
      title: "Call Us",
      details: "+91 99422-22304",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: IoMailOutline,
      title: "Email Us",
      details: "contact@mediadost.com",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      icon: IoTime,
      title: "Business Hours",
      details:
        "Mon-Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 4:00 PM\nSun: Closed",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const stats = [
    { number: "24/7", label: "Support Available", icon: IoHeadset },
    { number: "100+", label: "Happy Clients", icon: IoHeart },
    { number: "500+", label: "Projects Completed", icon: IoRocket },
    { number: "5+", label: "Years Experience", icon: IoTrendingUp },
  ];

  const features = [
    {
      icon: IoChatbubbles,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours",
    },
    {
      icon: IoShield,
      title: "Secure Communication",
      description: "Your data is protected with enterprise-grade security",
    },
    {
      icon: IoHeadset,
      title: "Expert Support",
      description: "Get help from our experienced team of professionals",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Contact Media Dost - Get in Touch with Our Expert Team</title>
        <meta
          name="description"
          content="Contact Media Dost for all your advertising and marketing needs. Get expert consultation, support, and personalized solutions. Reach out to us today!"
        />
        <meta
          name="keywords"
          content="contact media dost, advertising consultation, marketing support, get in touch, expert team, media planning"
        />
        <meta
          property="og:title"
          content="Contact Media Dost - Expert Advertising Solutions"
        />
        <meta
          property="og:description"
          content="Get in touch with Media Dost's expert team for personalized advertising and marketing solutions."
        />
        <meta
          property="og:image"
          content="https://www.mediadost.com/assets/images/contact-og-image.jpg"
        />
        <meta property="og:url" content="https://www.mediadost.com/contact" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Media Dost - Expert Advertising Solutions"
        />
        <meta
          name="twitter:description"
          content="Connect with our expert team for personalized advertising and marketing solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.mediadost.com/assets/images/contact-og-image.jpg"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-bounce"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              📞 GET IN TOUCH
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Let's Start a
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Conversation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Ready to transform your advertising strategy? Our expert team is
              here to help you achieve exceptional results and grow your
              business
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20"
                >
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="text-2xl text-white" />
                  </div>
                  <div className="text-3xl font-bold">{stat.number}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              💬 CONTACT US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              We'd Love to Hear From You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Whether you have questions, need support, or want to discuss your
              next advertising campaign, our team is ready to help you succeed.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-gray-800">
                  Send us a Message
                </h3>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 24
                  hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200"
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="6"
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 resize-none"
                    placeholder="Tell us more about your project or inquiry..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-semibold text-lg flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <IoCheckmarkCircle className="mr-3 text-xl" />
                      Message Sent Successfully!
                    </>
                  ) : (
                    <>
                      <IoSend className="mr-3 text-xl" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-800">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                  We're here to help and answer any questions you might have.
                  Choose the best way to reach us and we'll respond promptly.
                </p>
              </div>

              <div className="grid gap-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className={`group ${info.bgColor} rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <info.icon className="text-white text-2xl" />
                      </div>
                      <div className="flex-1">
                        <h4
                          className={`font-bold text-lg mb-2 ${info.textColor}`}
                        >
                          {info.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Features */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h4 className="text-xl font-bold mb-6 text-gray-800">
                  Why Choose Our Support?
                </h4>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <feature.icon className="text-indigo-600 text-lg" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-800 mb-1">
                          {feature.title}
                        </h5>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              ❓ FREQUENTLY ASKED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Find quick answers to the most common questions about our services
              and how we can help your business grow.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  How quickly can you start my campaign?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We can typically start your advertising campaign within 3-5
                  business days after project approval and payment confirmation.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Do you provide campaign analytics?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Yes, we provide comprehensive analytics and reporting for all
                  campaigns, including performance metrics and ROI analysis.
                </p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  What's your minimum budget requirement?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We work with businesses of all sizes. Our minimum campaign
                  budget starts from ₹10,000, but we can discuss custom
                  solutions.
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8 border border-orange-100">
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  Do you offer creative design services?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Absolutely! Our creative team can design compelling ads,
                  banners, and promotional materials for all your campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              🚀 READY TO START?
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Don't wait to transform your advertising strategy. Get in touch
              with our expert team today and start seeing real results for your
              business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@mediadost.com"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <IoMailOutline className="mr-2 text-xl" />
                Send Email
              </a>
              <a
                href="tel:+919942222304"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                <IoCall className="mr-2 text-xl" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
