import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // For hamburger icons

const AcademyNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/academy/home" className="text-2xl font-bold text-indigo-600">
              EDLI
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/academy/home" className="hover:text-indigo-600">
                Home
              </Link>
              <Link to="/academy/courses" className="hover:text-indigo-600">
                Courses
              </Link>
              <Link to="/academy/about" className="hover:text-indigo-600">
                About
              </Link>
              <Link to="/academy/contact" className="hover:text-indigo-600">
                Contact
              </Link>
              <Link to="/academy/signup" className="hover:text-indigo-600">
                Sign Up
              </Link>
            </div>

            {/* Mobile Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-2 px-4 py-4">
              <Link
                to="/academy/home"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/academy/courses"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Courses
              </Link>
              <Link
                to="/academy/about"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/academy/contact"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/academy/signup"
                className="hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/2349159754396"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.95 11.95 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.12.55 4.19 1.6 6.03L0 24l6.15-1.6A11.97 11.97 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.24-6.21-3.48-8.52zM12 22a9.94 9.94 0 0 1-5.07-1.37l-.36-.21-3.65.95.98-3.55-.24-.37A9.94 9.94 0 0 1 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm5.12-7.87c-.28-.14-1.65-.81-1.9-.9-.26-.1-.44-.14-.63.14-.18.26-.72.9-.88 1.08-.16.18-.33.2-.61.07-.28-.14-1.19-.44-2.27-1.4-.84-.75-1.41-1.67-1.57-1.95-.16-.28-.02-.43.12-.57.12-.12.28-.33.42-.5.14-.18.18-.3.28-.5.1-.2.05-.38-.02-.52-.07-.14-.63-1.5-.86-2.06-.23-.55-.46-.47-.63-.48h-.54c-.18 0-.47.07-.72.33-.25.26-.95.92-.95 2.23 0 1.3.97 2.55 1.1 2.72.14.18 1.91 2.9 4.63 4.07.65.28 1.16.45 1.56.57.65.2 1.24.17 1.71.1.52-.08 1.65-.67 1.88-1.31.23-.64.23-1.19.16-1.31-.07-.12-.26-.2-.54-.34z" />
        </svg>
      </a>
    </>
  );
};

export default AcademyNavbar;
