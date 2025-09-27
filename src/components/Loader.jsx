import React, { useState, useEffect } from "react";

const Loader = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white z-50">
      <p className="text-md font-semibold text-gray-800 animate-pulse">
        Loading...
      </p>
    </div>
  );
};

export default Loader;
