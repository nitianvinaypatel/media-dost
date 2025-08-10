import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoFacebook,
  IoChevronForward,
  IoLocationOutline,
  IoCall,
  IoMailOutline,
  IoArrowUp,
} from "react-icons/io5";

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll to show/hide back to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const exploreLinks = [
    { name: "About Us", href: "/about_us" },
    { name: "Upcoming Events", href: "/events" },
    { name: "Blog & News", href: "/blog-page" },
    { name: "FAQ Question", href: "/comingsoon" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ];

  const usefulLinks = [
    { name: "Contact Us", href: "/contact" },
    { name: "My Orders", href: "/order" },
    { name: "My Profile", href: "/profile" },
    { name: "Team", href: "/team" },
    { name: "Terms & Conditions", href: "/terms-and-conditions" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/mediadost_?igsh=MXRpa2w5a29qOTljeg==",
      icon: IoLogoInstagram,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/mediadost/",
      icon: IoLogoLinkedin,
    },
    {
      name: "Twitter",
      href: "#",
      icon: IoLogoTwitter,
    },
    {
      name: "Facebook",
      href: "#",
      icon: IoLogoFacebook,
    },
  ];

  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          {/* Footer Top */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Footer Brand */}
            <div className="lg:col-span-1">
              <Link
                to="/"
                className="text-2xl font-bold text-blue-400 mb-4 block"
              >
                Media Dost
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Advertising should be effortless and impactful. At MediaDost, we
                ensure every ad finds its perfect place, engaging audiences with
                precision and purpose. Experience the future of seamless
                advertising with us.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <social.icon className="text-lg" />
                  </a>
                ))}
              </div>
            </div>

            {/* Explore Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Explore</h3>
              <ul className="space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <IoChevronForward className="text-blue-400 mr-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Useful Links
              </h3>
              <ul className="space-y-3">
                {usefulLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="flex items-center text-gray-300 hover:text-blue-400 transition-colors duration-300 group"
                    >
                      <IoChevronForward className="text-blue-400 mr-2 text-sm group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <IoLocationOutline className="text-blue-400 mr-3 mt-1 text-lg flex-shrink-0" />
                  <address className="text-gray-300 not-italic leading-relaxed">
                    GEC Jamui, Amrath-811313, Bihar
                  </address>
                </li>
                <li className="flex items-center">
                  <IoCall className="text-blue-400 mr-3 text-lg flex-shrink-0" />
                  <a
                    href="tel:+919942222304"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    + 91 99422-22304
                  </a>
                </li>
                <li className="flex items-center">
                  <IoMailOutline className="text-blue-400 mr-3 text-lg flex-shrink-0" />
                  <a
                    href="mailto:contact@mediadost.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    contact@mediadost.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-400">
                Copyright 2025 Media Dost. All Rights Reserved by{" "}
                <button
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 font-medium cursor-pointer"
                  onClick={scrollToTop}
                >
                  MediaDost
                </button>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Back to top"
        >
          <IoArrowUp className="text-xl mx-auto" />
        </button>
      )}
    </>
  );
}
