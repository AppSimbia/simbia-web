import { Product } from "../interfaces/models";

export const productMock: Product = {
    id: 1,
    name: "Plástico PET Reciclável",
    price: 1.80,
    quantity: 1500,
    measureUnit: "kg",
    imgUrl: "https://recicla.club/wp-content/uploads/2021/11/design-blog-37-.png",
    description: `O resíduo de Plástico PET (Polietileno Tereftalato) é amplamente utilizado em garrafas e embalagens de bebidas. Após o consumo, ele pode ser reciclado diversas vezes, sendo transformado em fibras têxteis, novos recipientes plásticos ou até mesmo materiais para construção. A correta separação e higienização deste resíduo são fundamentais para garantir a qualidade do material reciclado e reduzir o impacto ambiental causado pelo descarte incorreto.`,
    category: "Plásticos",
    classification: "Não perigoso"
}

export const productListMock: Product[] = Array(20).fill(productMock);