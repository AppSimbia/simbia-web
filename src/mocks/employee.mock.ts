import { Employee } from "../interfaces/models";

export const employeeMock: Employee = {
    id: "1",
    imageUri: "https://picsum.photos/250/250",
    industryId: 12,
    name: "Marcelo Bezerra Grilo Júnior",
    email: "marcelo.junior@gmail.com",
};

export const employeeListMock: Employee[] = Array(20).fill(employeeMock);

export const employeeListMock2: Employee[] = [
    employeeMock,
    {
        id: "2",
        imageUri: "https://picsum.photos/250/250",
        industryId: 12,
        name: "Carlos Eduardo Santi",
        email: "carlos.santi@gmail.com",
    },
    {
        id: "3",
        imageUri: "https://picsum.photos/250/250",
        industryId: 12,
        name: "Marcelo Modolo",
        email: "marcelo.modolo@gmail.com",
    },
    {
        id: "4",
        imageUri: "https://picsum.photos/250/250",
        industryId: 12,
        name: "Nisflei Galoni",
        email: "nisflei.galoni@gmail.com",
    }
];