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