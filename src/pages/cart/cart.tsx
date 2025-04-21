import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router';
import ArrowRight from '../../Components/Icons/ArrowRight';
import TrashIcon from '../../Components/Icons/TrashIcon';

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
}

const cartItems: CartItem[] = [
  {
    name: "Italy Pizza",
    img: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg",
    description: "Extra cheese and topping",
    price: 688,
    quantity: 1,
  },
  {
    name: "Combo Plate",
    img: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg",
    description: "Extra cheese and topping",
    price: 688,
    quantity: 1,
  },
  {
    name: "Spanish Rice",
    img: "https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg",
    description: "Extra garlic",
    price: 688,
    quantity: 1,
  },
];

const cardTypes = ["Mastercard", "Visa", "RuPay", "See all"];

export default function Cart() {
  const [activeCard, setActiveCard] = useState(null);
  const [items, setItems] = useState(cartItems);
  const subtotal: number = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping: number = 4;
  const total: number = subtotal + shipping;

  const handleQuantityChange = (index: number, delta: number) => {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index
          ? {
            ...item,
            quantity: Math.max(1, item.quantity + delta),
          }
          : item
      )
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      {/* Shopping Cart Section */}
      <div className="flex max-lg:flex-col gap-4 w-4/5 max-lg:w-full  h-full  bg-gray-100 rounded-2xl p-4 ">
        <div className="w-full flex items-start flex-col p-6">
          <div className="flex items-center mb-4 text-blue-500  text-lg font-semibold cursor-pointer py-2">
            <Link className="flex items-center hover:opacity-70" to={"/home"}>
              Turn back
            </Link>
          </div>
          <h2 className="text-xl font-bold mb-2">Shopping cart</h2>
          <p className="text-gray-500 mb-4">
            You have {items.length} items in your cart
          </p>{" "}
          {items.map((item, index) => (
            <div key={index}>
              <div
                className="flex  items-center w-full mb-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-2xl p-4"
              >
                <div className="flex justify-center w-16 h-16 bg-gray-200 mr-4">
                  <img className="rounded-xl" src={item.img} alt={item.name} />
                </div>
                <div className="flex max-xl:flex-col justify-between w-full">
                  <div className="">
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-gray-500">{item.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      size="small"
                      icon={<UpOutlined />}
                      onClick={() => handleQuantityChange(index, 1)}
                      className="flex items-center justify-center"
                    />
                    <Button size="small" disabled>
                      {item.quantity}
                    </Button>
                    <Button
                      size="small"
                      icon={<DownOutlined />}
                      onClick={() => handleQuantityChange(index, -1)}
                      disabled={item.quantity <= 1}
                      className="flex items-center justify-center"
                    />
                    <span className="mx-2 font-semibold">${item.price}</span>
                    <TrashIcon />
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">{item.description}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Button
                  size="small"
                  icon={<UpOutlined />}
                  onClick={() => handleQuantityChange(index, 1)}
                  className="flex items-center justify-center"
                />
                <Button size="small" disabled>
                  {item.quantity}
                </Button>
                <Button
                  size="small"
                  icon={<DownOutlined />}
                  onClick={() => handleQuantityChange(index, -1)}
                  disabled={item.quantity <= 1}
                  className="flex items-center justify-center"
                />
                <span className="mx-2 font-semibold">${item.price}</span>
                <TrashIcon />
              </div>
            </div>
          ))}
        </div>

        {/* Card Details Section */}
        <div className="w-full max-w-sm bg-[#A0CDD0] text-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-bold mb-4">Card Details</h2>

          <div className="mb-4">
            <label className="block text-sm mb-2">Card type</label>
            <div className="flex space-x-2">
              {cardTypes.map((type) => (
                <Button
                  key={type}
                  onClick={() => setActiveCard(type)}
                  className={`bg-white text-black border ${activeCard === type ? "border-gray-400 bg-red-100" : "border-transparent"
                    } hover:border-gray-300`}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Card Details Section */}
          <div className="w-full h-80  flex gap-5 flex-col  justify-start mx-auto  max-w-sm bg-[#A0CDD0] text-white rounded-lg shadow-lg p-6  lg:mt-8">
            <label className="text-5xl mb-2">Cart</label>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${subtotal}</span>
            </div>
            <div className="flex justify-between mb-4">
              <span>Shipping</span>
              <span>${shipping}</span>
            </div>
            <div className="flex justify-between font-bold mb-4">
              <span>TOTAL</span>
              <span>${total}</span>
            </div>

            <Button className="w-full bg-teal-400 text-black font-semibold py-2 rounded-lg flex items-center justify-between">
              <span>Order payment</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
