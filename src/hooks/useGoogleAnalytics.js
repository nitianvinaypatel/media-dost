import { useEffect } from 'react';

export const useGoogleAnalytics = (measurementId) => {
  useEffect(() => {
    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', measurementId);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, [measurementId]);

  // Return tracking function for custom events
  return (eventName, eventParams) => {
    if (window.gtag) {
      window.gtag('event', eventName, eventParams);
    }
  };
}; 