import axios from '../config/axios.config.ts';

export const getCars = () => axios.get('/cars');
export const createCar = (data: any) => axios.post('/cars', data);
export const deleteCar = (id: number) => axios.delete(`/cars/${id}`);
