import { create } from "zustand";
import { User } from "../types/user";
import { jwtDecode } from "jwt-decode";

export interface TypeAppStore {
    user: User | null;
    setAppStore: (data: { user: User | null }) => void;
}

const token = localStorage.getItem("token");
const userInit = token ? (jwtDecode(token) as User) : null;

export const appStore = create<TypeAppStore>((set) => ({
    user: userInit,
    setAppStore: (data) => set(() => ({ user: data.user })),
}));
