import { UserOutlined } from '@ant-design/icons';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Avatar } from "antd";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router";
import { useAuth } from "../context/auth.context";
import { clearCart, fetchCart, removeCartItem, updateCartItemQuantity } from "../services/cartService";
import { CartItem } from "../types/type";
import CartIcon from "./Icons/CartIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import DescreaseIcon from "./Icons/DescreaseIcon";
import IncreaseICon from "./Icons/IncreaseICon";
import MenuIcon from "./Icons/MenuIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const cartModalRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();

  const { data: cartItems = [], isLoading } = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });
  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (isCartModalOpen && cartModalRef.current && !cartModalRef.current.contains(event.target)) {
    //       setIsCartModalOpen(false);
    //     }
    //   };
    //   document.addEventListener("mousedown", handleClickOutside);
    //   return () => document.removeEventListener("mousedown", handleClickOutside);
    // }, [isCartModalOpen]);
  const updateQuantityMutation = useMutation({
    mutationFn: ({ itemId, delta }: { itemId: number; delta: number }) =>
      updateCartItemQuantity(itemId, delta),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const removeItemMutation = useMutation({
    mutationFn: (itemId: number) => removeCartItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const clearCartMutation = useMutation({
    mutationFn: clearCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartModal = () => setIsCartModalOpen(!isCartModalOpen);



  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 50;
  const discount = 100;
  const total = subtotal + shippingFee - discount;

  const handleQuantityChange = (itemId: number, delta: number) => {
    updateQuantityMutation.mutate({ itemId, delta });
  };

  const handleRemoveItem = (itemId: number) => {
    removeItemMutation.mutate(itemId);
  };



  const renderCartItems = () => (
    <div>
      <div className="max-h-60 overflow-y-auto">
        {isLoading ? (
          <p>Loading cart...</p>
        ) : cartItems.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center last:border-none border-b border-gray-200 py-2">
              <div className="flex items-center gap-3">
                <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
                <div>
                  <p className="font-medium">{item.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50 p-1"
                      disabled={item.quantity === 1}
                    >
                      <DescreaseIcon />
                    </button>
                    <span className="px-2">{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="bg-gray-200 hover:bg-gray-300 rounded p-1"
                    >
                      <IncreaseICon />
                    </button>
                  </div>
                  <p className="text-sm text-gray-500">
                    ${item.price.toLocaleString()} x {item.quantity} = ${(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              </div>
              <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
                <DeleteIcon />
              </button>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-between border-t border-gray-300 pt-3">
        <p>Cart has {totalQuantity} item(s)</p>
        <div className="bg-gray-100 hover:bg-gray-200 p-1 rounded-2xl "
          onClick={(e) => {
            e.stopPropagation();
            toggleCartModal();
          }}>
          <Link to="/cart">Go to Cart</Link>
        </div>
      </div>
    </div>
  );
  const { user, logout } = useAuth();
  console.log("user:", user);
  return (
    <>
      <div className={`w-full fixed top-0 flex justify-between items-center px-2 py-3 transition-all duration-300 z-50 ${isSticky ? "shadow-lg bg-white" : "bg-transparent"}`}>
        <Link to="/" className={`font-semibold text-3xl ${isSticky ? "text-gray-700" : "text-white"}`}>
          AutoDrive.
        </Link>
        <div className="flex gap-6 max-md:hidden font-semibold items-center">
          {["/", "/listings", "/blog"].map((path, index) => {
            const labels = ["Home", "Listing", "Blog"];
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `cursor-pointer flex items-center transition duration-300 ${isSticky
                    ? `${isActive ? "text-amber-800 font-bold" : "text-gray-700"} cursor-pointer py-1 relative  after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-slate-900 dark:after:bg-amber-700 hover:after:lg:w-full after:lg:h-0.5 after:lg:w-0 text-emerald-light:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300`
                    : `${isActive ? "font-bold text-white" : "text-white"} hover:font-bold cursor-pointer py-1 relative  after:lg:absolute after:lg:bottom-0 after:lg:left-0 after:lg:bg-slate-900 dark:after:bg-white hover:after:lg:w-full after:lg:h-0.5 after:lg:w-0 text-emerald-light:w-full after:lg:transition-all after:lg:ease-in-out after:lg:duration-300`
                  }`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}
          <div className="relative">
            <div onClick={toggleCartModal} className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700 hover:text-amber-800" : "text-white hover:text-amber-800"}`}>
              <CartIcon />
              {/* Always show the badge, even when totalQuantity is 0 */}
              <span
                className={`absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse ${totalQuantity > 0 ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
                  }`}
              >
                {totalQuantity}
              </span>
            </div>
            {isCartModalOpen && (
              <div ref={cartModalRef} className="absolute top-full right-0 mt-2 bg-white rounded-lg p-6 w-80 max-w-md shadow-lg z-50 animate-fade-in">
                <button className="absolute top-5 right-5" onClick={toggleCartModal}>
                  <DeleteIcon />
                </button>
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {renderCartItems()}
              </div>
            )}
          </div>

          {user ? (
            <div className="flex items-center gap-2">
              <Avatar size={64} icon={<UserOutlined />} />
              <button
                onClick={logout}
                className={`hover:text-amber-800 ${isSticky ? "text-gray-700" : "text-white"}`}
              >
                Logout

              </button>
            </div>
          ) : (
            <NavLink
              to="/login"
              className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700 hover:text-amber-800" : "text-white hover:text-amber-800"}`}
            >
              <Avatar size="large" icon={<UserOutlined />} />
            </NavLink>
          )}
        </div>
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <div onClick={toggleCartModal} className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700 hover:text-amber-800" : "text-white hover:text-amber-800"}`}>
              <CartIcon />
              {/* Always show the badge for mobile view as well */}
              <span
                className={`absolute -top-2 -right-2 rounded-full w-5 h-5 flex items-center justify-center text-xs animate-pulse ${totalQuantity > 0 ? "bg-red-500 text-white" : "bg-gray-300 text-gray-700"
                  }`}
              >
                {totalQuantity}
              </span>
            </div>
            {isCartModalOpen && (
              <div ref={cartModalRef} className="absolute top-full right-0 mt-2 bg-white rounded-lg p-6 w-80 max-w-md shadow-lg z-50 animate-fade-in">
                <button className="absolute top-5 right-5" onClick={toggleCartModal}>
                  <DeleteIcon />
                </button>
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {renderCartItems()}
              </div>
            )}
          </div>
          <div className="md:hidden">
            {!isOpen && (
              <button onClick={toggleMenu} className={`cursor-pointer flex ${isSticky ? "text-gray-700" : "text-white"}`}>
                <MenuIcon />
              </button>
            )}
          </div>
        </div>
        <div className={`fixed top-0 right-0 w-70 h-full bg-white p-4 px-8 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform md:hidden shadow-lg overflow-y-auto`}>
          <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <DeleteIcon />
          </button>
          <nav className="flex flex-col gap-4 mt-12">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/listings" onClick={() => setIsOpen(false)}>Listing</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>Blog</NavLink>
          </nav>
        </div>
        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" onClick={() => setIsOpen(false)}></div>}
      </div>
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setShowConfirmModal(false)}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-6 w-96 shadow-xl text-center z-50 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4">Confirm Order?</h2>
            <p className="text-gray-600 mb-4">Are you sure you want to place this order?</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmOrder} className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900">Confirm</button>
              <button onClick={() => setShowConfirmModal(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Cancel</button>
            </div>
          </div>
        </div>
      )}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50 animate-slide-in">
          Order placed successfully!
        </div>
      )}
    </>
  );
}