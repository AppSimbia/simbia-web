import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";
import Feed from "../pages/feed/feed";
import Solicitations from "../pages/solicitations/solicitations";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/solicitations" element={<Solicitations/>}/>
        </Routes>
    );
}