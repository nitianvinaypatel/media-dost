import React from "react";
import { Helmet } from "react-helmet-async";
import {
  IoRocket,
  IoAnalytics,
  IoHeart,
  IoTrendingUp,
  IoCalendar,
  IoBrush,
  IoGrid,
  IoMail,
  IoCall,
  IoLocation,
  IoTime,
} from "react-icons/io5";

function About() {
  const features = [
    {
      title: "Strategic Media Planning",
      description:
        "Develop campaigns that resonate with your audience using our intuitive platform. With data-driven insights, you can craft messages that not only reach but also engage your target demographic effectively.",
      icon: IoRocket,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Smart Analytics & Tracking",
      description:
        "Gain real-time insights into audience behavior and campaign performance. Understand not just the reach but the emotional impact of your campaigns, allowing you to make strategic adjustments on the fly.",
      icon: IoAnalytics,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Emotional Engagement",
      description:
        "Move beyond mere impressions. Our advanced tools enable you to gauge emotional responses and sentiment analysis, helping you to refine your messages to strike a chord with your audience.",
      icon: IoHeart,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      textColor: "text-pink-600",
    },
    {
      title: "Comprehensive Data Insights",
      description:
        "Access detailed analytics from impressions to engagement patterns. With advanced heatmaps and demographic breakdowns, you can fine-tune your strategy for maximum effectiveness and ROI.",
      icon: IoTrendingUp,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Event Marketing Solutions",
      description:
        "Collaborate with event organizers to place your brand in the spotlight at events that align with your vision. Make your presence felt where it matters most with strategic event partnerships.",
      icon: IoCalendar,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
    {
      title: "Creative Services",
      description:
        "Work with our expert creative team to produce compelling, authentic content. We ensure your brand's voice is heard loud and clear, creating lasting impressions that drive engagement and conversions.",
      icon: IoBrush,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "Diverse Ad Categories",
      description:
        "Whether you're looking for outdoor advertising, digital ads, influencer marketing, or radio campaigns, our platform offers a comprehensive variety of categories to fit your specific needs and maximize your reach.",
      icon: IoGrid,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
    },
  ];

  const stats = [
    { number: "500+", label: "Successful Campaigns", icon: IoRocket },
    { number: "100+", label: "Happy Clients", icon: IoHeart },
    { number: "50+", label: "Media Categories", icon: IoGrid },
    { number: "5+", label: "Years Experience", icon: IoTrendingUp },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We continuously push the boundaries of advertising technology to deliver cutting-edge solutions.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      title: "Transparency",
      description:
        "We believe in honest communication and provide clear insights into campaign performance and costs.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z",
    },
    {
      title: "Results-Driven",
      description:
        "Every strategy we implement is focused on delivering measurable results and maximizing your ROI.",
      icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Media Dost - Revolutionizing Advertising Solutions</title>
        <meta
          name="description"
          content="Learn about Media Dost's mission to revolutionize advertising through personalized, data-driven solutions that connect brands with their audience on a deeper level."
        />
        <meta
          name="keywords"
          content="about media dost, advertising solutions, data-driven marketing, brand connection, media planning, creative services"
        />
        <meta
          property="og:title"
          content="About Media Dost - Revolutionizing Advertising Solutions"
        />
        <meta
          property="og:description"
          content="Discover how Media Dost is transforming the advertising landscape with innovative, data-driven solutions and personalized approaches."
        />
        <meta
          property="og:image"
          content="https://www.mediadost.com/assets/images/about-og-image.jpg"
        />
        <meta property="og:url" content="https://www.mediadost.com/about" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Media Dost - Revolutionizing Advertising Solutions"
        />
        <meta
          name="twitter:description"
          content="Learn about our mission to transform advertising through innovative, data-driven solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.mediadost.com/assets/images/about-og-image.jpg"
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
              🚀 ABOUT US
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Revolutionizing
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Advertising
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              We transform the advertising landscape by providing personalized,
              data-driven solutions that connect brands with their audience on a
              deeper level
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

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              🎯 OUR MISSION
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Transforming Advertising
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              At Media Dost, we believe advertising isn't just about visibility;
              it's about making meaningful connections. Our platform empowers
              businesses with tools that drive engagement, foster emotional
              connections, and deliver measurable results.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Our Approach to Modern Advertising
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We combine cutting-edge technology with creative expertise to
                  deliver advertising solutions that not only reach your
                  audience but truly resonate with them. Our data-driven
                  approach ensures every campaign is optimized for maximum
                  impact and ROI.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      Data-Driven Decision Making
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      Personalized Campaign Strategies
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">
                      Real-Time Performance Tracking
                    </span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full aspect-square bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <IoRocket className="text-5xl text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">
                      Innovation First
                    </h4>
                    <p className="text-gray-600">
                      Pioneering the future of advertising
                    </p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <IoTrendingUp className="text-2xl text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                  <IoHeart className="text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              ⚡ OUR SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Comprehensive Advertising Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our full suite of advertising services designed to
              elevate your brand and drive meaningful engagement with your
              target audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group ${feature.bgColor} rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              💎 OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              What Drives Us Forward
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our core values shape every decision we make and every solution we
              deliver, ensuring we always put our clients' success first.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={value.icon}
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              📞 GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Advertising?
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Let's discuss how Media Dost can help elevate your brand and
              connect with your audience in meaningful ways. Get in touch with
              our expert team today.
            </p>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoMail className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-sm opacity-90">info@mediadost.com</p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoCall className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Call Us</h3>
                <p className="text-sm opacity-90">+91-9942222304</p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoLocation className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Visit Us</h3>
                <p className="text-sm opacity-90">GEC Jamui, Bihar</p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoTime className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Business Hours</h3>
                <p className="text-sm opacity-90">Mon-Fri: 9AM-6PM</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@mediadost.com"
                className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <IoMail className="mr-2 text-xl" />
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

export default About;
