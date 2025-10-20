import { Employee } from "../models";

export interface EmployeeDetailsProps {
    employee: Employee;
    isOpen: boolean;
    onClose: () => void;
    onRemove: () => void;
};