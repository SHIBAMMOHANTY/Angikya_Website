import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/profile-pictures/angikya.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-gradient-to-r from-gray-900 via-gray-800 to-black border-b border-neutral-700/80">
      <div className="container px-4 xl:px-16 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="md:text-xl text-[.5rem] tracking-tight font-bold text-white">ANGIKYA SOFTWARE & TECHNOLOGIES LIMITED </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-blue-400 transition-colors duration-300">{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar} className="transition-transform duration-300 ease-in-out transform hover:scale-110 text-white">
              {mobileDrawerOpen ? <X className="transition-all duration-300 ease-in-out" /> : <Menu className="transition-all duration-300 ease-in-out" />}
            </button>
          </div>
        </div>
        <div
          className={`fixed top-0 left-0 w-full h-full z-40 bg-gray-900 flex flex-col justify-center items-center lg:hidden transition-transform duration-500 ease-in-out ${mobileDrawerOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}
        >
          <button onClick={toggleNavbar} className="absolute top-6 right-6 text-white text-3xl">
            <X />
          </button>
          <ul className="text-white text-2xl space-y-6">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="text-white font-bold hover:text-blue-400 transition-colors duration-300">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
