import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import LoadEmployees from "../../components/loadEmployees/loadEmployees";
import TextInput from "../../components/textInput/textInput";
import { Employee } from "../../interfaces/models";
import styles from "./employees.module.css";
import { employeeListMock } from "../../mocks";

function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchEmployees() {
            const data = employeeListMock;

            setEmployees(data);
            setFilteredEmployees(data);
        }

        fetchEmployees();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredEmployees(employees);
        } else {
            const filteredData = employees.filter((e) => 
                e.name.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredEmployees(filteredData);
        }
    }, [employees, search]);

    if (!employees) {
        return null;
    }

    return (
        <section>
            <h1 className={styles.employeesTitle}>Funcionários</h1>

            <div className={styles.actions}>
                <TextInput
                    placeholder="Pesquisar..."
                    size="xg"
                    value={search}
                    onChange={(value) => setSearch(value)}
                />

                <Button label="Filtrar" size="ssm" />
            </div>

            <LoadEmployees employees={filteredEmployees}/>
        </section>
    );
}

export default Employees;