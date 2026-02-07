import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { handleError, handleSuccess } from "../Utils";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const navigate= useNavigate()
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      return handleError("All fields are required");
    }

    try{
        const url =  "http://localhost:8080/contact/insert";
                    const response = await fetch(url, {
                        method:"POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(formData)
                    }) 
                    const result = await response.json();
                    const {success,message,error} = result;
                    if(success){
                        handleSuccess(message);
                        setTimeout(()=>{
                            navigate('/home')
                        },1000)
                    }

    

    }catch(err){
        handleError("message not sent")

    }

    // Fake success (API connect baad me)
    // handleSuccess("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gray-200 from-blue-50 to-white pt-24 px-6">
      
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Contact <span className="text-blue-600">Us</span>
        </h1>
        <p className="text-gray-600 text-lg">
          Have a question or want to work together? Let’s talk.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-600" />
            <div>
              <h3 className="font-semibold">Email</h3>
              <p className="text-gray-600">paras2115s@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-green-600" />
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p className="text-gray-600">+91 6307478350</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-purple-600" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600">India, Lucknow</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Write your message..."
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
            >
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
