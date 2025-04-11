import { useState } from "react";
import { Link, NavLink } from "react-router";
import CartIcon from "./icons/CartIcon";
import DeleteIcon from "./icons/DeleteIcon";
import MenuIcon from "./icons/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className=" w-full bg-gradient-to-br from-gray-200 to-sky-100 fixed bg-transparent mx-auto flex justify-between items-center px-2 py-1.5">
      <div className="text-xl font-bold text-gray-800">AutoDrive</div>

      <div className="flex gap-6 max-md:hidden  font-semibold items-center">
        <Link
          to="/"
          className="hover:text-indigo-300 text-emerald-400 cursor-pointer flex items-center"
        >
          Home
        </Link>
        <Link
          to="/listings"
          className="hover:text-indigo-300 text-emerald-400 cursor-pointer flex items-center"
        >
          Listing
        </Link>
        <Link
          to="/about"
          className="hover:text-indigo-300 text-emerald-400 cursor-pointer flex items-center"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="hover:text-indigo-300 text-emerald-400 cursor-pointer flex items-center"
        >
          Contact
        </Link>
        <CartIcon />
        <a
          href="/login"
          className="text-gray-700 hover:text-indigo-300 px-4 rounded-lg transition"
        >
          Sign In
        </a>
      </div>
      <div className="md:hidden flex items-center gap-4">
        <CartIcon />
        <div className="md:hidden  rounded-2xl">
          {!isOpen && (
            <button onClick={toggleMenu} className="flex cursor-pointer">
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

        <nav className="flex flex-col justify-between h-[90%] mt-10 py-1">
          <div className="flex flex-col gap-4">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/listings" onClick={() => setIsOpen(false)}>
              Listing
            </NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
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
