import axiosClient from "./axiosClient";
export interface AddToCartPayload { 
    car_id:number;
    quantity:number; 
}

export interface UpdateQuantityPayload { 
    quantity: number;
}

export const getCart = () => axiosClient.get('/cart');
export const addToCart = (data: AddToCartPayload) => axiosClient.post('/cart',data);
export const updateCart = (id:number,data: UpdateQuantityPayload) => axiosClient.put(`/cart/${id}`, data);
export const deleteCartItem = (id:number) => axiosClient.delete(`/cart/${id}`);
