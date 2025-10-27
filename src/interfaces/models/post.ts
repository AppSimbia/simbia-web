import { ProductCategory } from "./productCategory";

export interface Post {
    idPost: number;
    productCategory: ProductCategory;
    industryName: string;
    industryImage: string;
    industryCnpj: string;
    employeeName: string;
    title: string;
    description: string;
    quantity: number;
    measureUnit: string;
    classification: string;
    image: string;
    publicationDate: string;
    status: string;
};