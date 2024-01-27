import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function ScrollToTop() {
  const location = useLocation();
  const path = location.pathname;
  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);
  return null;
}

export default ScrollToTop;
