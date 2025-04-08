import { Link } from 'react-router';
import CartIcon from './icons/CartIcon';

export default function Header() {
  return (
    <>
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo bên trái */}
        <div className="text-xl font-bold text-gray-800">AutoDrive.</div>
        {/* Danh sách tab bên phải */}
        <ul className="flex space-x-6 text-gray-700 font-semibold items-center">
          <Link to="/" className="hover:text-blue-500 cursor-pointer flex items-center">Home</Link>
          <Link to="/listings" className="hover:text-blue-500 cursor-pointer flex items-center">Litings</Link>
          <Link to="/about" className="hover:text-blue-500 cursor-pointer flex items-center">About</Link>
          <Link to="/contact" className="hover:text-blue-500 cursor-pointer flex items-center">Contact</Link>
          <CartIcon />
          <a href="/login" className="text-gray-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
            Sign In
          </a>


        </ul>
      </div>
    </>
  );
}
