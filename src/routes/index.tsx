import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
        </Routes>
    );
}