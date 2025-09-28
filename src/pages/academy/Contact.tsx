import React, { useState } from "react";

const ContactAcademy: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent! We will get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-64 bg-gradient-to-r from-purple-600 to-indigo-700 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">Contact Us</h1>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4 grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Send us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              rows={4}
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-700 mb-2">📍 Location: Lagos, Nigeria</p>
          <p className="text-gray-700 mb-2">📧 Email: support@edli.com</p>
          <p className="text-gray-700 mb-4">📞 Phone: +234 812 345 6789</p>
          <p className="text-gray-600">
            We're always happy to hear from you! Whether you have a question
            about our programs, pricing, or anything else, our team is ready to
            answer all your questions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactAcademy;
