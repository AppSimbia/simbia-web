import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";

export function useProtectedRoute() {
  const { industry, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !industry) {
      navigate("/sign-in");
    }
  }, [industry, loading, navigate]);
}