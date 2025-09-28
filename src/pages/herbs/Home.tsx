const Home = () => {
  return (
    <main>
      {/* Banner Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1462143338528-eca9936a4d09?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>

        <div className="relative text-center text-white p-4 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Embrace the Power of Nature
          </h1>
          <p className="text-lg md:text-xl mb-6 text-gray-200">
            Discover herbal remedies, natural products, and wellness secrets for
            a healthier lifestyle. Nature has all the answers.
          </p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300">
            Explore Now
          </button>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="bg-gray-50 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              Message from Our CEO
            </h2>
            <p className="text-gray-700 mb-4">
              At Herbal Life, we believe in the healing power of nature. Our
              goal is to bring you closer to natural wellness through our
              carefully crafted herbal products.
            </p>
            <p className="text-gray-700 mb-4">
              With years of experience and passion for natural health, we are
              dedicated to improving your lifestyle using the best that nature
              offers.
            </p>
            <p className="text-gray-700">
              Thank you for trusting us on your journey to a healthier, happier
              life.
            </p>
            <p className="mt-6 font-semibold text-green-800">
              - Jane Smith, CEO
            </p>
          </div>

          {/* CEO Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=500&q=80"
              alt="CEO"
              className="rounded-xl shadow-lg w-72 h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Our Core Values
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At Herbal Life, our values guide everything we do — from the
            products we create to the way we interact with our customers. Here’s
            what we stand for:
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Value 1 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=200&q=80"
              alt="Natural Wellness"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Natural Wellness
            </h3>
            <p className="text-gray-600 text-sm">
              We believe in holistic health powered by nature’s gifts.
            </p>
          </div>

          {/* Value 2 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=200&q=80"
              alt="Quality First"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Quality First
            </h3>
            <p className="text-gray-600 text-sm">
              Only the best herbs, ethically sourced and carefully processed.
            </p>
          </div>

          {/* Value 3 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1505575967455-40e256f73376?auto=format&fit=crop&w=200&q=80"
              alt="Sustainability"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Sustainability
            </h3>
            <p className="text-gray-600 text-sm">
              We care for the planet while bringing you nature’s best remedies.
            </p>
          </div>

          {/* Value 4 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1506784242123-1f0d2bda5c13?auto=format&fit=crop&w=200&q=80"
              alt="Innovation"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Innovation
            </h3>
            <p className="text-gray-600 text-sm">
              Combining ancient wisdom with modern science for better health.
            </p>
          </div>

          {/* Value 5 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1526406915894-6c4b4761f376?auto=format&fit=crop&w=200&q=80"
              alt="Community"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Community
            </h3>
            <p className="text-gray-600 text-sm">
              Building relationships and sharing knowledge with our customers.
            </p>
          </div>

          {/* Value 6 */}
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <img
              src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=200&q=80"
              alt="Integrity"
              className="w-16 h-16 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-green-700 mb-2">
              Integrity
            </h3>
            <p className="text-gray-600 text-sm">
              Honest practices and transparency in everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Become a Distributor Section */}
      <section className="py-16 bg-green-50 px-4 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            Become a Distributor
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Join our growing network of herbal distributors and be part of a
            healthy movement. The process is simple and rewarding.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-2xl mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Sign Up
            </h3>
            <p className="text-gray-600 text-sm">
              Register online to get started with your distributor journey.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-2xl mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Get Trained
            </h3>
            <p className="text-gray-600 text-sm">
              Learn about our products and how to share them with others.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-2xl mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Place Orders
            </h3>
            <p className="text-gray-600 text-sm">
              Start ordering products at discounted rates for resale.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-green-100 text-green-700 font-bold text-2xl mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold text-green-700 mb-2">
              Grow Your Business
            </h3>
            <p className="text-gray-600 text-sm">
              Build your customer base and earn with every sale you make.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-10">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Products / Opportunities Section */}
      <section className="py-16 bg-white px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Our Opportunities
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our current focus and exciting opportunities coming your way
            soon.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Card 1 - Wellness & Health */}
          <div className="bg-green-50 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <img
              src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80"
              alt="Wellness and Health"
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                Wellness & Health
              </h3>
              <p className="text-gray-600 text-sm">
                Our core focus: Herbal products promoting health, wellness, and
                natural living.
              </p>
            </div>
          </div>

          {/* Card 2 - Real Estate (Coming Soon) */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
              <span className="text-gray-500 text-2xl font-semibold">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Real Estate
              </h3>
              <p className="text-gray-600 text-sm">
                Exciting opportunities in real estate launching soon.
              </p>
            </div>
          </div>

          {/* Card 3 - Education (Coming Soon) */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
              <span className="text-gray-500 text-2xl font-semibold">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Education
              </h3>
              <p className="text-gray-600 text-sm">
                Educational platforms and resources coming in the near future.
              </p>
            </div>
          </div>

          {/* Card 4 - Technology (Coming Soon) */}
          <div className="bg-gray-100 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2">
            <div className="h-48 flex items-center justify-center bg-gray-200 rounded-t-xl">
              <span className="text-gray-500 text-2xl font-semibold">
                Coming Soon
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                Technology
              </h3>
              <p className="text-gray-600 text-sm">
                Technology initiatives and innovations on the horizon.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
