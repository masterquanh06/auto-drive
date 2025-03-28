import React from 'react';
import MenuIcon from './Icons/MenuIcon';
import { NavLink } from 'react-router';
import CartIcon from './Icons/CartIcon';

export default function Header() {
  return (
    <>
        <div className="container mx-auto flex justify-between items-center">
                {/* Logo bên trái */}
                <div className="text-xl font-bold text-gray-800">Boxcars</div>
                {/* Danh sách tab bên phải */}
                <ul className="flex space-x-6 text-gray-700 font-semibold items-center">
                    <a className="hover:text-blue-500 cursor-pointer flex items-center">Home</a>
                    <a className="hover:text-blue-500 cursor-pointer flex items-center">Litings</a>
                    <a className="hover:text-blue-500 cursor-pointer flex items-center">About</a>
                    <a className="hover:text-blue-500 cursor-pointer flex items-center">Contact</a>
                    <CartIcon/>
                    <a href="/login"  className="text-gray-700 hover:bg-blue-600 px-4 py-2 rounded-lg transition">
                        Sign In
                    </a>
                 
                    
                </ul>
            </div>
    </>
  );
}
