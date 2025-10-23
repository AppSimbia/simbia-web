import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { LoginData, Industry } from "../interfaces/models";
import { signIn } from "../api/services/authService";

interface AuthContextType {
    industry: Industry | null;
    loading: boolean;
    login: (data: LoginData) => Promise<void>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [industry, setIndustry] = useState<Industry | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedIndustry = localStorage.getItem("industry");
        if (storedIndustry) setIndustry(JSON.parse(storedIndustry));
        setLoading(false);
    }, []);

    async function login(data: LoginData) {
        const loggedIndustry = await signIn(data);
        setIndustry(loggedIndustry);
        localStorage.setItem("industry", JSON.stringify(loggedIndustry));
    }

    function logout() {
        setIndustry(null);
        localStorage.removeItem("industry");
    }

    return (
        <AuthContext.Provider value={{ industry, loading, login, logout }}>
        {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    return context;
}
