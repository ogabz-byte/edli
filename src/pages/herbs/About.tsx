import { useState } from "react";

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Herbal Life
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-green-100">
          Discover our story, mission, and vision as we bring nature's wellness
          closer to you every day.
        </p>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Herbal Life was founded with a vision to bring nature's healing
              power to people worldwide. Our journey began with a passion for
              holistic health, sustainable living, and the belief that nature
              provides everything we need for wellness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Over the years, we have grown into a trusted brand, offering a
              wide range of herbal products and initiatives designed to promote
              healthier lifestyles, empower communities, and protect our planet.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80"
              alt="Herbal Life Story"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision & Goals Accordion */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-green-50">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-green-700">
            Our Mission & Vision
          </h2>
          <p className="text-gray-600 mt-2">
            Learn more about what drives us and where we're headed.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {/* Mission */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleAccordion(0)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-green-700">Our Mission</span>
              <span className="text-green-700">
                {openIndex === 0 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 0 && (
              <div className="p-4 border-t text-gray-600">
                To promote wellness through natural herbal products, foster
                education on holistic health, and create a sustainable future
                for communities worldwide.
              </div>
            )}
          </div>

          {/* Vision */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-green-700">Our Vision</span>
              <span className="text-green-700">
                {openIndex === 1 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 1 && (
              <div className="p-4 border-t text-gray-600">
                To become a leading global herbal wellness brand known for
                quality, innovation, and positive impact on people’s health and
                the planet.
              </div>
            )}
          </div>

          {/* Goals */}
          <div className="bg-white rounded-lg shadow-md">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold text-green-700">Our Goals</span>
              <span className="text-green-700">
                {openIndex === 2 ? "−" : "+"}
              </span>
            </button>
            {openIndex === 2 && (
              <div className="p-4 border-t text-gray-600">
                - Expand our herbal product line globally <br />
                - Invest in research and innovation <br />- Build a strong
                network of distributors and wellness advocates
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-green-700">Meet Our Team</h2>
          <p className="text-gray-600 mt-2">
            A passionate group of professionals committed to herbal wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Team Member 1 */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="CEO"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-700">
              John Herbalist
            </h3>
            <p className="text-gray-600 text-sm mb-2">Founder & CEO</p>
            <p className="text-gray-500 text-sm">
              Visionary leader with 15+ years of herbal health expertise.
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="COO"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-700">
              Sarah Green
            </h3>
            <p className="text-gray-600 text-sm mb-2">Operations Head</p>
            <p className="text-gray-500 text-sm">
              Ensures smooth supply chain and product quality across markets.
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <img
              src="https://randomuser.me/api/portraits/men/65.jpg"
              alt="Research Head"
              className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold text-green-700">
              Dr. Herbal Mind
            </h3>
            <p className="text-gray-600 text-sm mb-2">Research & Innovation</p>
            <p className="text-gray-500 text-sm">
              Leads herbal research and product innovation initiatives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
