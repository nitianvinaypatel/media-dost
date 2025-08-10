import React from "react";
import { Helmet } from "react-helmet-async";
import {
  IoMail,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoPeople,
  IoRocket,
  IoTrophy,
  IoHeart,
} from "react-icons/io5";

function Team() {
  const teamMembers = [
    {
      name: "Piyush Rajput",
      position: "CEO & Founder",
      description:
        "Visionary leader with 10+ years in digital marketing and advertising. Passionate about transforming businesses through strategic media solutions.",
      avatar: "PR",
      email: "piyush@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: ["Strategic Planning", "Business Development", "Leadership"],
      experience: "10+ years",
    },
    {
      name: "Ankit Kumar",
      position: "Marketing Director",
      description:
        "Expert in strategic marketing and brand development with proven results across multiple industries and market segments.",
      avatar: "AK",
      email: "ankit@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: ["Brand Strategy", "Digital Marketing", "Campaign Management"],
      experience: "8+ years",
    },
    {
      name: "Rohit Singh",
      position: "Creative Director",
      description:
        "Award-winning creative professional specializing in innovative campaigns that capture attention and drive engagement.",
      avatar: "RS",
      email: "rohit@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: ["Creative Design", "Brand Identity", "Visual Strategy"],
      experience: "7+ years",
    },
    {
      name: "Priya Sharma",
      position: "Analytics Manager",
      description:
        "Data-driven professional focused on measuring and optimizing performance through advanced analytics and insights.",
      avatar: "PS",
      email: "priya@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: ["Data Analytics", "Performance Optimization", "ROI Analysis"],
      experience: "6+ years",
    },
    {
      name: "Vikash Yadav",
      position: "Tech Lead",
      description:
        "Technology expert ensuring our platform delivers exceptional performance and innovative solutions for our clients.",
      avatar: "VY",
      email: "vikash@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: ["Full-Stack Development", "System Architecture", "DevOps"],
      experience: "9+ years",
    },
    {
      name: "Neha Gupta",
      position: "Client Success Manager",
      description:
        "Dedicated to ensuring client satisfaction and long-term success through personalized support and strategic guidance.",
      avatar: "NG",
      email: "neha@mediadost.com",
      linkedin: "#",
      twitter: "#",
      expertise: [
        "Client Relations",
        "Project Management",
        "Strategic Consulting",
      ],
      experience: "5+ years",
    },
  ];

  const companyStats = [
    { number: "50+", label: "Team Members", icon: IoPeople },
    { number: "500+", label: "Projects Completed", icon: IoTrophy },
    { number: "100+", label: "Happy Clients", icon: IoHeart },
    { number: "5+", label: "Years Experience", icon: IoRocket },
  ];

  const cultureValues = [
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication to achieve extraordinary results together.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Innovation",
      description:
        "We encourage creative thinking and are always looking for breakthrough solutions to complex challenges.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Excellence",
      description:
        "We maintain the highest standards in everything we do, delivering exceptional quality and results.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Integrity",
      description:
        "We operate with transparency, honesty, and ethical practices in all our business relationships.",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Professional Team - Media Dost | Meet the Experts</title>
        <meta
          name="description"
          content="Meet the expert team behind Media Dost's success. Our passionate professionals are dedicated to delivering exceptional advertising and marketing solutions."
        />
        <meta
          name="keywords"
          content="media dost team, advertising experts, marketing professionals, creative team, leadership, company culture"
        />
        <meta
          property="og:title"
          content="Media Dost Team - Meet Our Expert Professionals"
        />
        <meta
          property="og:description"
          content="Discover the talented team of experts driving Media Dost's mission to revolutionize advertising and marketing."
        />
        <meta
          property="og:image"
          content="https://www.mediadost.com/assets/images/team-og-image.jpg"
        />
        <meta property="og:url" content="https://www.mediadost.com/team" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Media Dost Team - Meet Our Expert Professionals"
        />
        <meta
          name="twitter:description"
          content="Meet the passionate team of experts behind Media Dost's innovative advertising solutions."
        />
        <meta
          name="twitter:image"
          content="https://www.mediadost.com/assets/images/team-og-image.jpg"
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
              👥 OUR TEAM
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Meet Our
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Expert Team
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Our passionate team of industry experts is dedicated to helping
              your business achieve exceptional advertising and marketing
              results
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {companyStats.map((stat, index) => (
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

      {/* Team Members Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              🌟 LEADERSHIP TEAM
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The People Behind Media Dost
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a diverse team of creative professionals, strategists, and
              technology experts united by our passion for delivering
              exceptional results and driving innovation in advertising.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto group-hover:scale-110 transition-transform duration-300">
                    {member.avatar}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Member Info */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-indigo-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-semibold mb-1">
                  {member.position}
                </p>
                <p className="text-sm text-gray-500 mb-4 font-medium">
                  {member.experience} Experience
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Expertise Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4">
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-indigo-500 hover:text-white transition-all duration-200"
                  >
                    <IoMail className="text-lg" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <IoLogoLinkedin className="text-lg" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-all duration-200"
                  >
                    <IoLogoTwitter className="text-lg" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture & Values */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold mb-4">
              💜 OUR VALUES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Our Culture & Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values guide everything we do and shape the way we work
              together to achieve extraordinary results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <div
                key={index}
                className={`group ${value.bgColor} rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
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
                <h3 className={`text-xl font-bold mb-4 ${value.textColor}`}>
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

      {/* Join Our Team Section */}
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
              🚀 CAREERS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Growing Team
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              We're always looking for talented individuals who share our
              passion for innovation and excellence. Be part of our mission to
              revolutionize advertising and make a meaningful impact.
            </p>

            {/* Benefits */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoRocket className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Growth Opportunities</h3>
                <p className="text-sm opacity-90">
                  Continuous learning and career advancement
                </p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoHeart className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Work-Life Balance</h3>
                <p className="text-sm opacity-90">
                  Flexible schedules and remote work options
                </p>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-20">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IoTrophy className="text-2xl text-white" />
                </div>
                <h3 className="font-bold mb-2">Competitive Benefits</h3>
                <p className="text-sm opacity-90">
                  Great compensation and comprehensive benefits
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                <IoPeople className="mr-2 text-xl" />
                View Open Positions
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300">
                <IoMail className="mr-2 text-xl" />
                Contact HR Team
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-600 rounded-full text-sm font-semibold mb-4">
              💼 WHY CHOOSE US
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why Work With Media Dost?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover what makes Media Dost an exceptional place to build your
              career and make a meaningful impact in the advertising industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <IoRocket className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Innovation-Driven
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Work with cutting-edge technologies and creative solutions that
                push the boundaries of traditional advertising.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <IoPeople className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Collaborative Culture
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Join a supportive team environment where every voice is heard
                and collaboration drives our success.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6">
                <IoTrophy className="text-2xl text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Recognition & Growth
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your contributions are valued and rewarded with opportunities
                for professional development and career advancement.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Team;
