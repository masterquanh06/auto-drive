import "@/assets/styles/main.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from "react-router";
import { AuthProvider } from "./context/auth.context";
import router from "./router";

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    <StrictMode> 
        <QueryClientProvider client={queryClient}> 
            <AuthProvider>
                <RouterProvider router={router} /> 
            </AuthProvider>
        </QueryClientProvider>
    </StrictMode>
);
