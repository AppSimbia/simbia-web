import { Industry } from "../interfaces/models/industry";

export const industryMock: Industry = {
    id: 1,
    name: "Raízen",
    imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGlr26j0ftFCRkG-wQt4yKBTm-wMN9M4Ifw&s",
    cnpj: "00.623.904/0001-73",
    industryType: {
        id: 2,
        industryTypeName: "Sucroalcooleira",
        info: "Indústrias do setor sucroalcooleiro"
    },
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor dictum dictum. Etiam sit amet ornare orci. Curabitur vulputate facilisis neque vitae facilisis. Nam pharetra, massa in elementum pellentesque, nisl massa pharetra eros, ultrices ullamcorper diam risus in leo. Praesent sed nunc vitae lorem feugiat ultricies. Vivamus at nisi lacus. Donec convallis dui non felis lacinia, vehicula pulvinar ipsum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    plan: "Gratuito",
    email: "raizen@raizen.com",
    cep: "06038-080",
    state: "São Paulo",
    city: "Osasco"
};