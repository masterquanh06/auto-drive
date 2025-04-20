import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import api from '../config/axios.config.ts';

export const useCart = () => {
    return useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await api.get('/cart');
            return res.data;
        }
    })
};

export const useAddtoCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { car_id: number; quantity: number }) => api.post('/cart', data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    })
};

export const useUpdateCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: { id: number; quantity: number }) =>
            api.put(`/cart/${data.id}`, { quantity: data.quantity }),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    })
};

export const useDeleteCartItem = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => api.delete(`/cart/${id}`),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] }),
    })
};