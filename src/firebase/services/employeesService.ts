import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";
import { EmployeeResponse } from "../dtos";

export async function getEmployees(): Promise<EmployeeResponse[]> {
    const querySnapshot = await getDocs(collection(db, "employee"));
    const employees: EmployeeResponse[] = [];
  
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        const employee: EmployeeResponse = {
            id: doc.id,
            imageUri: data.imageUri,
            industryId: data.industryId,
            name: data.name,
            email: data.email
        };

        employees.push(employee);
    });

    return employees;
}