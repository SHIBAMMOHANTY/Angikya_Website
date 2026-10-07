import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/Service";
import ServicesPage from "./components/ServicesPage";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
// import OurClients from "./components/OurClients";
import CareerPage from "./components/Careers";
import Ads from "./components/Ads"
import Whatsapp from "./components/Whatsapp";
import Job from "./components/job"

const App = () => {
  return (
    <Router>
      <Whatsapp/>
      <Navbar />
      <div className="  ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                {/* <OurClients /> */}
                <Workflow />
                <FeatureSection />
                <About />
                <Testimonials />
              </>
            }
          />
          <Route path="/service" element={<ServicesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/Careers" element={<CareerPage />} />
          <Route path="/careers" element={<CareerPage />} />
          <Route path="/career" element={<CareerPage />} />
          <Route path="/job" element={<Job />} />
          <Route path="*" element={<h1 className="text-center text-3xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
