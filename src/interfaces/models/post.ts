export interface ProductCategory {
    id: number;
    categoryName: string;
    info: string;
};

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
    price: number;
    measureUnit: string;
    classification: string;
    image: string;
    publicationDate: string;
    status: string;
};

export interface Posts {
    posts: Post[];
};