import { Employee } from "../interfaces/models";
import defaultProfile from "../assets/icons/default-profile.svg";

export const employeeMock: Employee = {
    id: 1,
    name: "Marcelo Bezerra Grilo Júnior",
    image: defaultProfile,
    email: "marcelo.junior@gmail.com",
    password: "senha123"
};

export const employeeListMock: Employee[] = Array(20).fill(employeeMock);

export const employeeListMock2: Employee[] = [
    employeeMock,
    {
        id: 2,
        name: "Carlos Eduardo Santi",
        image: defaultProfile,
        email: "carlos.santi@gmail.com",
        password: "senha123"
    },
    {
        id: 3,
        name: "Marcelo Modolo",
        image: defaultProfile,
        email: "marcelo.modolo@gmail.com",
        password: "senha123"
    },
    {
        id: 4,
        name: "Nisflei Galoni",
        image: defaultProfile,
        email: "nisflei.galoni@gmail.com",
        password: "senha123"
    }
]