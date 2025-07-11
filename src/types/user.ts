// types/user.ts

export interface LoginPayload {
  username: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  username: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
    avatar?: string;
  };
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
  avatar?: string;
}