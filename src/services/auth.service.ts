import axios from '../config/axios.config.ts';
import { LoginPayload, RegisterPayload } from '../types/user.ts';

export const login = (data: LoginPayload) => axios.post('/login', data);
export const register = (data: RegisterPayload) => axios.post('/register', data);
