
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import CartIcon from "./Icons/CartIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import MenuIcon from "./Icons/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Lắng nghe sự kiện scroll
    window.addEventListener("scroll", handleScroll);


    // Dọn dẹp sự kiện khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`w-full bg-gradient-to-br bg-transparent fixed mx-auto flex justify-between items-center px-2 py-3 transition-all duration-300 ${isSticky ? "shadow-lg bg-white" : "bg-transparent"
      }`}>
      <Link to="/" className={`cursor-pointer font-semibold text-3xl ${isSticky ? "text-gray-700" : "text-white"} `}>AutoDrive.</Link>

      <div className="flex gap-6 max-md:hidden  font-semibold items-center">
        <NavLink
          to="/"
          className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700  hover:text-amber-800  transition duration-300" : "text-white hover:text-amber-800  transition duration-300"} `}
        >
          Home
        </NavLink>
        <NavLink
          to="/listings"
          className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700  hover:text-amber-800  transition duration-300" : "text-white  hover:text-amber-800  transition duration-300"} `}
        >
          Listing
        </NavLink>
        <NavLink
          to="/about"
          className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700  hover:text-amber-800  transition duration-300" : "text-white hover:text-amber-800  transition duration-300"} `}
        >
          Blog
        </NavLink>

        <NavLink
          to="/login"
          className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700" : "text-white"} `}
        >
          Sign In
        </NavLink>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <div className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700" : "text-white"} `}><CartIcon /></div>
        <div className="md:hidden  rounded-2xl">
          {!isOpen && (
            <button onClick={toggleMenu} className={`cursor-pointer flex  ${isSticky ? "text-gray-700" : "text-white"} `}>
              <MenuIcon />
            </button>
          )}
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 w-70 h-full bg-white  p-4 px-8 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform md:hidden shadow-lg overflow-y-auto`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer hover:bg-emerald-light-hover rounded-2xl"
          onClick={() => setIsOpen(false)}
        >
          <DeleteIcon />
        </button>

        <nav className="flex flex-col justify-between h-[90%]  py-1">
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/listings" onClick={() => setIsOpen(false)}>
              Listing
            </NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
}
