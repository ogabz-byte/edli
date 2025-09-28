import React from "react";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-800 text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Herbal Life</h2>
          <p className="text-gray-200 text-sm">
            Bringing you the best of nature with herbal wellness products and
            health-focused initiatives for a better life.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-200 text-sm">
            <li>
              <a href="/" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white transition">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition">
                Services
              </a>
            </li>
            <li>
              <a href="/product" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-gray-200 text-sm">Email: info@herballife.com</p>
          <p className="text-gray-200 text-sm mb-4">Phone: +234 800 123 4567</p>

          <div className="flex space-x-4 mt-2">
            {/* <a href="#" className="hover:text-green-300 transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-green-300 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-green-300 transition"><FaInstagram size={20} /></a> */}
            <a href="#" className="hover:text-green-300 transition">
              Facebook
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Twitter
            </a>
            <a href="#" className="hover:text-green-300 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-green-700 mt-8 pt-4 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} Herbal Life. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
