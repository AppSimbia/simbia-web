import { Product } from "../interfaces/models";

export const productMock: Product = {
    id: 1,
    name: "Plástico PET Reciclável",
    price: 1.80,
    quantity: 1500,
    measureUnit: "kg",
    imgUrl: "https://recicla.club/wp-content/uploads/2021/11/design-blog-37-.png",
    description: "O resíduo de Plástico PET (Polietileno Tereftalato) é amplamente utilizado em garrafas e embalagens de bebidas. Após o consumo, ele pode ser reciclado diversas vezes, sendo transformado em fibras têxteis, novos recipientes plásticos ou até mesmo materiais para construção. A correta separação e higienização deste resíduo são fundamentais para garantir a qualidade do material reciclado e reduzir o impacto ambiental causado pelo descarte incorreto.",
    category: "Plásticos",
    classification: "Não perigoso"
}

export const productListMock: Product[] = Array(20).fill(productMock);

export const productListMock2: Product[] = [
    productMock,
    {
        id: 2,
        name: "Cera de cana de açúcar",
        price: 2,
        quantity: 700,
        measureUnit: "unidade",
        imgUrl: "https://picsum.photos/500/500",
        description: "A cera de cana-de-açúcar é uma substância natural obtida a partir do resíduo do processamento da cana, especialmente do bagaço ou do licor da produção de etanol e açúcar. Ela é composta principalmente por ésteres de ácidos graxos de cadeia longa e álcoois graxos, o que a torna semelhante, em estrutura e propriedades, à cera de carnaúba e à cera de abelha.",
        category: "Orgânicos",
        classification: "Não Perigoso"
    },
    {
        id: 3,
        name: "Torta de Filtro",
        price: 0.10,
        quantity: 500,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Resíduo pastoso resultante do processo de filtragem do caldo da cana-de-açúcar. Rico em matéria orgânica, fósforo e cálcio, é amplamente utilizado como adubo natural na agricultura.",
        category: "Resíduo Orgânico Industrial",
        classification: "Não Perigoso"
    },
    {
        id: 4,
        name: "Cinzas de Caldeira",
        price: 0.05,
        quantity: 1200,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Material particulado gerado pela queima do bagaço de cana em caldeiras. Contém minerais como potássio e sílica, podendo ser reutilizado como corretivo de solo.",
        category: "Resíduo Mineral",
        classification: "Não Perigoso"
    },
    {
        id: 5,
        name: "Lodo de Galvanoplastia",
        price: 0.50,
        quantity: 200,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Resíduo sólido formado na etapa de tratamento de efluentes da galvanoplastia. Contém metais pesados como cromo, níquel e zinco, exigindo descarte controlado.",
        category: "Resíduo Inorgânico",
        classification: "Perigoso"
    },
    {
        id: 6,
        name: "Óleo Lubrificante Usado",
        price: 1.20,
        quantity: 300,
        measureUnit: "L",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Óleo proveniente de máquinas e motores industriais após uso prolongado. Contém hidrocarbonetos degradados e metais, devendo ser destinado à regeneração ou coprocessamento.",
        category: "Resíduo Químico",
        classification: "Perigoso"
    },
    {
        id: 7,
        name: "Lodo Biológico",
        price: 0.00,
        quantity: 800,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Subproduto gerado na digestão biológica de efluentes industriais. Rico em matéria orgânica e microrganismos, pode ser aproveitado em compostagem sob controle sanitário.",
        category: "Resíduo Orgânico Industrial",
        classification: "Não Perigoso"
    },
    {
        id: 8,
        name: "Resíduo Plástico Pós-Produção",
        price: 0.20,
        quantity: 1500,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Fragmentos e aparas de embalagens plásticas gerados durante o corte e moldagem. Totalmente reciclável e utilizado como matéria-prima em novos produtos plásticos.",
        category: "Resíduo Reciclável",
        classification: "Não Perigoso"
    },
    {
        id: 9,
        name: "Lodo de Tingimento Têxtil",
        price: 0.30,
        quantity: 400,
        measureUnit: "kg",
        imgUrl: "https://picsum.photos/500/500",
        description:
            "Resíduo úmido formado pelo tratamento de águas residuais do tingimento de tecidos. Contém corantes, sais e compostos orgânicos, exigindo tratamento adequado.",
        category: "Resíduo Químico",
        classification: "Perigoso"
    }
];