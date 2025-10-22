import { useEffect } from "react";
import { useAuth } from "../contexts/authContext";

export function useAuthCheck() {
    const { industry, loading } = useAuth();

    useEffect(() => {
        if (!loading && !industry) {
        console.warn("Usuário não autenticado");
        }
    }, [industry, loading]);

    return { industry, loading, isAuthenticated: !!industry };
}