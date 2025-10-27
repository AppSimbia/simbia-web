export interface ProductCategoryResponse {
    id: number;
    categoryName: string;
    info: string;
    active: string;
};

export interface PostResponse {
    idPost: number;
    productCategory: ProductCategoryResponse;
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