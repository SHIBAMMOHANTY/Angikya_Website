import { resourcesLinks, platformLinks, communityLinks } from "../constants";
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700 text-neutral-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Resources Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white transition">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white transition">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href} className="hover:text-white transition">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* About, Policies, Careers, Contact Section */}
        <div>
          <h3 className="text-md font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/terms" className="hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
            <li><a href="/Careers" className="hover:text-white transition">Careers</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-8 text-center">
        <h3 className="text-md font-semibold mb-4">Follow Us On</h3>
        <div className="flex justify-center space-x-6">
          <a href="https://linkedin.com/company/ANGIKYA" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://twitter.com/ANGIKYA" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://github.com/ANGIKYA" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl hover:text-white transition" />
          </a>
          <a href="https://facebook.com/ANGIKYA" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl hover:text-white transition" />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} ANGIKYA Technology. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
