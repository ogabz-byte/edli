const Press = () => {
  return (
    <section className="py-16 bg-gray-50 px-4 md:px-8 lg:px-16">
      {/* Title Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
          Latest News & Updates
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Stay updated with the latest happenings, events, and announcements
          from Herbal Life.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c91d013f162?auto=format&fit=crop&w=600&q=80"
            alt="Herbal Conference"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Herbal Wellness Conference 2025
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We recently hosted a global conference on herbal wellness and
              natural healing practices.
            </p>
            <a href="#" className="text-green-700 hover:underline text-sm">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
          <img
            src="https://images.unsplash.com/photo-1607083206069-6b34f09cf6e0?auto=format&fit=crop&w=600&q=80"
            alt="New Product Launch"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              New Herbal Tea Collection
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              Introducing our new line of herbal teas designed to boost energy
              and immunity.
            </p>
            <a href="#" className="text-green-700 hover:underline text-sm">
              Read More →
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
          <img
            src="https://images.unsplash.com/photo-1556912998-6e05c00e0c94?auto=format&fit=crop&w=600&q=80"
            alt="Community Outreach"
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Community Herbal Outreach
            </h3>
            <p className="text-gray-600 text-sm mb-4">
              We partnered with local communities to provide free herbal health
              awareness programs.
            </p>
            <a href="#" className="text-green-700 hover:underline text-sm">
              Read More →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Press;
