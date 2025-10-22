import { Navigate, Route, Routes } from "react-router-dom";
import Employees from "../pages/employees/employees";
import Feed from "../pages/feed/feed";
import Profile from "../pages/profile/profile";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";
import Solicitations from "../pages/solicitations/solicitations";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in"/>} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/solicitations" element={<Solicitations/>}/>
            <Route path="/employees" element={<Employees/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    );
}