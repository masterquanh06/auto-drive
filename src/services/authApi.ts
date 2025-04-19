import axiosClient from './axiosClient';
export interface AuthPayload { 
    email:string;
    password: string; 

}

export const register = (data: AuthPayload) => axiosClient.post('/register',data); 
export const login = (data: AuthPayload) => axiosClient.post('/login', data);