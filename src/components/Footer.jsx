import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";
import logo from "../assets/profile-pictures/angikya.png";

const Footer = () => {
  return (
    <footer className="mt-10 py-8 text-blue-900 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#0F3460] px-3 md:px-6 lg:px-12 xl:px-20">
      <div className=" mx-auto px-6 gap-2 md:gap-8 flex flex-col md:flex-row justify-between ">
        {/* Left Column: Logo, Company Name, and Address */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-2">
          <h3 className="text-2xl font-bold text-white">ANGIKYA Technology</h3>
          <img
            className="w-20 h-20 md:w-26 md:h-26 object-contain"
            src={logo}
            alt="ANGIKYA Technology"
          />
          <p className="text-white text-sm md:text-base">
            5th Floor, Flat No-507, <br />
            Promod Heights, <br />
            Bhubaneswar, Odisha
            <br /> 
          </p>
        </div>



        {/* Right Column: Empty (Optional) */}
        {/* <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">ANGIKYA Technology</h3>
        <p className="text-sm text-blue-800 font-medium leading-relaxed">
            Building the future with cutting-edge AI .
          </p>
          <p className="text-sm text-blue-800 font-medium mt-4">
            123 Tech Street, Bhubaneswar, Odisha, India
          </p>
        </div> */}

        {/* Middle Column 1: Quick Links */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">
          <div className="text-center  md:text-left">
            <h3 className="text-xl font-bold mb-2 tracking-wide text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm font-medium text-white">
              <li>
                <a
                  href="/about"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="/privacy-policy"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-blue-600 transition-all duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Middle Column 2: Social Media Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://linkedin.com/company/ANGIKYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://twitter.com/ANGIKYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com/ANGIKYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://facebook.com/ANGIKYA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-white hover:text-blue-600 transition-transform transform hover:scale-110"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Reserved Rights Section */}
      <div className="mt-8 text-center md:text-center text-sm font-medium text-white pt-6 border-t border-blue-200">
        <p className="max-w-6xl mx-auto px-6">
          &copy; {new Date().getFullYear()} ANGIKYA Technology. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
