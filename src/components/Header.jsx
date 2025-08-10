import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  IoMenu,
  IoClose,
  IoPerson,
  IoPersonOutline,
  IoCart,
  IoCartOutline,
  IoCheckmarkCircleOutline,
  IoMail,
  IoLockClosed,
  IoEye,
  IoEyeOff,
  IoChevronDown,
  IoNotifications,
  IoSettings,
  IoLogOut,
  IoHome,
  IoBag,
  IoNewspaper,
  IoPeople,
  IoInformationCircle,
  IoCall,
  IoShield,
  IoStar,
  IoCheckmark,
} from "react-icons/io5";
import logo from "../assets/images/favicon.png";
export default function Header() {
  // State Management
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Get current location from React Router
  const location = useLocation();
  const currentPage = location.pathname;

  // Form States
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [loginError, setLoginError] = useState("");
  const [signupError, setSignupError] = useState("");
  const [isLoginProcessing, setIsLoginProcessing] = useState(false);
  const [isSignupProcessing, setIsSignupProcessing] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Simulate user session check
  useEffect(() => {
    // In a real app, this would check localStorage/sessionStorage or make an API call
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      // Simulate cart count fetch
      setCartCount(3); // Mock cart count
    }
  }, []);

  // Handle navigation toggle
  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Handle modal functions
  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsSignupModalOpen(false);
    clearForms();
    document.body.classList.add("overflow-hidden");
  };

  const openSignupModal = () => {
    setIsSignupModalOpen(true);
    setIsLoginModalOpen(false);
    clearForms();
    document.body.classList.add("overflow-hidden");
  };

  const closeModals = () => {
    setIsLoginModalOpen(false);
    setIsSignupModalOpen(false);
    document.body.classList.remove("overflow-hidden");
    clearForms();
  };

  const clearForms = () => {
    setLoginForm({ email: "", password: "" });
    setSignupForm({ name: "", email: "", password: "", confirm_password: "" });
    setLoginError("");
    setSignupError("");
    setShowPassword(false);
    setShowConfirmPassword(false);
    setIsLoginProcessing(false);
    setIsSignupProcessing(false);
  };

  // Handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setIsLoginProcessing(true);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (loginForm.email && loginForm.password) {
        // Mock successful login
        const mockUser = {
          id: 1,
          name: "John Doe",
          email: loginForm.email,
          avatar: null,
        };
        setUser(mockUser);
        localStorage.setItem("user", JSON.stringify(mockUser));
        setCartCount(3); // Mock cart count
        closeModals();

        // Show success notification (you could implement a toast here)
        console.log("Login successful!");
      } else {
        setLoginError("Please fill in all fields");
      }
    } catch {
      setLoginError("Login failed. Please try again.");
    } finally {
      setIsLoginProcessing(false);
    }
  };

  // Handle signup
  const handleSignup = async (e) => {
    e.preventDefault();
    setSignupError("");
    setIsSignupProcessing(true);

    try {
      // Validate passwords match
      if (signupForm.password !== signupForm.confirm_password) {
        setSignupError("Passwords do not match");
        setIsSignupProcessing(false);
        return;
      }

      // Validate password strength
      if (signupForm.password.length < 6) {
        setSignupError("Password must be at least 6 characters long");
        setIsSignupProcessing(false);
        return;
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock successful signup
      setSignupError(
        "Account created successfully! Please check your email to verify your account."
      );

      // Reset form after success
      setTimeout(() => {
        clearForms();
        closeModals();
      }, 3000);
    } catch {
      setSignupError("Signup failed. Please try again.");
    } finally {
      setIsSignupProcessing(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    setUser(null);
    setCartCount(0);
    localStorage.removeItem("user");
    setIsUserDropdownOpen(false);
  };

  // Navigation items with icons
  const navItems = [
    { name: "Home", href: "/", key: "/", icon: IoHome },
    { name: "My Orders", href: "/order", key: "/order", icon: IoBag },
    { name: "Blog", href: "/blog", key: "/blog", icon: IoNewspaper },
    { name: "Team", href: "/team", key: "/team", icon: IoPeople },
    {
      name: "About Us",
      href: "/about_us",
      key: "/about_us",
      icon: IoInformationCircle,
    },
    { name: "Contact Us", href: "/contact", key: "/contact", icon: IoCall },
  ];

  return (
    <>
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100"
            : "bg-white shadow-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="group flex items-center space-x-3">
              <img src={logo} alt="Media Dost" className="w-10 h-10" />
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Media Dost
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Your Media Partner
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`group relative px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                  currentPage === item.key
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                }`}
              >
                <item.icon className="text-lg" />
                <span>{item.name}</span>
                {currentPage === item.key && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center space-x-3">
            {/* User Actions */}
            {user ? (
              <div className="relative">
                {/* User Dropdown */}
                <button
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  className="flex items-center space-x-3 px-4 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-xl hover:bg-gray-50"
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                    {user.avatar ? (
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      <IoPerson className="text-white text-sm" />
                    )}
                  </div>
                  <div className="hidden sm:block text-left">
                    <p className="font-semibold text-sm">{user.name}</p>
                    <p className="text-xs text-gray-500">Premium Member</p>
                  </div>
                  <IoChevronDown
                    className={`text-sm transition-transform duration-200 ${
                      isUserDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Enhanced Dropdown Menu */}
                {isUserDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-20 overflow-hidden">
                    {/* User Info Header */}
                    <div className="px-4 py-3 bg-gradient-to-r from-indigo-50 to-purple-50 border-b border-gray-100">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
                          <IoPerson className="text-white text-lg" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800">
                            {user.name}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                          <div className="flex items-center mt-1">
                            <IoStar className="text-yellow-400 text-xs mr-1" />
                            <span className="text-xs text-gray-500">
                              Premium Member
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Menu Items */}
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <IoPerson className="text-lg" />
                        <span>My Profile</span>
                      </Link>
                      <Link
                        to="/order"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <IoBag className="text-lg" />
                        <div className="flex-1 flex items-center justify-between">
                          <span>My Orders</span>
                          {cartCount > 0 && (
                            <span className="bg-indigo-100 text-indigo-600 text-xs px-2 py-1 rounded-full font-medium">
                              {cartCount}
                            </span>
                          )}
                        </div>
                      </Link>
                      <Link
                        to="/notifications"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <IoNotifications className="text-lg" />
                        <div className="flex-1 flex items-center justify-between">
                          <span>Notifications</span>
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                        </div>
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-indigo-600 transition-colors"
                        onClick={() => setIsUserDropdownOpen(false)}
                      >
                        <IoSettings className="text-lg" />
                        <span>Settings</span>
                      </Link>
                    </div>

                    <div className="border-t border-gray-100 py-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <IoLogOut className="text-lg" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={openLoginModal}
                  className="flex items-center space-x-2 px-3 py-2 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-sm active:scale-95 sm:px-4 sm:py-2 sm:text-base"
                >
                  <span className="text-xs sm:text-base">Get Started</span>
                </button>
              </div>
            )}

            {/* Cart */}
            {user && (
              <Link
                to={currentPage === "/cart" ? "/order" : "/cart"}
                className="relative flex items-center px-1 py-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-xl hover:bg-gray-50"
              >
                <div className="relative">
                  {currentPage === "/cart" ? (
                    <IoCheckmarkCircleOutline className="text-xl" />
                  ) : (
                    <IoCartOutline className="text-xl" />
                  )}
                  {currentPage !== "/cart" && cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="hidden sm:inline font-medium">
                  {currentPage === "/cart" ? "Orders" : "Cart"}
                </span>
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleNav}
              className="lg:hidden p-2 text-gray-700 hover:text-indigo-600 transition-colors rounded-xl hover:bg-gray-50"
            >
              {isNavOpen ? (
                <IoClose className="text-2xl" />
              ) : (
                <IoMenu className="text-2xl" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isNavOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <nav className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    currentPage === item.key
                      ? "text-indigo-600 bg-indigo-50"
                      : "text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsNavOpen(false)}
                >
                  <item.icon className="text-lg" />
                  <span>{item.name}</span>
                  {currentPage === item.key && (
                    <IoCheckmark className="text-indigo-600 ml-auto" />
                  )}
                </Link>
              ))}

              {!user && (
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <button
                    onClick={openLoginModal}
                    className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm text-gray-700 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors font-medium sm:px-4 sm:py-3 sm:text-base"
                  >
                    <IoPersonOutline className="text-lg" />
                    <span className="text-xs sm:text-base">Sign In</span>
                  </button>
                  <button
                    onClick={openSignupModal}
                    className="w-full flex items-center justify-center space-x-2 px-3 py-2 text-sm bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-sm active:scale-95 sm:px-4 sm:py-3 sm:text-base"
                  >
                    <span className="text-xs sm:text-base">
                      Get Started Free
                    </span>
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Enhanced Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto flex shadow-2xl">
            {/* Left Container - Enhanced */}
            <div className="hidden md:flex flex-1 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-12 rounded-l-3xl flex-col justify-center items-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
              <div className="absolute bottom-10 right-10 w-16 h-16 bg-yellow-400 bg-opacity-20 rounded-full animate-bounce"></div>

              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center">
                    <IoPerson className="text-4xl text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Welcome Back!</h3>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Sign in to <strong>Media Dost</strong> and continue your
                  advertising journey
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <IoShield className="text-green-400" />
                    <span>Secure Login</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoStar className="text-yellow-400" />
                    <span>Premium Access</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container - Enhanced */}
            <div className="flex-1 p-12 relative">
              <button
                onClick={closeModals}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoClose className="text-xl" />
              </button>

              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Sign In
                  </h2>
                  <p className="text-gray-600">
                    Access your Media Dost account
                  </p>
                </div>

                {loginError && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center space-x-2">
                    <IoClose className="text-red-500 flex-shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <IoMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={loginForm.email}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <IoLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={loginForm.password}
                          onChange={(e) =>
                            setLoginForm({
                              ...loginForm,
                              password: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors"
                        >
                          {showPassword ? <IoEyeOff /> : <IoEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="ml-2 text-sm text-gray-600">
                        Remember me
                      </span>
                    </label>
                    <a
                      href="/forgot-password"
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    >
                      Forgot Password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoginProcessing}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {isLoginProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Signing In...
                      </>
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Don't have an account?{" "}
                    <button
                      onClick={openSignupModal}
                      className="text-indigo-600 hover:text-indigo-700 font-semibold"
                    >
                      Create Account
                    </button>
                  </p>
                </div>

                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">
                        Or continue with
                      </span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="w-full flex items-center justify-center space-x-3 border-2 border-gray-200 py-3 rounded-xl hover:border-indigo-300 hover:bg-gray-50 transition-all duration-200">
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path
                          fill="#4285F4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34A853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FBBC05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#EA4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                      <span className="font-medium text-gray-700">Google</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Signup Modal */}
      {isSignupModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-5xl w-full max-h-[95vh] overflow-y-auto flex shadow-2xl">
            {/* Left Container - Enhanced */}
            <div className="hidden md:flex flex-1 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 text-white p-12 rounded-l-3xl flex-col justify-center items-center relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div
                  className="absolute top-0 left-0 w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                ></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-10 right-10 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-bounce"></div>
              <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-400 bg-opacity-20 rounded-full animate-pulse"></div>

              <div className="relative z-10 text-center">
                <div className="w-32 h-32 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-8 mx-auto backdrop-blur-sm">
                  <div className="w-20 h-20 bg-white bg-opacity-30 rounded-2xl flex items-center justify-center">
                    <IoStar className="text-4xl text-white" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-4">Join Media Dost!</h3>
                <p className="text-xl text-gray-200 mb-6 leading-relaxed">
                  Create your account and start your{" "}
                  <strong>advertising journey</strong> today
                </p>
                <div className="flex items-center justify-center space-x-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <IoCheckmark className="text-green-400" />
                    <span>Free Account</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <IoShield className="text-blue-400" />
                    <span>Secure & Safe</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Container - Enhanced */}
            <div className="flex-1 p-12 relative">
              <button
                onClick={closeModals}
                className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
              >
                <IoClose className="text-xl" />
              </button>

              <div className="max-w-md mx-auto">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">
                    Create Account
                  </h2>
                  <p className="text-gray-600">
                    Join thousands of successful advertisers
                  </p>
                </div>

                {signupError && (
                  <div
                    className={`mb-6 p-4 border rounded-xl flex items-center space-x-2 ${
                      signupError.includes("successful")
                        ? "bg-green-50 border-green-200 text-green-700"
                        : "bg-red-50 border-red-200 text-red-700"
                    }`}
                  >
                    {signupError.includes("successful") ? (
                      <IoCheckmark className="text-green-500 flex-shrink-0" />
                    ) : (
                      <IoClose className="text-red-500 flex-shrink-0" />
                    )}
                    <span>{signupError}</span>
                  </div>
                )}

                <form onSubmit={handleSignup} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name
                      </label>
                      <div className="relative">
                        <IoPerson className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          value={signupForm.name}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              name: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address
                      </label>
                      <div className="relative">
                        <IoMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={signupForm.email}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              email: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Password
                      </label>
                      <div className="relative">
                        <IoLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showPassword ? "text" : "password"}
                          placeholder="Create a password"
                          value={signupForm.password}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              password: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                        >
                          {showPassword ? <IoEyeOff /> : <IoEye />}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Confirm Password
                      </label>
                      <div className="relative">
                        <IoLockClosed className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          value={signupForm.confirm_password}
                          onChange={(e) =>
                            setSignupForm({
                              ...signupForm,
                              confirm_password: e.target.value,
                            })
                          }
                          className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-all duration-200 bg-gray-50 focus:bg-white"
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-purple-500 transition-colors"
                        >
                          {showConfirmPassword ? <IoEyeOff /> : <IoEye />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                    />
                    <label className="text-sm text-gray-600 leading-relaxed">
                      I agree to the{" "}
                      <a
                        href="/terms"
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Terms of Service
                      </a>{" "}
                      and{" "}
                      <a
                        href="/privacy"
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        Privacy Policy
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSignupProcessing}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    {isSignupProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Creating Account...
                      </>
                    ) : (
                      "Create Account"
                    )}
                  </button>
                </form>

                <div className="mt-8 text-center">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <button
                      onClick={openLoginModal}
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Sign In
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close dropdowns */}
      {(isUserDropdownOpen || isNavOpen) && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => {
            setIsUserDropdownOpen(false);
            setIsNavOpen(false);
          }}
        />
      )}
    </>
  );
}
