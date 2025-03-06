import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/Service";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import About from "./components/About";
// import Testimonials from "./components/Testimonials";
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
      <Ads/>
      <Navbar />
      <div className="  ">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                {/* <OurClients /> */}
                <FeatureSection />
                <Workflow />
                <About />
                {/* <Testimonials /> */}
                <Contact />
              </>
            }
          />
          <Route path="/service" element={<FeatureSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Careers" element={<CareerPage/>} />
          <Route path="/job" element={<Job />} />
          <Route path="*" element={<h1 className="text-center text-3xl">404 - Page Not Found</h1>} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
