import { TagProps } from "./tagProps";

export interface PostCardProps {
    imgUrl: string;
    industryLogo: string;
    productName: string;
    tag?: TagProps;
    productPrice: number;
    unit: number;
    measureUnit: string;
};