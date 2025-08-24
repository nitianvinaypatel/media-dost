import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  IoTime,
  IoPerson,
  IoShareSocial,
  IoLogoTwitter,
  IoLogoLinkedin,
  IoLogoFacebook,
  IoArrowBack,
  IoBookmark,
} from "react-icons/io5";

function BlogTemplate({ blogData, children }) {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Google Analytics Setup
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "G-VZY83KVCRK");
  }, []);

  return (
    <>
      <Helmet>
        <title>{blogData.title} - Media Dost Blog</title>
        <meta
          name="description"
          content={blogData.excerpt}
        />
        <meta
          name="keywords"
          content={blogData.tags.join(", ")}
        />
        <meta property="og:title" content={`${blogData.title} - Media Dost Blog`} />
        <meta
          property="og:description"
          content={blogData.excerpt}
        />
        <meta property="og:image" content={blogData.image} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blogData.title} />
        <meta
          name="twitter:description"
          content={blogData.excerpt}
        />
        <meta name="twitter:image" content={blogData.image} />
      </Helmet>

      {/* Article Header */}
      <header className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link
            to="/blog"
            className="inline-flex items-center text-white hover:text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base font-medium transition-colors group"
          >
            <IoArrowBack className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <div
              className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm"
            >
              {blogData.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight">
              {blogData.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-sm">
              <span className="flex items-center">
                <IoPerson className="mr-2" />
                {blogData.author}
              </span>
              <span className="flex items-center">
                <IoTime className="mr-2" />
                {blogData.date}
              </span>
              <span className="flex items-center">
                <IoBookmark className="mr-2" />
                {blogData.readTime}
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <main className="py-16 bg-gray-50">
        <article className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blogData.image}
                alt={blogData.title}
                className="w-full h-auto"
              />
            </div>

            {/* Article Text */}
            <div className="prose prose-lg max-w-none">
              {children}
            </div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {blogData.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <IoShareSocial className="mr-2" />
                Share this article
              </h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    blogData.title
                  )}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1DA1F2] text-white rounded-full hover:bg-opacity-90 transition-opacity"
                >
                  <IoLogoTwitter className="text-xl" />
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                    window.location.href
                  )}&title=${encodeURIComponent(blogData.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#0A66C2] text-white rounded-full hover:bg-opacity-90 transition-opacity"
                >
                  <IoLogoLinkedin className="text-xl" />
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#1877F2] text-white rounded-full hover:bg-opacity-90 transition-opacity"
                >
                  <IoLogoFacebook className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </main>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">
              Get the latest insights on startups and entrepreneurship delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-white bg-opacity-10 rounded-xl text-white placeholder-white placeholder-opacity-70 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogTemplate; 