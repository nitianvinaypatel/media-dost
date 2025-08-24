import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

console.log('Layout component is rendering'); // Debug log

export default function Layout({ children }) {
  console.log('Layout children:', children); // Debug log

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16 sm:pt-20 relative overflow-x-hidden">
        {/* Error boundary for main content */}
        <React.Suspense fallback={
          <div className="flex items-center justify-center min-h-[50vh]">
            <div className="animate-pulse text-lg">Loading...</div>
          </div>
        }>
          {children}
        </React.Suspense>
      </main>
      <Footer />
    </div>
  );
}
