import axios from '../config/axios.config';
import { axiosInstance } from "../config/axios.config.ts";
import { LoginPayload, LoginResponse, RegisterPayload } from '../types/user';
import { User } from "../types/user.ts";

export const login = async (data: LoginPayload): Promise<LoginResponse> => {
    const res = await axios.post<LoginResponse>('/login', data);
    return res.data;
};

export const register = async (data: RegisterPayload) => {
    return axios.post('/register', data);
};

export const getProfile = async (): Promise<User> => {
    const res = await axiosInstance.get("/me");
    return res.data;
};
