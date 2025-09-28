const AcademyFooter = () => {
  return (
    <footer className="bg-blue-900 text-gray-300 py-6 mt-10">
      <div className="max-w-6xl mx-auto text-center space-y-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Everlasting Digital & Leadership
          Institute. All Rights Reserved.
        </p>
        <p className="text-sm">
          Empowering lives through digital skills and leadership.
        </p>
      </div>
    </footer>
  );
};

export default AcademyFooter;
