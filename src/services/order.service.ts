import axios from '../config/axios.config.ts';

export const createOrder = () => axios.post('/orders');
export const getOrders = () => axios.get('/orders');
export const getOrderById = (id: number) => axios.get(`/orders/${id}`);
