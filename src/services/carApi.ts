import axiosClient from "./axiosClient";

export interface Car {
    id?: number;
    brand: string;
    model: string;
    price: number;
}

export const getCar = () => axiosClient.get<Car[]>('/cars');
export const CreateCar = (data: Car) => axiosClient.post('/cars', data);
export const deletecar = (id: number) => axiosClient.delete(`/cars/${id}`)