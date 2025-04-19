import axios from '../config/axios.config.ts';
import { Car } from '../types/car.ts';

export const getCars = async (): Promise<Car[]> => {
    const res = await axios.get('/cars');
    return res.data;
};

export const addCar = async (data: Omit<Car, 'id'>) => {
    const res = await axios.post('/cars', data);
    return res.data;
};
