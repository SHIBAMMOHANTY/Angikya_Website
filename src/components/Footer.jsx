import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 py-8 text-blue-900">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Company Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 text-blue-900">ANGIKYA Technology</h3>
          <p className="text-sm text-blue-800 font-medium leading-relaxed">
            Building the future with cutting-edge AI and Blockchain solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 text-blue-900">Company</h3>
          <ul className="space-y-2 text-sm font-medium text-blue-800">
            <li><a href="/about" className="hover:text-blue-600 transition-all duration-300">About Us</a></li>
            <li><a href="/terms" className="hover:text-blue-600 transition-all duration-300">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-blue-600 transition-all duration-300">Privacy Policy</a></li>
            <li><a href="/careers" className="hover:text-blue-600 transition-all duration-300">Careers</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold mb-3 text-blue-900">Follow Us</h3>
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

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm font-medium text-blue-800 pt-3">
        <p>&copy; {new Date().getFullYear()} ANGIKYA Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;