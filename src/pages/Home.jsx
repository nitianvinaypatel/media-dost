import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import aboutBanner from "../assets/images/about-banner.png";
import aboutBanner2 from "../assets/images/about-abs-1.png";
import aboutBanner3 from "../assets/images/about-abs-2.png";
import thinkingMediaDost from "../assets/images/thinking-mediadost.svg";
import aboutIcon3 from "../assets/images/about-icon-3.webp";
import aboutIcon1 from "../assets/images/about-icon-1.webp";
import mediaOptionsIcon from "../assets/images/image.png";
import maharajaLogo from "../assets/images/maharaja.png.webp";
import gecjamuiLogo from "../assets/images/gecjamui.png";
import sponsorshipImage from "../assets/images/sponsership.webp";
import outdoorImage from "../assets/images/outdoor.webp";
import startupImage from "../assets/images/startup.webp";
import innovationsLogo from "../assets/images/innovations.webp";
import swagatLogo from "../assets/images/swagat.png";
import hotelJPLogo from "../assets/images/hotel jp grand.png";
import zoomFoodLogo from "../assets/images/zoom.png";
import jashnLogo from "../assets/images/jashn.png";
// Placeholder imports for new client logos - you'll need to add these images
// import jashnMakerLogo from "../assets/images/jashn-maker.png";
// import krishnaHotelLogo from "../assets/images/krishna-hotel.png";
// import hostlioLogo from "../assets/images/hostlio.png";
// import bmnpLogo from "../assets/images/bmnp.png";

