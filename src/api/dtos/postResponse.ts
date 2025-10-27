export interface PostCategoryResponse {
    id: number;
    categoryName: string;
    info: string;
    active: string;
};

export interface PostResponse {
    idPost: number;
    postCategory: PostCategoryResponse;
    industryName: string;
    industryImage: string;
    industryCnpj: string;
    employeeName: string;
    title: string;
    description: string;
    quantity: number;
    price: number;
    measureUnit: string;
    classification: string;
    image: string;
    publicationDate: string;
    status: string;
};