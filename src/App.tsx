import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

// Herbs Components
import HerbsNavbar from "./components/Herbs/Navbar";
import HerbsFooter from "./components/Herbs/Footer";

// Academy Components
import AcademyNavbar from "./components/Academy/Navbar";
import AcademyFooter from "./components/Academy/Footer";

// Herbs Pages
import HomeHerbs from "./pages/herbs/Home";
import AboutHerbs from "./pages/herbs/About";
import ServicesHerbs from "./pages/herbs/Services";
import ProductHerbs from "./pages/herbs/Product";
import PressHerbs from "./pages/herbs/Press";
import ContactHerbs from "./pages/herbs/Contact";
import LoginHerbs from "./pages/herbs/Login";

// Academy Pages
import HomeAcademy from "./pages/academy/Home";
import CoursesAcademy from "./pages/academy/Courses";
import AboutAcademy from "./pages/academy/About";
import ContactAcademy from "./pages/academy/Contact";
import Signup from "./pages/academy/Signup";
function App() {
  return (
    <Router>
      <Routes>
        {/* Landing Page (No Navbar/Footer) */}
        <Route path="/" element={<LandingPage />} />

        {/* Herbs Pages with Herbs Navbar/Footer */}
        <Route
          path="/herbs/*"
          element={
            <>
              <HerbsNavbar />
              <Routes>
                <Route path="home" element={<HomeHerbs />} />
                <Route path="about" element={<AboutHerbs />} />
                <Route path="services" element={<ServicesHerbs />} />
                <Route path="product" element={<ProductHerbs />} />
                <Route path="press" element={<PressHerbs />} />
                <Route path="contact" element={<ContactHerbs />} />
                <Route path="login" element={<LoginHerbs />} />
              </Routes>
              <HerbsFooter />
            </>
          }
        />

        {/* Academy Pages with Academy Navbar/Footer */}
        <Route
          path="/academy/*"
          element={
            <>
              <AcademyNavbar />
              <Routes>
                <Route path="home" element={<HomeAcademy />} />
                <Route path="courses" element={<CoursesAcademy />} />
                <Route path="about" element={<AboutAcademy />} />
                <Route path="contact" element={<ContactAcademy />} />
                <Route path="signup" element={<Signup />} />
              </Routes>
              <AcademyFooter />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
