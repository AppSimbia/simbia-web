export interface Employee {
    id: number;
    name: string;
    image: string;
    email: string;
    password: string;
};

export interface Employees {
    employees: Employee[];
};