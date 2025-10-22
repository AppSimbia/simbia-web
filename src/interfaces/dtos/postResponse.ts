export interface ProductCategoryResponse {
    id: number;
    categoryName: string;
    info: string;
    active: string;
};

export interface PostResponse {
    productCategory: ProductCategoryResponse;
    idIndustry: number;
    idEmployee: number;
    title: string;
    description: string;
    quantity: number;
    measureUnit: string;
    classification: string;
    image: string;
    publicationDate: string;
};