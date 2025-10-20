export interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
    measureUnit: string;
    imgUrl: string;
    description: string;
    category: string;
    classification: string;
};

export interface Products {
    products: Product[];
};