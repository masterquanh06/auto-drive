import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import DeleteIcon from "../../Components/Icons/DeleteIcon";
import DescreaseIcon from "../../Components/Icons/DescreaseIcon";
import IncreaseICon from "../../Components/Icons/IncreaseICon";
import { clearCart, fetchCart, removeCartItem, updateCartItemQuantity } from "../../services/cartService";
import { CartItem } from "../../types/type";

export default function Cart() {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const queryClient = useQueryClient();

  const { data: cartItems = [], isLoading } = useQuery<CartItem[]>({
    queryKey: ["cart"],
    queryFn: fetchCart,
  });

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
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    },
  });

  const handleQuantityChange = (itemId: number, delta: number) => {
    updateQuantityMutation.mutate({ itemId, delta });
  };

  const handleRemoveItem = (itemId: number) => {
    removeItemMutation.mutate(itemId);
  };

  const handleCheckout = () => {
    setShowConfirmModal(true);
  };

  const confirmCheckout = () => {
    clearCartMutation.mutate();
    setShowConfirmModal(false);
  };

  const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const shippingFee = 50;
  const discount = 100;
  const total = subtotal + shippingFee - discount;

  return (
    <div className="container mx-auto py-8 px-4">
      <Link to="/">Quay Lại</Link>
      <h1 className="text-3xl font-bold my-6">Giỏ Hàng</h1>

      {isLoading ? (
        <p>Loading cart...</p>
      ) : cartItems.length === 0 ? (
        <p className="text-gray-500">Giỏ hàng của bạn đang trống.</p>
      ) : (
        <div className="grid gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center border border-gray-300 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">
                  Đơn giá: ${item.price.toLocaleString()}
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                    className="px-2 py-1 bg-gray-200 rounded disabled:opacity-50"
                    disabled={item.quantity === 1}
                  >
                    <DescreaseIcon />
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                    className="px-2 py-1 bg-gray-200 rounded"
                  >
                    <IncreaseICon />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="text-red-500 mt-2 hover:underline"
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          ))}

          <div className="border-t border-gray-300 pt-4 mt-6">
            <div className="flex justify-between items-center mb-2">
              <span>Tạm tính:</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Phí vận chuyển:</span>
              <span>${shippingFee.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span>Giảm giá:</span>
              <span>-${discount.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center font-bold text-lg">
              <span>Tổng cộng:</span>
              <span>${total.toLocaleString()}</span>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full mt-4 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
            >
              Đặt hàng
            </button>
          </div>
        </div>
      )}

      {showConfirmModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Xác nhận đặt hàng</h2>
            <p>Bạn có chắc muốn đặt hàng không?</p>
            <div className="flex gap-4 mt-4 justify-center">
              <button
                onClick={confirmCheckout}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
              >
                Có
              </button>
              <button
                onClick={() => setShowConfirmModal(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
              >
                Không
              </button>
            </div>
          </div>
        </div>
      )}

      {showSuccessMessage && (
        <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Đặt hàng thành công!
        </div>
      )}
    </div>
  );
}