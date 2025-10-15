import LoadEmployees from "../../components/loadEmployees/loadEmployees";
import { Employee } from "../../interfaces/models";
import { employeeListMock } from "../../mocks";
import styles from "./employees.module.css";

function Employees() {
    const employees: Employee[] = employeeListMock;
    return (
        <>
            <h1 className={styles.employeesTitle}>Funcionários</h1>

            <LoadEmployees employees={employees}/>
        </>
    );
}

export default Employees;