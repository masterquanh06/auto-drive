import {useQuery} from '@tanstack/react-query'
import api from '../config/axios.config.ts'

export const useCars = () => { 
    return useQuery({
        queryKey:['cars'], 
        queryFn:async() => { 
            const res = await api.get('/cars'); 
            return res.data;
        }
    })
}