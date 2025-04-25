import { useQuery } from "@tanstack/react-query";
import { getMe } from "../services/root.service.ts";

export const useGetMe = (enabled: boolean) => {
    return useQuery({
        enabled,
        queryKey: ['me'],
        queryFn: getMe
    })
};