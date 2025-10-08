import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";
import Feed from "../pages/feed/feed";
import ProductDetails from "../pages/productDetails/productDetails";
import { productListMock } from "../mocks";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed products={productListMock}/>}/>
            <Route path="details" element ={<ProductDetails/>}/>
        </Routes>
    );
}