import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const featuredCourses = [
    {
      title: "Music Production",
      image:
        "https://images.unsplash.com/photo-1519076976365-9c64dbd98317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMG11c2ljfGVufDB8fDB8fHww",
      description:
        "Master sound design, mixing, and creativity with our Music Production course.",
    },
    {
      title: "Coding",
      image:
        "https://plus.unsplash.com/premium_photo-1681494370365-6bc631f820e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwdGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Learn web and software development from scratch with real-world projects.",
    },
    {
      title: "Content Creation",
      image:
        "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww",
      description:
        "Create engaging content for blogs, social media, and digital platforms.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Hero Section with Softer Gradient */}
      <div className="relative w-full min-h-[65vh] bg-gradient-to-br from-blue-900 via-indigo-900 to-blue-900 text-white flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to EDLI Digital Academy
        </h1>
        <p className="text-gray-200 text-lg max-w-2xl mb-6">
          At EDLI, we equip individuals with digital skills to thrive in today's
          world. Whether it's music production, coding, or content creation, we
          help you build a better future.
        </p>
        <button
          onClick={() => navigate("/academy/courses")}
          className="bg-green-400 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-300 transition"
        >
          Explore All Courses
        </button>
      </div>

      {/* Featured Courses Section */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
          Featured Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredCourses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition hover:shadow-2xl"
              onClick={() => navigate("/academy/courses")}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="p-5 group-hover:bg-purple-50 transition duration-300">
                <h3 className="text-xl font-semibold text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/academy/courses")}
            className="px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-500 transition"
          >
            View More Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
