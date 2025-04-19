import axios from '../config/axios.config.ts';
import { CartItem } from '../types/cart.ts';

export const getCart = async (): Promise<CartItem[]> => {
    const res = await axios.get('/cart');
    return res.data;
};

export const addToCart = async (car_id: number, quantity: number) => {
    const res = await axios.post('/cart', { car_id, quantity });
    return res.data;
};

export const updateQuantity = async (id: number, quantity: number) => {
    const res = await axios.put(`/cart/${id}`, { quantity });
    return res.data;
};

export const deleteCartItem = async (id: number) => {
    const res = await axios.delete(`/cart/${id}`);
    return res.data;
};
