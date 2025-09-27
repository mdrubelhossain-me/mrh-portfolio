import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-gray-400 py-3">
      <div className="flex items-center gap-2">
        <FaEnvelope size={15} />
        <p className="text-sm font-primary">mdrubelhossain659@gmail.com</p>
      </div>

      {/* Divider */}
      <span className="hidden md:inline-block border-[1.4px] border-gray-200 h-5"></span>

      <div className="flex items-center gap-2">
        <FaPhoneAlt size={15} />
        <p className="text-sm font-primary">
          <span className="font-bold">+880</span> 1784539734
        </p>
      </div>
    </div>

    <div className="bg-gray-100 text-center text-gray-500 font-primary text-sm py-4  border-t-[1px] border-t-gray-100">
      <p className="footer-text display-block">
        {" "}
        &copy; {new Date().getFullYear()} MRH. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
