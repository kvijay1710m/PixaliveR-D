import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const location = useLocation(); // Gets current location (path)

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top whenever the route changes
  }, [location]); // Run this effect when the location changes

  return null; // This component doesn't render anything
};

export default ScrollToTop;
