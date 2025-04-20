import axios from '../config/axios.config.ts';

export const getCart = () => axios.get('/cart');
export const addToCart = (data: { car_id: number; quantity: number }) => axios.post('/cart', data);
export const updateCart = (id: number, quantity: number) =>
    axios.put(`/cart/${id}`, { quantity });
export const deleteCartItem = (id: number) => axios.delete(`/cart/${id}`);