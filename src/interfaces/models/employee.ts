export interface Employee {
    id: string;
    imageUri: string;
    industryId: number;
    name: string;
    email: string;
};

export interface Employees {
    employees: Employee[];
};