import axios from '../config/axios.config.ts';
import { Order } from '../types/order.ts';

export const createOrder = async (): Promise<Order> => {
  const res = await axios.post('/orders');
  return res.data;
};

export const getOrders = async (): Promise<Order[]> => {
  const res = await axios.get('/orders');
  return res.data;
};

export const getOrderById = async (id: number): Promise<Order> => {
  const res = await axios.get(`/orders/${id}`);
  return res.data;
};
