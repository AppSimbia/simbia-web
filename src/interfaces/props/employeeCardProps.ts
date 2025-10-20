import { Employee } from "../models";

export interface EmployeeCardProps {
    employee: Employee;
    onClick: () => void;
};