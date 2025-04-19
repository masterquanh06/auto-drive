import axiosClient from "./axiosClient";
export const createOrder = () => axiosClient.post('/orders');
export const getOrders = () => axiosClient.get('/orders');
export const getOrderDetail = (id: number) => axiosClient.get(`order/${id}`)