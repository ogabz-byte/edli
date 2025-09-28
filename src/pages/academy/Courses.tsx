import { useNavigate } from "react-router-dom";
const Courses = () => {
  const navigate = useNavigate();

  const courses = [
    {
      title: "Music Production",
      image:
        "https://images.unsplash.com/photo-1519076976365-9c64dbd98317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2lkcyUyMG11c2ljfGVufDB8fDB8fHww",
      description:
        "Master sound design, mixing, and music creativity using modern tools.",
      oldPrice: "₦50,000",
      newPrice: "₦35,000",
    },
    {
      title: "Content Creation",
      image:
        "https://plus.unsplash.com/premium_photo-1663040316559-8684ca45d7e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29udGVudCUyMGNyZWF0aW9ufGVufDB8fDB8fHww",
      description:
        "Learn to create engaging blogs, videos, and social media content.",
      oldPrice: "₦40,000",
      newPrice: "₦25,000",
    },
    {
      title: "Ghostwriting & Publishing",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d3JpdGluZ3xlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Turn your ideas into books and articles with our ghostwriting techniques.",
      oldPrice: "₦45,000",
      newPrice: "₦30,000",
    },
    {
      title: "Marketing & SEO",
      image:
        "https://plus.unsplash.com/premium_photo-1684356818903-4f477380b648?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bWFya2V0aW5nJTIwc2VvfGVufDB8fDB8fHww",
      description:
        "Learn to rank websites, grow audiences, and market like a pro online.",
      oldPrice: "₦60,000",
      newPrice: "₦40,000",
    },
    {
      title: "Freelancing",
      image:
        "https://images.unsplash.com/photo-1610473068872-908afb1a7317?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Build a career working remotely as a freelancer in any field.",
      oldPrice: "₦30,000",
      newPrice: "₦20,000",
    },
    {
      title: "Data Science",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGF0YSUyMHNjaWVuY2V8ZW58MHx8MHx8fDA%3D",
      description:
        "Analyze data, build models, and get insights to solve real problems.",
      oldPrice: "₦80,000",
      newPrice: "₦55,000",
    },
    {
      title: "Coding",
      image:
        "https://plus.unsplash.com/premium_photo-1681494370365-6bc631f820e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nJTIwdGVhY2hpbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Learn to code from scratch: web development, backend, and apps.",
      oldPrice: "₦50,000",
      newPrice: "₦35,000",
    },
    {
      title: "AI & Machine Learning",
      image:
        "https://plus.unsplash.com/premium_photo-1676637656166-cb7b3a43b81a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWklMjBhbmQlMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
      description:
        "Build intelligent systems and AI models for the future of tech.",
      oldPrice: "₦100,000",
      newPrice: "₦70,000",
    },
    {
      title: "Cybersecurity",
      image:
        "https://media.istockphoto.com/id/2153383852/photo/cyber-security-and-data-protection-on-internet-shield-secure-access-and-encrypted-connection.webp?a=1&b=1&s=612x612&w=0&k=20&c=SApAu2S-hmBqkx18Zpnal1s1aMv6_djGeNmp2S3OmTA=",
      description:
        "Protect systems and networks with modern cybersecurity skills.",
      oldPrice: "₦90,000",
      newPrice: "₦60,000",
    },
    {
      title: "Video Editing",
      image:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBlZGl0aW5nfGVufDB8fDB8fHww",
      description:
        "Learn to edit professional-quality videos with modern tools.",
      oldPrice: "₦55,000",
      newPrice: "₦35,000",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <div className="text-center py-12 bg-gradient-to-r from-indigo-900 to-purple-800 text-white">
        <h1 className="text-4xl font-bold">Our Courses</h1>
        <p className="mt-2 text-lg text-gray-200">
          Explore a variety of digital skills designed to build your future.
        </p>
      </div>

      {/* Courses Grid */}
      <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition group"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="p-5">
              <h2 className="text-xl font-semibold text-gray-800">
                {course.title}
              </h2>
              <p className="text-gray-600 text-sm mt-2">{course.description}</p>

              {/* Price Section */}
              <div className="flex items-center gap-3 mt-4">
                <span className="line-through text-gray-400 text-sm">
                  {course.oldPrice}
                </span>
                <span className="text-green-600 font-bold text-lg">
                  {course.newPrice}
                </span>
              </div>

              {/* Enroll Button => Redirect to Login */}
              <button
                onClick={() => navigate("/academy/signup")}
                className="mt-4 px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-500 transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
