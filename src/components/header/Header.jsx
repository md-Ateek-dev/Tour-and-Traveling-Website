import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import headerLogo from '../../assets/logo/header-logo2.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Destination", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Offers", path: "/offers" },
    { name: "Gallery", path: "/gallery" },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center space-x-2">
          <img src={headerLogo} alt="Logo" className="h-16" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 text-lg">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="hover:text-blue-400 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md py-6 flex flex-col space-y-4 text-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-xl hover:text-blue-400 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
