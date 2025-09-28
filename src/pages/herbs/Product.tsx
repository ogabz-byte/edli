import React from "react";

const Product: React.FC = () => {
  const products = [
    {
      name: "Herbal Immune Booster",
      img: "https://images.unsplash.com/photo-1601050690597-e9e978bfa960?auto=format&fit=crop&w=600&q=80",
      ingredients: ["Ginger", "Turmeric", "Moringa", "Lemon Grass"],
      prescription: "Take one cup twice daily after meals for best results.",
    },
    {
      name: "Herbal Detox Tea",
      img: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=600&q=80",
      ingredients: ["Green Tea", "Mint Leaves", "Cinnamon", "Clove"],
      prescription:
        "Brew one teabag in hot water and drink every morning before breakfast.",
    },
  ];

  const benefits = [
    {
      title: "Boosts Immunity",
      desc: "Our herbal products are packed with natural antioxidants and vitamins that strengthen your immune system.",
    },
    {
      title: "Detoxifies the Body",
      desc: "Helps cleanse the body of toxins, improving digestion and overall health.",
    },
    {
      title: "100% Organic",
      desc: "Made from carefully sourced, chemical-free, and fully organic ingredients.",
    },
    {
      title: "Supports Natural Healing",
      desc: "Promotes overall well-being and supports your body’s natural healing processes.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "The Herbal Immune Booster changed my life! I feel more energetic and healthier than ever before.",
    },
    {
      name: "Michael Smith",
      feedback:
        "I love the Detox Tea. It tastes great and has really helped my digestion.",
    },
  ];

  return (
    <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
      {/* Title */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Our Herbal Products
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our natural herbal solutions designed to improve health and
          wellbeing. Click on each product to learn more about ingredients and
          prescriptions.
        </p>
      </div>

      {/* Product Cards with Flip Effect */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto mb-16">
        {products.map((product, index) => (
          <div
            key={index}
            className="group [perspective:1000px] w-full h-96 cursor-pointer"
          >
            <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              {/* Front Side */}
              <div className="absolute w-full h-full bg-green-50 rounded-xl shadow-md p-6 [backface-visibility:hidden]">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-green-700 text-center">
                  {product.name}
                </h3>
              </div>
              {/* Back Side */}
              <div className="absolute w-full h-full bg-white rounded-xl shadow-md p-6 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Ingredients:
                </h3>
                <ul className="list-disc pl-5 text-gray-600 text-sm mb-4">
                  {product.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                  ))}
                </ul>
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Prescription:
                </h3>
                <p className="text-gray-600 text-sm">{product.prescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="text-2xl font-bold text-green-700 mb-6">
          Benefits of Our Herbal Products
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-green-50 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="text-lg font-semibold text-green-700 mb-2">
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-green-700 mb-6">
          What Our Customers Say
        </h3>
        <div className="space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-gray-700 mb-2 italic">"{t.feedback}"</p>
              <h4 className="font-semibold text-green-700">- {t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
