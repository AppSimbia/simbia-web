import { Product } from "../models";

export interface ProductCardProps {
    product: Product;
    onClick?: () => void;
};