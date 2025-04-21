
import axios from '../config/axios.config';
import { LoginPayload, LoginResponse, RegisterPayload } from '../types/user';

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
    const res = await axios.post<LoginResponse>('/login', data);
    return res.data;
};

export const register = async (data: RegisterPayload) => {
    return axios.post('/register', data);
};
