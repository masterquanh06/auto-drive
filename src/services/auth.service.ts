import axios from '../config/axios.config.ts';
import { LoginResponse } from '../types/auth.ts';

export const login = async (email: string, password: string): Promise<LoginResponse> => {
    const res = await axios.post('/login', { email, password });
    return res.data;
};

export const register = async (email: string, password: string) => {
    const res = await axios.post('/register', { email, password });
    return res.data;
};
