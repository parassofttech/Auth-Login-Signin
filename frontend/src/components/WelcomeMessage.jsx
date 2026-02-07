import React from "react";

const WelcomeMessage = ({ userName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mt-10">
      {/* <h2 className="text-3xl font-semibold text-gray-800 mb-4">
        Welcome{userName ? `, ${userName}` : ""} 👋
      </h2> */}

      <p className="text-gray-600 leading-relaxed mb-4">
        Thank you for logging in and visiting our website.
        We’re truly glad to have you here.
      </p>
 
      <p className="text-gray-600 leading-relaxed mb-4">
        This platform is designed to provide you with a smooth, secure,
        and user-friendly experience. Every feature you see here
        is built using modern technologies and best practices
        to ensure performance, reliability, and ease of use.
      </p>

      <p className="text-gray-600 leading-relaxed">
        Feel free to explore the website, discover the features,
        and make the most of your time here.
        We hope you enjoy your experience with us.
      </p>
    </div>
  );
};

export default WelcomeMessage;
