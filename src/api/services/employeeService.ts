import api from "../config";
import { EmployeeRequest, EmployeeResponse } from "../dtos";

export async function createEmployeeAndGetId(employeeData: EmployeeRequest): Promise<number> {
    const response = await api.post<EmployeeResponse>(
        "/employees",
        {
            employeeName: employeeData.name,
            idIndustry: employeeData.industryId
        }
    );

    return response.data.employeeId;
}