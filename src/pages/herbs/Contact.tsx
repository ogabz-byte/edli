import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-600">
          Have questions about our herbal products or services? Send us a
          message and we’ll get back to you soon.
        </p>
      </div>

      {/* Contact Form */}
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md mb-10">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Message
            </label>
            <textarea
              placeholder="Write your message"
              rows={4}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-green-600 focus:outline-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto text-center text-gray-700">
        <p>
          Email: <span className="text-green-700">support@herbalife.com</span>
        </p>
        <p>
          Phone: <span className="text-green-700">+234 800 123 4567</span>
        </p>
        <p>
          Location: <span className="text-green-700">Lagos, Nigeria</span>
        </p>
      </div>
    </section>
  );
};

export default Contact;
