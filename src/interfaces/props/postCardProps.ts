import { Product } from "../models";
import { TagProps } from "./tagProps";

export interface PostCardProps {
    product: Product;
    onClick?: () => void;
};