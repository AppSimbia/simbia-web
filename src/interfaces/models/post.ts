import { ProductCategory } from "./productCategory";

export interface Post {
    productCategory: ProductCategory;
    idIndustry: number;
    idEmployee: number;
    title: string;
    description: string;
    quantity: number;
    measureUnit: string;
    classification: string;
    image: string;
};