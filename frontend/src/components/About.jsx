import React from "react";
import { Globe, Users, Layers, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 px-6">
      
      {/* Top Section */}
      <div className="max-w-5xl mx-auto text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About Our <span className="text-blue-600">Website</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          This platform is designed to provide a smooth, secure and modern web
          experience where users can easily interact, register, and explore
          features without complexity.
        </p>
      </div>

      {/* What this website does */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16">
        
        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            What is this website?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This website is a modern web application built using the latest
            technologies like React, Node.js and MongoDB. It allows users to
            create accounts, log in securely, and interact with different
            features through a clean and responsive interface.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Who is it for?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This platform is ideal for students, developers, and general users
            who want a fast, user-friendly and reliable web experience. It can
            also be extended for real-world projects like dashboards, services,
            or SaaS products.
          </p>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Key <span className="text-blue-600">Features</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <Globe className="text-blue-600 mb-3" />
            <h3 className="font-semibold mb-2">Modern Design</h3>
            <p className="text-sm text-gray-600">
              Clean, responsive UI that works smoothly on all devices.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <Users className="text-green-600 mb-3" />
            <h3 className="font-semibold mb-2">User Authentication</h3>
            <p className="text-sm text-gray-600">
              Secure signup and login system with proper validation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <Layers className="text-purple-600 mb-3" />
            <h3 className="font-semibold mb-2">Scalable Structure</h3>
            <p className="text-sm text-gray-600">
              Built with a scalable architecture for future growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:scale-105 transition">
            <CheckCircle className="text-teal-600 mb-3" />
            <h3 className="font-semibold mb-2">Reliable & Secure</h3>
            <p className="text-sm text-gray-600">
              Focused on performance, security, and best practices.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom Message */}
      <div className="max-w-4xl mx-auto text-center pb-16">
        <h3 className="text-2xl font-semibold mb-4">
          Our Goal
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Our goal is to build a professional, real-world ready web platform that
          demonstrates modern development skills while delivering value to
          users. This project reflects practical knowledge of frontend and
          backend integration.
        </p>
      </div>

    </div>
  );
};

export default About;
