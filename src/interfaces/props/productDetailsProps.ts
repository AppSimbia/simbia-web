import { Product } from "../models";

export interface ProductDetailsProps {
    product: Product;
    isOpen: boolean;
    onClose: () => void;
};