import {  Button, Input, Row, Col } from 'antd';
import { Link } from 'react-router';
import { useState } from 'react';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import TrashIcon from '../../Components/Icons/TrashIcon';
import ArrowRight from '../../Components/Icons/ArrowRight';

interface CartItem {
  name: string;
  description: string;
  price: number;
  quantity: number;
  img: string;
}

const cartItems: CartItem[] = [
  { name: 'Italy Pizza', img: 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg', description: 'Extra cheese and topping', price: 688, quantity: 1 },
  { name: 'Combo Plate', img: 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg', description: 'Extra cheese and topping', price: 688, quantity: 1 },
  { name: 'Spanish Rice', img: 'https://cdn-media.sforum.vn/storage/app/media/anh-dep-8.jpg', description: 'Extra garlic', price: 688, quantity: 1 },
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
    <div className="flex justify-center gap-4 w-250 items-start h-auto mx-auto bg-gray-100 rounded-2xl p-4">
      {/* Shopping Cart Section */}
      <div className="w-full p-6">
        <div className="flex items-center mb-4 text-blue-500  text-lg font-semibold cursor-pointer py-2">
          <Link className='flex items-center hover:opacity-70' to={"/home"}>
          <div className='rotate-180'><ArrowRight /></div>
            Shopping Continue
          </Link>
        </div>
        <h2 className="text-xl font-bold mb-2">Shopping cart</h2>
        <p className="text-gray-500 mb-4">You have {items.length} items in your cart</p> {/* Sử dụng items.length */}

        {items.map((item, index) => ( // Sử dụng items thay vì cartItems
          <div key={index} className="flex items-center mb-4 shadow-[0_0_5px_rgba(0,0,0,0.2)] rounded-2xl p-4">
            <div className="flex justify-center w-16 h-16 bg-gray-200 mr-4">
              <img className="rounded-xl" src={item.img} alt={item.name} />
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
             <TrashIcon/>
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
          className={`bg-white text-black border ${
            activeCard === type ? "border-gray-400 bg-red-100" : "border-transparent"
          } hover:border-gray-300`}
        >
          {type}
        </Button>
      ))}
    </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Name on card</label>
          <Input placeholder="Name" className="rounded-lg" />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-2">Card Number</label>
          <Input placeholder="1111 2222 3333 4444" className="rounded-lg" />
        </div>

        <Row gutter={16} className="mb-4">
          <Col span={12}>
            <label className="block text-sm mb-2">Expiration date</label>
            <Input placeholder="mm/yy" className="rounded-lg" />
          </Col>
          <Col span={12}>
            <label className="block text-sm mb-2">CVV</label>
            <Input placeholder="123" className="rounded-lg" />
          </Col>
        </Row>

        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        <div className="flex justify-between font-bold mb-4">
          <span>TOTAL (Tax incl.)</span>
          <span>${total}</span>
        </div>

        <Button className="w-full bg-teal-400 text-black font-semibold py-2 rounded-lg flex items-center justify-between">
          <span>${total}</span>
          <span>Checkout →</span>
        </Button>
      </div>
    </div>
  );
}