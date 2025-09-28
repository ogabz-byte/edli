import React from "react";

const AboutAcademy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative w-full h-64 bg-gradient-to-r from-indigo-600 to-purple-700 flex items-center justify-center">
        <h1 className="text-4xl text-white font-bold">About EDLI</h1>
      </div>

      <div className="max-w-5xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Who We Are</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Everlasting Digital & Leadership Institute (EDLI) is a hub for
          knowledge, skills, and transformation. Our mission is to empower
          people of all ages—youths, professionals, and even elders—with modern
          digital skills for a brighter future.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          To make life better for everyone by providing high-quality training in
          digital skills such as Coding, AI, Cybersecurity, Digital Marketing,
          Content Creation, and more. We believe in education that opens doors
          to opportunities and financial freedom.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          A world where individuals, regardless of age, can learn, grow, and
          lead in the digital era. We aim to bridge the gap between traditional
          learning and modern technology-driven opportunities.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Why Choose EDLI?
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2 mb-6">
          <li>Experienced trainers with real-world expertise</li>
          <li>Flexible learning options – online & physical classes</li>
          <li>Industry-relevant curriculum</li>
          <li>Mentorship and career support after training</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutAcademy;
