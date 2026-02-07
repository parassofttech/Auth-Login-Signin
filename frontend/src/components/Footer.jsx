import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 w-full">
      <div className=" mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            Paras<span className="text-blue-500">App</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            A modern web platform built to deliver a secure, smooth, and
            user-friendly experience using the latest web technologies.
          </p>
        </div>
 
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400 transition">
                Login
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> paras2115s@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 6307478350
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> India, Lucknow
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://github.com/parassofttech"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Github />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ParasApp. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
