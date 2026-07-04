import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => (
  <footer>
    <div className="bg-gray-100 text-center text-gray-500 font-primary text-sm py-4  border-t-[1px] border-t-gray-100">
      <p className="footer-text display-block">
        {" "}
        &copy; {new Date().getFullYear()} MRH. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
