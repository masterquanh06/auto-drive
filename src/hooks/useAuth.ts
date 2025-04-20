import { useMutation } from '@tanstack/react-query'
import api from '../config/axios.config.ts';

export const useLogin = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string }) => api.post('/login', data),
    });
};

export const useRegister = () => {
    return useMutation({
        mutationFn: (data: { email: string; password: string; role?: string }) => api.post('/register', data),
    })
}
