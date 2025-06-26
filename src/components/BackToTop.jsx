import React, { useEffect, useState } from 'react';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-primary-dark transition-colors duration-200"
      aria-label="Back to top"
    >
      ↑
    </button>
  ) : null;
};

export default BackToTop; 