const Home = () => {
  const [email, setEmail] = React.useState("");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [isSubscribed, setIsSubscribed] = React.useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch("/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.success) {
        setIsSubscribed(true);
        setEmail("");
      } else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      setErrorMessage("Failed to subscribe. Please try again.");
    }
  };

  // Media categories data with icons
  const mediaCategories = [
    {
      name: "OUTDOOR",
      icon: "fas fa-map-signs",
      color: "from-blue-500 to-blue-600",
      route: "/outdoor",
    },
    {
      name: "RESIDENTIAL",
      icon: "fas fa-home",
      color: "from-green-500 to-green-600",
      route: "/residential",
    },
    {
      name: "RETAIL & MALL",
      icon: "fas fa-shopping-cart",
      color: "from-purple-500 to-purple-600",
      route: "/retail-mall",
    },
    {
      name: "TRANSIT",
      icon: "fas fa-bus",
      color: "from-yellow-500 to-yellow-600",
      route: "/transit",
    },
    {
      name: "AUDIO/VIDEO AD",
      icon: "fas fa-video",
      color: "from-red-500 to-red-600",
      route: "/audio-video-ad",
    },
    {
      name: "DIGITAL PR",
      icon: "fas fa-laptop",
      color: "from-indigo-500 to-indigo-600",
      route: "/digital-pr",
    },
    {
      name: "FIND EVENTS",
      icon: "fas fa-calendar-check",
      color: "from-pink-500 to-pink-600",
      route: "/find-events",
    },
    {
      name: "WATER BOTTLE BRANDING",
      icon: "fas fa-tint",
      color: "from-cyan-500 to-cyan-600",
      route: "/water-bottle-branding",
    },
    {
      name: "DIGITAL MARKETING",
      icon: "fas fa-chart-line",
      color: "from-orange-500 to-orange-600",
      route: "/digital-marketing",
    },
    {
      name: "RADIO",
      icon: "fas fa-radio",
      color: "from-teal-500 to-teal-600",
      route: "/radio",
    },
    {
      name: "TELEVISION",
      icon: "fas fa-tv",
      color: "from-violet-500 to-violet-600",
      route: "/television",
    },
    {
      name: "OTHERS",
      icon: "fas fa-ellipsis-h",
      color: "from-gray-500 to-gray-600",
      route: "/others",
    },
  ];

  // Client data with better structure
  const clients = [
    {
      logo: innovationsLogo,
    },
    {
      logo: gecjamuiLogo,
    },
    {
      logo: maharajaLogo,
    },
    {
      logo: hotelJPLogo,
    },
    {
      logo: swagatLogo,
    },
    {
      logo: jashnLogo,
    },
    {
      logo: zoomFoodLogo,
    },
  ];

  // Blog data with enhanced structure
  const blogs = [
    {
      id: 1,
      slug: "startup",
      title:
        "Why Start a Startup in Bihar: Opportunities in 2025 with the Startup Bihar Policy",
      author: "Piyush Rajput",
      date: "20/04/2025",
      excerpt:
        "Discover the emerging opportunities and government support for startups in Bihar with the new Startup Bihar Policy 2025.",
      category: "Startup",
      readTime: "5 min read",
      image: startupImage,
      path: "/blog/startup",
    },
    {
      id: 2,
      slug: "outdoor-advertising",
      title:
        "Outdoor Advertising in 2025: Types, Benefits & Why It Still Works",
      author: "Piyush Rajput",
      date: "13/04/2025",
      excerpt:
        "Explore the evolution of outdoor advertising and why it remains a powerful marketing tool in the digital age.",
      category: "Advertising",
      readTime: "7 min read",
      image: outdoorImage,
      path: "/blog/outdoor-advertising",
    },
    {
      id: 3,
      slug: "digital-marketing-trends",
      title:
        "Digital Marketing Trends 2025: Transforming Business Growth in India",
      author: "Rahul Kumar",
      date: "22/04/2025",
      excerpt:
        "Explore the latest digital marketing trends shaping business success in India. From AI-powered marketing to social commerce, discover what's driving growth in 2025.",
      category: "Digital Marketing",
      readTime: "6 min read",
      image: sponsorshipImage,
      path: "/blog/digital-marketing-trends",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Media Dost - Your Trusted Media Partner for Targeted Advertising
        </title>
        <meta
          name="description"
          content="Discover perfect advertising solutions for your brand. Media Dost connects brands with outdoor ads, digital marketing, influencers, and event sponsorship. Plan and book easily."
        />
        <meta
          name="keywords"
          content="media dost, advertising, brand growth, media partner, digital advertisement, outdoor advertisement, ad placements, marketing campaigns, media solutions, event sponsorship"
        />
        <meta name="author" content="Media Dost" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#525ee0" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Media Dost - Your Trusted Media Partner for Targeted Advertising"
        />
        <meta
          property="og:description"
          content="Find and book advertising media across multiple platforms, including outdoor and digital. Perfect for brands seeking growth."
        />
        <meta property="og:url" content="https://www.mediadost.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta
          name="twitter:title"
          content="Media Dost - Your Trusted Media Partner for Targeted Advertising"
        />
        <meta
          name="twitter:description"
          content="Find ideal media platforms, from outdoor to digital. Grow your brand today."
        />
        <meta
          name="twitter:image"
          content="https://www.mediadost.com/assets/images/og-image.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />

        {/* Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Media Dost",
            url: "https://www.mediadost.com",
            logo: "https://www.mediadost.com/assets/images/favicon.png",
            description:
              "Discover perfect advertising solutions for your brand. Media Dost connects brands with outdoor ads, digital marketing, influencers, and event sponsorship.",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-99422-22304",
              contactType: "customer service",
              areaServed: "India",
              availableLanguage: ["en"],
            },
            sameAs: [
              "https://www.instagram.com/mediadost_",
              "https://twitter.com/mediadost_",
              "https://www.linkedin.com/company/mediadost",
            ],
          })}
        </script>
      </Helmet>

      <main>
        <article>
          {/* Hero Section */}
          <section className="relative min-h-[300px] flex items-center py-10 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
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
            <div className="absolute top-1/2 right-20 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full animate-ping"></div>

            <div className="container mx-auto px-4 relative z-10">
              <div className="text-center text-white max-w-4xl mx-auto">
                <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                  🚀 Your Media Partner
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Maximize Your Reach with
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    {" "}
                    Media Dost
                  </span>
                </h1>
                {/* <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto leading-relaxed">
                  Transform your brand's presence with strategic advertising
                  solutions that deliver real results
                </p> */}
              </div>
              <div className="flex flex-row flex-nowrap justify-center items-stretch gap-4 md:gap-6 mt-12 max-w-4xl mx-auto">
                <Link
                  to="/plan"
                  className="group w-1/3 px-3 sm:px-6 py-6 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-30 rounded-2xl text-white hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-calendar-alt text-2xl text-white"></i>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl block">Plan</span>
                    <span className="block text-sm font-light opacity-80">with us</span>
                  </div>
                </Link>
                <Link
                  to="/flex"
                  className="group w-1/3 px-3 sm:px-6 py-6 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-30 rounded-2xl text-white hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-palette text-2xl text-white"></i>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl block">Flex</span>
                    <span className="block text-sm font-light opacity-80">with us</span>
                  </div>
                </Link>
                <Link
                  to="/create-with-us"
                  className="group w-1/3 px-3 sm:px-6 py-6 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-30 rounded-2xl text-white hover:bg-opacity-25 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <i className="fas fa-lightbulb text-2xl text-white"></i>
                  </div>
                  <div className="text-center">
                    <span className="font-bold text-xl block">Create</span>
                    <span className="block text-sm font-light opacity-80">with us</span>
                  </div>
                </Link>
              </div>
            </div>
          </section>

          {/* Browse Media by Genre Section */}
          <section className="py-10 bg-gradient-to-br from-gray-50 to-blue-200">
            <div className="container mx-auto px-4">
              <div className="text-center">
                {/* <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                  EXPLORE CATEGORIES
                </div> */}
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                  Browse Media by Genre
                </h2>
                {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the perfect advertising medium for your brand across
                  multiple categories and platforms{" "}
                </p> */}
              </div>
              <div className="grid grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 md:gap-6">
                {mediaCategories.map((category, index) => {
                  return (
                    <Link
                      key={index}
                      to={category.route}
                      className="group bg-white rounded-xl p-3 md:pt-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2"
                    >
                      {" "}
                      <div
                        className={`w-12 h-12 md:w-16 md:h-12 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <i
                          className={`${category.icon} text-lg md:text-2xl text-white`}
                        ></i>
                      </div>{" "}
                      <div className="text-gray-800 font-bold text-[10px] md:text-sm leading-tight">
                        {category.name}
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Our Valued Clients Section */}
          <section className="py-16 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Our Valued Clients
                </h2>
                {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Trusted by leading businesses and institutions across Bihar.
                  We're proud to serve and grow with our esteemed clients.
                </p> */}
              </div>

              {/* Carousel Container */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div className="flex animate-scroll-left">
                    {/* First set of clients */}
                    {clients.map((client, index) => (
                      <div
                        key={`first-${index}`}
                        className="flex-shrink-0 mx-4"
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-20 w-auto object-contain"
                        />
                      </div>
                    ))}

                    {/* Duplicate set for seamless loop */}
                    {clients.map((client, index) => (
                      <div
                        key={`second-${index}`}
                        className="flex-shrink-0 mx-4"
                      >
                        <img
                          src={client.logo}
                          alt={client.name}
                          className="h-20 w-auto object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10"></div>
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10"></div>
              </div>

              {/* Custom CSS for animation */}
              <style jsx>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }

                .animate-scroll-left {
                  animation: scroll-left 5s linear infinite;
                }

                .animate-scroll-left:hover {
                  animation-play-state: paused;
                }
              `}</style>
            </div>
          </section>

          {/* About Section */}
          <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative">
                  <div className="relative w-full aspect-[4/5] rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 shadow-2xl overflow-hidden">
                    <img
                      src={aboutBanner}
                      alt="Media Dost: Delivering impactful advertising solutions"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent"></div>
                  </div>
                  <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full overflow-hidden shadow-xl border-4 border-white hidden sm:block">
                    <img
                      src={aboutBanner2}
                      alt="Abstract Image 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-2xl bg-gradient-to-br from-indigo-200 to-blue-200 shadow-xl overflow-hidden border-4 border-white hidden sm:block">
                    <img
                      src={aboutBanner3}
                      alt="Abstract Image 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Floating Elements */}
                  <div className="absolute top-1/4 -left-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"></div>
                  <div className="absolute bottom-1/4 -right-4 w-6 h-6 bg-pink-400 rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-8">
                  <div>
                    <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-6">
                      WHY CHOOSE US?
                    </div>
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-tight">
                      We Offer The Best Advertisement Services
                    </h2>
                  </div>
                  <div className="space-y-8">
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-300 to-blue-400 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={aboutIcon1}
                          alt="Strategic Advertising"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Strategic Advertising Solutions
                        </h3>
                        <p className="text-md text-gray-600 leading-relaxed">
                          Industry experts plan and execute impactful, tailored
                          ad campaigns.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={mediaOptionsIcon}
                          alt="Wide Range of Media Options"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Wide Range of Media Options
                        </h3>
                        <p className="text-md text-gray-600 leading-relaxed">
                          Explore outdoor, influencer marketing, and more - all
                          in one place.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 group">
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <img
                          src={aboutIcon3}
                          alt="Seamless Booking"
                          className="w-8 h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          Seamless Booking Experience
                        </h3>
                        <p className="text-md text-gray-600 leading-relaxed">
                          User-friendly platform with advanced filters, maps,
                          and transparent pricing.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/about_us"
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                  >
                    <span>Know About Us</span>
                    <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Media Planner Section */}
          <section className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
                <div className="flex-1 text-white">
                  <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6">
                    FREE CONSULTATION
                  </div>
                  <h2 className="text-2xl md:text-4xl font-bold mb-6">
                    Need Expert Help?
                  </h2>
                  <p className="text-xl mb-8 text-blue-100 leading-relaxed max-w-xl">
                    Get a free media planner for your next promotion. We handle
                    strategy and placement!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/plan"
                      className="inline-flex items-center px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <i className="fas fa-calendar-check mr-3"></i>
                      📅 Request Free Plan
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-indigo-600 transition-all duration-300"
                    >
                      <i className="fas fa-phone mr-3"></i>
                      Call Now
                    </Link>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <img
                      src={thinkingMediaDost}
                      alt="Media Dost Expert"
                      className="w-96 h-auto"
                    />
                    {/* Floating Icons */}
                    <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                      <i className="fas fa-lightbulb text-white"></i>
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                      <i className="fas fa-chart-bar text-white"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Latest Blogs Section */}
          <section className="py-24 bg-gradient-to-br from-gray-50 to-indigo-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
                  LATEST INSIGHTS
                </div>
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                  Read Our Featured Blogs
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay updated with the latest trends, insights, and strategies
                  in advertising and marketing
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs.map((blog) => (
                  <article
                    key={blog.id}
                    className="group bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-44 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
                      {blog.image ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                              <i className="fas fa-newspaper text-3xl text-indigo-600"></i>
                            </div>
                            <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-semibold text-indigo-600">
                              {blog.category}
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 text-xs font-semibold text-gray-600 shadow-md z-10">
                        {blog.readTime}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center">
                          <i className="fas fa-calendar mr-2"></i>
                          {blog.date}
                        </span>
                        <span className="flex items-center">
                          <i className="fas fa-user mr-2"></i>
                          {blog.author}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <Link
                        to={blog.path}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-bold group-hover:translate-x-1 transition-all duration-300"
                      >
                        <span>Read Full Article</span>
                        <i className="fas fa-arrow-right ml-2"></i>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              <div className="text-center mt-16">
                <Link
                  to="/blog"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-2xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <i className="fas fa-book-open mr-3"></i>
                  View All Blogs
                </Link>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
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
              <div className="text-center text-white max-w-3xl mx-auto">
                <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                  📧 STAY UPDATED
                </div>
                <h2 className="text-2xl md:text-4xl font-bold mb-6">
                  Get Every Latest News
                </h2>
                <p className="text-xl text-gray-200 mb-12 leading-relaxed">
                  Subscribe to our newsletter and stay ahead with the latest
                  advertising trends, tips, and exclusive offers
                </p>
                <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
                  <div className="relative mb-6">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full px-8 py-4 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-30 rounded-2xl text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-lg"
                    />
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i className="fas fa-envelope text-white opacity-70"></i>
                      </div>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center text-lg"
                  >
                    <i className="fas fa-bell mr-3"></i>
                    <span>
                      {isSubscribed ? "✅ Subscribed!" : "Subscribe Now"}
                    </span>
                  </button>
                  {errorMessage && (
                    <p className="mt-4 text-red-300 bg-red-500 bg-opacity-20 px-4 py-2 rounded-lg">
                      {errorMessage}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
};

export default Home;
