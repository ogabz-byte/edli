import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Digital Academy",
      description:
        "Learn modern digital skills and leadership training for all ages, empowering everyone to thrive in the digital era.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
      link: "/academy/home",
    },
    {
      title: "Herbal Products",
      description:
        "Discover natural herbal remedies designed to improve health, wellness, and vitality for a better life.",
      image:
        "https://images.unsplash.com/photo-1538935732373-f7a495fea3f6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJlZXN8ZW58MHx8MHx8fDA%3D",
      link: "/herbs/home",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full min-h-[65vh] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white flex flex-col items-center justify-center text-center px-6">
        {/* Logo */}
        <div className="mb-6 text-4xl font-extrabold tracking-wider">
          <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
            EDLI
          </span>
        </div>

        {/* Hero Text */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-snug">
          Everlasting Digital & Leadership Institute
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl leading-relaxed mb-6">
          Equipping people of all ages with digital skills and natural wellness
          solutions for a better, healthier, and more empowered future.
        </p>
        <button
          onClick={() => navigate("/academy/home")}
          className="bg-green-400 text-slate-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-300 transition"
        >
          Explore Academy
        </button>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto py-12 px-4">
        {sections.map((section, index) => (
          <div
            key={index}
            className="relative group rounded-xl shadow-lg overflow-hidden cursor-pointer bg-white"
            onClick={() => navigate(section.link)}
          >
            {/* Card Image */}
            <img
              src={section.image}
              alt={section.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Overlay Details */}
            <div className="p-6 group-hover:bg-slate-900/90 group-hover:text-white transition duration-500">
              <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
              <p className="text-gray-600 group-hover:text-gray-200">
                {section.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
