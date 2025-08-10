import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./Layout";

// Import page components
import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Outdoor from "./pages/genre/outdoor/Outdoor";
import StartupBlog from "./pages/blogs/startup";
import OutdoorAdvertisingBlog from "./pages/blogs/outdoor-advertising";
import DigitalMarketingBlog from "./pages/blogs/digital-marketing-trends";
import TelevisionAdvertisingBlog from "./pages/blogs/television-advertising";
import RadioAdvertisingBlog from "./pages/blogs/radio-advertising";

import OutdoorProductDetail from "./pages/genre/outdoor/OutdoorProductDetail";
import Residential from "./pages/genre/residential/Residential";
import RetailMall from "./pages/genre/retailmall/RetailMall";
import Transit from "./pages/genre/transit/Transit";
import AudioVideoAd from "./pages/genre/audiovideoad/AudioVideoAd";
import DigitalPR from "./pages/genre/digitalpr/DigitalPR";
import FindEvents from "./pages/genre/findevents/FindEvents";
import WaterBottleBranding from "./pages/genre/waterbottle/WaterBottleBranding";
import DigitalMarketing from "./pages/genre/digitalmarketing/DigitalMarketing";
import Radio from "./pages/genre/radio/Radio";
import Television from "./pages/genre/television/Television";
import Others from "./pages/genre/others/Others";
import ResidentialProductDetail from "./pages/genre/residential/ResidentialProductDetail";
import RetailMallProductDetail from "./pages/genre/retailmall/RetailMallProductDetail";
import TransitProductDetail from "./pages/genre/transit/TransitProductDetail";
import DigitalMarketingProductDetail from "./pages/genre/digitalmarketing/DigitalMarketingProductDetail";
import DigitalPRProductDetail from "./pages/genre/digitalpr/DigitalPRProductDetail";
import TelevisionProductDetail from "./pages/genre/television/TelevisionProductDetail";
import WaterBottleBrandingProductDetail from "./pages/genre/waterbottle/WaterBottleBrandingProductDetail";
import FindEventsProductDetail from "./pages/genre/findevents/FindEventsProductDetail";
import RadioProductDetail from "./pages/genre/radio/RadioProductDetail";
import AudioVideoAdProductDetail from "./pages/genre/audiovideoad/AudioVideoAdProductDetail";
import OthersProductDetail from "./pages/genre/others/OthersProductDetail";
import Plan from "./pages/Plan";
import Flex from "./pages/Flex";
import CreateWithUs from "./pages/CreateWithUs";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h1 className="text-2xl font-bold text-red-600 mb-4">
              Something went wrong
            </h1>
            <p className="text-gray-600">{this.state.error?.message}</p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

console.log("App component is rendering"); // Debug log

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <Layout>
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  Loading...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/startup" element={<StartupBlog />} />
                <Route
                  path="/blog/outdoor-advertising"
                  element={<OutdoorAdvertisingBlog />}
                />
                <Route
                  path="/blog/digital-marketing-trends"
                  element={<DigitalMarketingBlog />}
                />
                <Route
                  path="/blog/television-advertising"
                  element={<TelevisionAdvertisingBlog />}
                />
                <Route
                  path="/blog/radio-advertising"
                  element={<RadioAdvertisingBlog />}
                />
                <Route path="/blog/find-sponsors" element={<StartupBlog />} />
                <Route path="/blog/roi-metrics" element={<StartupBlog />} />
                <Route path="/blog/brand-identity" element={<StartupBlog />} />
                <Route path="/order" element={<Orders />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/cart" element={<Orders />} />
                <Route path="/login" element={<Login />} />
                <Route path="/outdoor" element={<Outdoor />} />
                <Route
                  path="/outdoor/product/:id"
                  element={<OutdoorProductDetail />}
                />
                <Route path="/residential" element={<Residential />} />
                <Route path="/retail-mall" element={<RetailMall />} />
                <Route path="/transit" element={<Transit />} />
                <Route path="/audio-video-ad" element={<AudioVideoAd />} />
                <Route path="/digital-pr" element={<DigitalPR />} />
                <Route path="/find-events" element={<FindEvents />} />
                <Route
                  path="/water-bottle-branding"
                  element={<WaterBottleBranding />}
                />
                <Route
                  path="/digital-marketing"
                  element={<DigitalMarketing />}
                />
                <Route path="/radio" element={<Radio />} />
                <Route path="/television" element={<Television />} />
                <Route path="/others" element={<Others />} />
                <Route
                  path="/residential/product/:id"
                  element={<ResidentialProductDetail />}
                />
                <Route
                  path="/retail-mall/product/:id"
                  element={<RetailMallProductDetail />}
                />
                <Route
                  path="/transit/product/:id"
                  element={<TransitProductDetail />}
                />
                <Route
                  path="/digital-marketing/product/:id"
                  element={<DigitalMarketingProductDetail />}
                />
                <Route
                  path="/digital-pr/product/:id"
                  element={<DigitalPRProductDetail />}
                />
                <Route
                  path="/television/product/:id"
                  element={<TelevisionProductDetail />}
                />
                <Route
                  path="/water-bottle-branding/product/:id"
                  element={<WaterBottleBrandingProductDetail />}
                />
                <Route
                  path="/find-events/product/:id"
                  element={<FindEventsProductDetail />}
                />
                <Route
                  path="/radio/product/:id"
                  element={<RadioProductDetail />}
                />
                <Route
                  path="/audio-video-ad/product/:id"
                  element={<AudioVideoAdProductDetail />}
                />
                <Route
                  path="/others/product/:id"
                  element={<OthersProductDetail />}
                />
                <Route path="/plan" element={<Plan />} />
                <Route path="/flex" element={<Flex />} />
                <Route path="/create-with-us" element={<CreateWithUs />} />

                {/* Redirect all unknown routes to home */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Suspense>
          </Layout>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
