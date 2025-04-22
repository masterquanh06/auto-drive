import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router";
import CartIcon from "./Icons/CartIcon";
import DeleteIcon from "./Icons/DeleteIcon";
import MenuIcon from "./Icons/MenuIcon";
import IncreaseICon from "./Icons/IncreaseICon";
import DescreaseIcon from "./Icons/DescreaseIcon";

const initialCartItems = [
  { id: 1, name: "VinFast VF7 (Gray)", price: 35000, quantity: 1, image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/483329Unu/anh-mo-ta.png" },
  { id: 2, name: "VinFast VF9 (Silver)", price: 45000, quantity: 2, image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/483329Unu/anh-mo-ta.png" },
  { id: 3, name: "VinFast VF8 (Red)", price: 40000, quantity: 1, image: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/483329Unu/anh-mo-ta.png" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [isSticky, setIsSticky] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const cartModalRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleCartModal = () => setIsCartModalOpen(!isCartModalOpen);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY >= window.innerHeight);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCartModalOpen && cartModalRef.current && !cartModalRef.current.contains(event.target)) {
        setIsCartModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCartModalOpen]);

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 50;
  const discount = 100;
  const total = subtotal + shippingFee - discount;

  const handleQuantityChange = (itemId, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  };

  const handleOrderClick = () => setShowConfirmModal(true);

  const confirmOrder = () => {
    setCartItems([]);
    setShowConfirmModal(false);
    setIsCartModalOpen(false);
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000);
  };

  const renderCartItems = () => (
    <div>
      <div className="max-h-60 overflow-y-auto">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center last:border-none border-b border-gray-200 py-2">
            <div className="flex items-center gap-3">
              <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded" />
              <div>
                <p className="font-medium">{item.name}</p>
                <div className="flex items-center gap-1 mt-1">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="bg-gray-200 hover:bg-gray-300 rounded disabled:opacity-50"
                    disabled={item.quantity === 1}
                  >
                    <DescreaseIcon />
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="bg-gray-200 hover:bg-gray-300 rounded"
                  >
                    <IncreaseICon />
                  </button>
                </div>
                <p className="text-sm text-gray-500">${item.price.toLocaleString()} x {item.quantity} = ${(item.price * item.quantity).toLocaleString()}</p>
              </div>
            </div>
            <button onClick={() => handleRemoveItem(item.id)} className="text-red-500 hover:text-red-700">
              <DeleteIcon />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-4">
        <div className="flex justify-between">
          <p>Tổng tiền hàng:</p>
          <p>${subtotal.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p>Tiền ship:</p>
          <p>${shippingFee.toLocaleString()}</p>
        </div>
        <div className="flex justify-between">
          <p>Discount:</p>
          <p>${discount.toLocaleString()}</p>
        </div>
        <div className="flex justify-between font-semibold mt-2">
          <p>Tổng cộng:</p>
          <p>${total.toLocaleString()}</p>
        </div>
      </div>

      <button onClick={handleOrderClick} className="w-full mt-4 bg-amber-800 text-white py-2 rounded hover:bg-amber-900">
        Order products
      </button>
    </div>
  );

  return (
    <>
      <div className={`w-full fixed flex justify-between items-center px-2 py-3 transition-all duration-300 ${isSticky ? "shadow-lg bg-white" : "bg-transparent"}`}>
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
                  `transition duration-300 ${isSticky ? (isActive ? "text-amber-800 font-bold" : "text-gray-700") : (isActive ? "font-bold text-white" : "text-white")}`
                }
              >
                {labels[index]}
              </NavLink>
            );
          })}

          <div className="relative">
            <div onClick={toggleCartModal} className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700 hover:text-amber-800" : "text-white hover:text-amber-800"}`}>
              <CartIcon />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {totalQuantity}
              </span>
            </div>
            {isCartModalOpen && (
              <div ref={cartModalRef} className="absolute top-full right-0 mt-2 bg-white rounded-lg p-6 w-80 max-w-md shadow-lg z-50">
                <button className="absolute top-5 right-5" onClick={toggleCartModal}>
                  <DeleteIcon />
                </button>
                <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
                {cartItems.length === 0 ? <p className="text-gray-500">Giỏ hàng trống</p> : renderCartItems()}
              </div>
            )}
          </div>

          <NavLink to="/login" className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700 hover:text-amber-800" : "text-white hover:text-amber-800"}`}>
            Sign In
          </NavLink>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative">
            <div onClick={toggleCartModal} className={`cursor-pointer flex items-center ${isSticky ? "text-gray-700" : "text-white"}`}>
              <CartIcon />
              {totalQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalQuantity}
                </span>
              )}
            </div>
          </div>
          <div className="md:hidden rounded-2xl">
            {!isOpen && (
              <button onClick={toggleMenu} className={`cursor-pointer flex ${isSticky ? "text-gray-700" : "text-white"}`}>
                <MenuIcon />
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 w-70 h-full bg-white p-4 px-8 z-50 transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform md:hidden shadow-lg overflow-y-auto`}>
          <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
            <DeleteIcon />
          </button>
          <nav className="flex flex-col gap-4 mt-12">
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/listings" onClick={() => setIsOpen(false)}>Listing</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Contact</NavLink>
          </nav>
        </div>

        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10 md:hidden" onClick={() => setIsOpen(false)}></div>}
      </div>

      {/* Modal Xác nhận */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setShowConfirmModal(false)}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white rounded-lg p-6 w-96 shadow-xl text-center z-50" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-xl font-semibold mb-4">Xác nhận đặt hàng?</h2>
            <p className="text-gray-600 mb-4">Bạn có chắc chắn muốn đặt hàng không?</p>
            <div className="flex justify-center gap-4">
              <button onClick={confirmOrder} className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900">Xác nhận</button>
              <button onClick={() => setShowConfirmModal(false)} className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">Hủy</button>
            </div>
          </div>
        </div>
      )}

      {/* Thông báo thành công */}
      {showSuccessMessage && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg z-50">
          Đặt hàng thành công!
        </div>
      )}
    </>
  );
}
