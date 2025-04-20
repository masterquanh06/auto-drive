import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import api from '../config/axios.config.ts';

export const useOrders = () => {
    return useQuery({
        queryKey: ['orders'],
        queryFn: async () => {
            const res = await api.get('/orders');
            return res.data;
        }
    })
};

export const useCreateOrder = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: () => api.post('/orders'),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        }
    })
};