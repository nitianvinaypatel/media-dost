import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  IoSearch,
  IoFilter,
  IoTime,
  IoPerson,
  IoEye,
  IoArrowForward,
  IoBookmark,
} from "react-icons/io5";
import outdoorImage from "../assets/images/outdoor.webp";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [filteredBlogs, setFilteredBlogs] = useState([]);

  useEffect(() => {
    // Google Analytics Setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-VZY83KVCRK");
  }, []);

  // Enhanced blog data with more professional structure and slugs
  const blogs = [
    {
      id: 1,
      slug: "startup",
      title:
        "Why Start a Startup in Bihar: Opportunities in 2025 with the Startup Bihar Policy",
      author: "Piyush Rajput",
      date: "20/04/2025",
      category: "Startup",
      readTime: "5 min read",
      excerpt:
        "Discover the emerging opportunities and government support for startups in Bihar with the new Startup Bihar Policy 2025.",
      image: outdoorImage,
      tags: ["startup", "bihar", "policy", "opportunities"],
      featured: true,
      path: "/blog/startup"
    },
    {
      id: 2,
      slug: "outdoor-advertising",
      title:
        "Outdoor Advertising in 2025: Types, Benefits & Why It Still Works",
      author: "Piyush Rajput",
      date: "13/04/2025",
      category: "Advertising",
      readTime: "7 min read",
      excerpt:
        "Explore the evolution of outdoor advertising and why it remains a powerful marketing tool in the digital age.",
      image: outdoorImage,
      tags: ["advertising", "outdoor", "marketing", "2025"],
      featured: true,
      path: "/blog/outdoor-advertising"
    },
    {
      id: 3,
      slug: "digital-marketing-trends",
      title: "Digital Marketing Trends 2025: Transforming Business Growth in India",
      author: "Rahul Kumar",
      date: "22/04/2025",
      category: "Digital Marketing",
      readTime: "6 min read",
      excerpt: "Explore the latest digital marketing trends shaping business success in India. From AI-powered marketing to social commerce, discover what's driving growth in 2025.",
      image: outdoorImage,
      tags: ["digital marketing", "trends", "social media", "SEO"],
      featured: true,
      path: "/blog/digital-marketing-trends"
    },
    {
      id: 4,
      slug: "television-advertising",
      title: "The Power of Television Advertising in India's Digital Age",
      author: "Priya Singh",
      date: "23/04/2025",
      category: "Advertising",
      readTime: "7 min read",
      excerpt: "Despite the digital revolution, television advertising remains a powerful tool for brand building in India. Discover why TV ads continue to deliver unmatched reach and impact.",
      image: outdoorImage,
      tags: ["television", "advertising", "marketing", "brand awareness"],
      featured: false,
      path: "/blog/television-advertising"
    },
    {
      id: 5,
      slug: "radio-advertising",
      title: "The Unique Benefits of Radio Advertising in 2025",
      author: "Amit Verma",
      date: "24/04/2025",
      category: "Advertising",
      readTime: "5 min read",
      excerpt: "Discover why radio advertising remains a powerful medium for reaching targeted audiences, building brand awareness, and driving local business growth in 2025.",
      image: outdoorImage,
      tags: ["radio", "advertising", "marketing", "local marketing"],
      featured: false,
      path: "/blog/radio-advertising"
    },
    {
      id: 6,
      slug: "find-sponsors",
      title:
        "How to Find Sponsors for Your Event in 2025: A Complete Guide for Organizers",
      author: "Piyush Rajput",
      date: "08/02/2025",
      category: "Events",
      readTime: "6 min read",
      excerpt:
        "A comprehensive guide to securing sponsors for your events with proven strategies and best practices.",
      image: outdoorImage,
      tags: ["events", "sponsorship", "guide", "organizers"],
      featured: false,
      path: "/blog/find-sponsors"
    },
    {
      id: 7,
      slug: "roi-metrics",
      title: "ROI Metrics That Matter in Modern Advertising",
      author: "Piyush Rajput",
      date: "15/01/2025",
      category: "Analytics",
      readTime: "4 min read",
      excerpt:
        "Learn about the key performance indicators that truly measure advertising success in today's market.",
      image: outdoorImage,
      tags: ["roi", "metrics", "analytics", "advertising"],
      featured: false,
      path: "/blog/roi-metrics"
    },
    {
      id: 8,
      slug: "brand-identity",
      title: "Building Brand Identity Through Strategic Media Placement",
      author: "Piyush Rajput",
      date: "05/01/2025",
      category: "Branding",
      readTime: "6 min read",
      excerpt:
        "Discover how strategic media placement can enhance your brand identity and market presence.",
      image: outdoorImage,
      tags: ["branding", "identity", "media", "strategy"],
      featured: false,
      path: "/blog/brand-identity"
    },
  ];

  const categories = [
    "all",
    "Startup",
    "Advertising",
    "Events",
    "Digital Marketing",
    "Analytics",
    "Branding",
  ];

  // Filter blogs based on search and category
  useEffect(() => {
    let filtered = blogs;

    if (selectedCategory !== "all") {
      filtered = filtered.filter((blog) => blog.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          blog.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    setFilteredBlogs(filtered);
  }, [searchTerm, selectedCategory]);

  const getCategoryColor = (category) => {
    const colors = {
      Startup: "from-purple-500 to-purple-600",
      Advertising: "from-blue-500 to-blue-600",
      Events: "from-green-500 to-green-600",
      "Digital Marketing": "from-orange-500 to-orange-600",
      Analytics: "from-red-500 to-red-600",
      Branding: "from-indigo-500 to-indigo-600",
    };
    return colors[category] || "from-gray-500 to-gray-600";
  };

  const getCategoryBadgeColor = (category) => {
    const colors = {
      Startup: "bg-purple-100 text-purple-700 border-purple-200",
      Advertising: "bg-blue-100 text-blue-700 border-blue-200",
      Events: "bg-green-100 text-green-700 border-green-200",
      "Digital Marketing": "bg-orange-100 text-orange-700 border-orange-200",
      Analytics: "bg-red-100 text-red-700 border-red-200",
      Branding: "bg-indigo-100 text-indigo-700 border-indigo-200",
    };
    return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
  };

  return (
    <>
      <Helmet>
        <title>
          Professional Blog - Media Dost | Latest Insights & Industry Trends
        </title>
        <meta
          name="description"
          content="Explore expert insights, industry trends, and professional advice on advertising, marketing, and business growth with Media Dost's comprehensive blog."
        />
        <meta
          name="keywords"
          content="advertising blog, marketing insights, business growth, digital marketing, outdoor advertising, startup guide, media trends, professional advice"
        />
        <meta
          property="og:title"
          content="Media Dost Blog - Professional Insights & Industry Expertise"
        />
        <meta
          property="og:description"
          content="Stay ahead with expert insights on advertising, marketing strategies, and business growth from Media Dost's professional blog."
        />
        <meta
          property="og:image"
          content="https://www.mediadost.com/assets/images/blog-og-image.jpg"
        />
        <meta property="og:url" content="https://www.mediadost.com/blog-page" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Media Dost Blog - Professional Insights & Industry Expertise"
        />
        <meta
          name="twitter:description"
          content="Expert insights on advertising, marketing, and business growth strategies."
        />
        <meta
          name="twitter:image"
          content="https://www.mediadost.com/assets/images/blog-og-image.jpg"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Blog",
            name: "Media Dost Professional Blog",
            description:
              "Expert insights and professional advice on advertising, marketing, and business growth strategies.",
            url: "https://www.mediadost.com/blog-page",
            publisher: {
              "@type": "Organization",
              name: "Media Dost",
              logo: {
                "@type": "ImageObject",
                url: "https://www.mediadost.com/assets/images/logo.png",
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.mediadost.com/blog-page",
            },
          })}
        </script>
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
              📚 PROFESSIONAL INSIGHTS
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Expert Insights &
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                {" "}
                Industry Trends
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Stay ahead with professional insights, proven strategies, and
              industry expertise from Media Dost
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="text-3xl font-bold">{blogs.length}+</div>
                <div className="text-sm opacity-80">Expert Articles</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="text-3xl font-bold">
                  {categories.length - 1}
                </div>
                <div className="text-sm opacity-80">Categories</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-sm opacity-80">Monthly Readers</div>
              </div>
              <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-6 text-center border border-white border-opacity-20">
                <div className="text-3xl font-bold">Weekly</div>
                <div className="text-sm opacity-80">New Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search articles, topics, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                      selectedCategory === category
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category === "all" ? "All Articles" : category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      {blogs.filter((blog) => blog.featured).length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-600 rounded-full text-sm font-semibold mb-4">
                ⭐ FEATURED CONTENT
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Featured Articles
              </h2>
              <p className="text-xl text-gray-600">
                Our most popular and impactful content
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {blogs
                .filter((blog) => blog.featured)
                .slice(0, 2)
                .map((blog) => (
                  <article
                    key={blog.id}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                          blog.category
                        )} opacity-40`}
                      ></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                            <IoBookmark className="text-3xl" />
                          </div>
                          <div
                            className={`inline-block px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm font-semibold backdrop-blur-sm`}
                          >
                            Featured
                          </div>
                        </div>
                      </div>
                      <div
                        className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeColor(
                          blog.category
                        )}`}
                      >
                        {blog.category}
                      </div>
                      <div className="absolute top-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-white">
                        {blog.readTime}
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span className="flex items-center gap-1">
                          <IoPerson className="text-indigo-500" />
                          {blog.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <IoTime className="text-indigo-500" />
                          {blog.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-indigo-600 transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {blog.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                          {blog.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <Link
                          to={blog.path}
                          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-bold group-hover:translate-x-1 transition-all duration-300"
                        >
                          <span>Read Article</span>
                          <IoArrowForward className="ml-2" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles Section */}
      <section
        className="py-24 bg-gradient-to-br from-gray-50 to-blue-50"
        aria-label="blog articles section"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              📖 ALL ARTICLES
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {selectedCategory === "all"
                ? "Latest Articles"
                : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {filteredBlogs.length} article
              {filteredBlogs.length !== 1 ? "s" : ""} found
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => (
                <article
                  key={blog.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(
                        blog.category
                      )} opacity-40`}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                          <IoEye className="text-2xl" />
                        </div>
                        <div className="text-sm font-medium opacity-90">
                          {blog.category}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-semibold border ${getCategoryBadgeColor(
                        blog.category
                      )}`}
                    >
                      {blog.category}
                    </div>
                    <div className="absolute top-3 right-3 bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-semibold text-white">
                      {blog.readTime}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <IoPerson className="text-indigo-500" />
                        {blog.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <IoTime className="text-indigo-500" />
                        {blog.date}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold mb-3 leading-tight group-hover:text-indigo-600 transition-colors">
                      <Link
                        to={blog.path}
                        className="text-gray-800 hover:text-indigo-600 transition-colors duration-300"
                      >
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        to={blog.path}
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
                      >
                        <span>Read More</span>
                        <IoArrowForward className="ml-1 text-sm" />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <IoSearch className="w-16 h-16 text-indigo-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">
                No Articles Found
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                {searchTerm
                  ? `No articles found for "${searchTerm}". Try different keywords or browse all categories.`
                  : `No articles found in the ${selectedCategory} category.`}
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 font-semibold"
              >
                <IoSearch />
                Browse All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative py-24 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-3xl mx-auto">
            <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              📧 STAY INFORMED
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Never Miss an Update
            </h2>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed">
              Subscribe to our newsletter and get the latest insights, trends,
              and expert advice delivered to your inbox
            </p>
            <div className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 bg-white bg-opacity-15 backdrop-blur-md border border-white border-opacity-30 rounded-xl text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                />
                <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
