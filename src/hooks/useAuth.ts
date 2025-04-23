// hooks/useLogin.ts

import { useMutation } from '@tanstack/react-query';
import { login } from '../services/auth.service';
import { LoginPayload, LoginResponse } from '../types/user';

export const useLogin = (
    onSuccess?: (data: LoginResponse) => void,
    onError?: (error: any) => void
) => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => login(payload),
        onSuccess,
        onError,
    });
    
};