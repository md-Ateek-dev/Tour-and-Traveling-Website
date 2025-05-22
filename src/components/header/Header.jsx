import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import headerLogo from "../../assets/logo/header-logo2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Optional: Close menu on scroll for better UX
  useEffect(() => {
    const handleScroll = () => setIsOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
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

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md text-center flex flex-col space-y-4 py-6 transition-all duration-300 ease-in-out z-40 ${
          isOpen ? "block" : "hidden"
        }`}
      >
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
      </div>
    </header>
  );
};

export default Header;
