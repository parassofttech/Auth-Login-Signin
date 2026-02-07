import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center bg-gray-50 from-blue-50 via-white to-blue-100 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
            Build, Explore & Experience  
            <span className="text-blue-600 block">
              Modern Web Applications
            </span>
          </h1>
          

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Welcome to our platform — a modern, secure, and user-friendly web
            application built to deliver smooth experiences.  
            Explore features, interact with the system, and enjoy a clean,
            responsive interface designed for real-world use.
          </p>

          <div className="flex gap-4">
            <Link
              to="/signup"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
            >
              Get Started <ArrowRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Visual */}
        <div className="hidden md:flex justify-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
            <div className="relative bg-white rounded-3xl shadow-xl p-8 w-80">
              <h3 className="text-xl font-semibold mb-2">
                Why choose this platform?
              </h3>
              <ul className="text-gray-600 space-y-2">
                <li>✔ Secure authentication</li>
                <li>✔ Modern UI & UX</li>
                <li>✔ Fast & responsive</li>
                <li>✔ Scalable architecture</li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
