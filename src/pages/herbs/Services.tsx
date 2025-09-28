import { useState } from "react";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const services = [
    {
      title: "Herbal Consultation",
      desc: "We offer expert herbal consultations to guide you on the best herbal solutions for your health and wellness needs.",
      img: "https://images.unsplash.com/photo-1606761568499-6d2451b23cdd?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Wellness & Health Retreats",
      desc: "Join our wellness retreats designed to rejuvenate your mind and body through natural herbal therapies and treatments.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Organic Herbal Products",
      desc: "We provide 100% organic herbal products ranging from teas to supplements, all made with the highest quality ingredients.",
      img: "https://images.unsplash.com/photo-1601050690597-e9e978bfa960?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Educational Workshops",
      desc: "Attend our workshops to learn about herbal remedies, natural living, and holistic health practices.",
      img: "https://images.unsplash.com/photo-1542736667-069246bdbc74?auto=format&fit=crop&w=600&q=80",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of herbal services designed to promote health,
          wellness, and natural living. Each service is tailored to help you
          achieve a healthier lifestyle.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition transform hover:-translate-y-2 overflow-hidden"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Accordion Section */}
      <div className="max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Why Choose Our Herbal Services?
        </h3>
        <div className="space-y-4">
          {[
            {
              q: "Are your herbal products certified organic?",
              a: "Yes, all our herbal products are sourced from certified organic farms to ensure the highest quality and safety.",
            },
            {
              q: "Do you provide personalized herbal plans?",
              a: "Absolutely! Our consultations include a personalized herbal wellness plan tailored to your needs.",
            },
            {
              q: "How can I join your herbal retreats?",
              a: "You can register online or contact our customer care to book a spot for upcoming wellness retreats.",
            },
            {
              q: "Do you ship herbal products internationally?",
              a: "Yes, we ship globally so everyone can benefit from our herbal wellness solutions.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-4 cursor-pointer transition hover:shadow-md"
              onClick={() => toggleAccordion(i)}
            >
              <div className="flex justify-between items-center">
                <h4 className="font-semibold text-green-700">{item.q}</h4>
                <span className="text-gray-500">
                  {activeIndex === i ? "−" : "+"}
                </span>
              </div>
              {activeIndex === i && (
                <p className="mt-2 text-gray-600 text-sm">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
