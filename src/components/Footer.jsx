import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 py-8 text-blue-900 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column: Logo, Company Name, and Address */}
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">ANGIKYA Technology</h3>
          
        </div>
        {/* Right Column: Empty (Optional) */}
        <div className="text-center md:text-left">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">ANGIKYA Technology</h3>
        <p className="text-sm text-blue-800 font-medium leading-relaxed">
            Building the future with cutting-edge AI .
          </p>
          <p className="text-sm text-blue-800 font-medium mt-4">
            123 Tech Street, Bhubaneswar, Odisha, India
          </p>
        </div>

        {/* Middle Column 1: Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Quick Links</h3>
          <ul className="space-y-2 text-sm font-medium text-blue-800">
            <li><a href="/about" className="hover:text-blue-600 transition-all duration-300">About Us</a></li>
            <li><a href="/terms" className="hover:text-blue-600 transition-all duration-300">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-600 transition-all duration-300">Privacy Policy</a></li>
            <li><a href="/careers" className="hover:text-blue-600 transition-all duration-300">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition-all duration-300">Contact</a></li>
          </ul>
        </div>

      
        {/* Middle Column 2: Social Media Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-4 text-blue-900">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://linkedin.com/company/ANGIKYA" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-900 hover:text-blue-600 transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/ANGIKYA" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-900 hover:text-blue-600 transition-transform transform hover:scale-110">
              <FaTwitter />
            </a>
            <a href="https://github.com/ANGIKYA" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-900 hover:text-blue-600 transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://facebook.com/ANGIKYA" target="_blank" rel="noopener noreferrer" className="text-2xl text-blue-900 hover:text-blue-600 transition-transform transform hover:scale-110">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Reserved Rights Section */}
      <div className="mt-8 text-center md:text-center text-sm font-medium text-blue-800 pt-6 border-t border-blue-200">
        <p className="max-w-6xl mx-auto px-6">
          &copy; {new Date().getFullYear()} ANGIKYA Technology. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;