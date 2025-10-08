import { Navigate, Route, Routes } from "react-router-dom";
import SignIn from "../pages/sign-in/signIn";
import SignUp from "../pages/sign-up/signUp";
import { Product } from "../interfaces/models";
import Feed from "../pages/feed/feed";
import ProductDetails from "../pages/productDetails/productDetails";

export function AppRoutes() {
    const mockProducts: Product[] = [
        {
            name: "Lorem",
            price: 9.99,
            quantity: 1000,
            measureUnit: "Kg",
            imgUrl: "https://picsum.photos/900/900",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue facilisis lorem, a faucibus lacus blandit sit amet. Fusce sagittis nunc in sem fermentum, vel euismod sem auctor. Vestibulum maximus imperdiet ipsum, non dapibus nulla elementum a. Quisque pharetra urna justo, iaculis mollis metus tincidunt non.",
            category: "Texto",
            classification: "Produto não perigoso",
        },
        {
            name: "Ipsum",
            price: 99.9,
            quantity: 9999,
            measureUnit: "L",
            imgUrl: "https://picsum.photos/900/900",
            description: "Cras varius mi tortor, a finibus diam scelerisque nec. Vivamus ac felis leo. Pellentesque molestie nec diam at lacinia. Vivamus luctus maximus nisl. Vestibulum quis turpis et ex vehicula efficitur. Vestibulum bibendum congue molestie. Sed id ligula sit amet libero tempus sollicitudin vitae id leo. Aenean vitae finibus metus. Nulla ac tortor pharetra, volutpat quam a, tempus lectus. Fusce scelerisque ante in semper egestas. Ut lectus mi, fermentum in ante ut, placerat pulvinar mi. Ut ultricies erat massa, in lobortis turpis fringilla et. Nam luctus posuere mi, vel ornare ex porttitor sed.",
            category: "Texto",
            classification: "Produto perigoso",
        },
        {
            name: "Lorem",
            price: 9.99,
            quantity: 1000,
            measureUnit: "Kg",
            imgUrl: "https://picsum.photos/900/900",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue facilisis lorem, a faucibus lacus blandit sit amet. Fusce sagittis nunc in sem fermentum, vel euismod sem auctor. Vestibulum maximus imperdiet ipsum, non dapibus nulla elementum a. Quisque pharetra urna justo, iaculis mollis metus tincidunt non.",
            category: "Texto",
            classification: "Produto não perigoso",
        },
        {
            name: "Ipsum",
            price: 99.9,
            quantity: 9999,
            measureUnit: "L",
            imgUrl: "https://picsum.photos/900/900",
            description: "Cras varius mi tortor, a finibus diam scelerisque nec. Vivamus ac felis leo. Pellentesque molestie nec diam at lacinia. Vivamus luctus maximus nisl. Vestibulum quis turpis et ex vehicula efficitur. Vestibulum bibendum congue molestie. Sed id ligula sit amet libero tempus sollicitudin vitae id leo. Aenean vitae finibus metus. Nulla ac tortor pharetra, volutpat quam a, tempus lectus. Fusce scelerisque ante in semper egestas. Ut lectus mi, fermentum in ante ut, placerat pulvinar mi. Ut ultricies erat massa, in lobortis turpis fringilla et. Nam luctus posuere mi, vel ornare ex porttitor sed.",
            category: "Texto",
            classification: "Produto perigoso",
        },
        {
            name: "Lorem",
            price: 9.99,
            quantity: 1000,
            measureUnit: "Kg",
            imgUrl: "https://picsum.photos/900/900",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue facilisis lorem, a faucibus lacus blandit sit amet. Fusce sagittis nunc in sem fermentum, vel euismod sem auctor. Vestibulum maximus imperdiet ipsum, non dapibus nulla elementum a. Quisque pharetra urna justo, iaculis mollis metus tincidunt non.",
            category: "Texto",
            classification: "Produto não perigoso",
        }
    ];
    
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/sign-in" />} />
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
            <Route path="/feed" element={<Feed products={mockProducts}/>}/>
            <Route path="details" element ={<ProductDetails/>}/>
        </Routes>
    );
}