import { Post } from "../interfaces/models";

export const postMock: Post = {
    idPost: 1,
    productCategory: {
        id: 1,
        categoryName: "Plásticos",
        info: "Plásticos"
    },
    industryName: "Raízen",
    industryImage: "https://e3ba6e8732e83984.cdn.gocache.net/uploads/image/file/881174/regular_5d541e260fe61c39175f3e2f395b3017.jpg",
    industryCnpj: "33453598000123",
    employeeName: "Marcelo Bezerra Grilo Jr",
    title: "Plástico PET Reciclável",
    image: "https://recicla.club/wp-content/uploads/2021/11/design-blog-37-.png",
    description: "O resíduo de Plástico PET (Polietileno Tereftalato) é amplamente utilizado em garrafas e embalagens de bebidas. Após o consumo, ele pode ser reciclado diversas vezes, sendo transformado em fibras têxteis, novos recipientes plásticos ou até mesmo materiais para construção. A correta separação e higienização deste resíduo são fundamentais para garantir a qualidade do material reciclado e reduzir o impacto ambiental causado pelo descarte incorreto.",
    quantity: 1500,
    price: 9.5,
    measureUnit: "kg",
    classification: "Não perigoso",
    publicationDate: "aaaaaaa",
    status: "2"
};

export const postListMock: Post[] = Array(20).fill(postMock);