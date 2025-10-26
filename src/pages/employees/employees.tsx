import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import LoadEmployees from "../../components/loadEmployees/loadEmployees";
import Modal from "../../components/modal/modal";
import TextInput from "../../components/textInput/textInput";
import { getEmployees } from "../../firebase/services/employeesService";
import { Employee } from "../../interfaces/models";
import styles from "./employees.module.css";
import { useAuth } from "../../contexts/authContext";
import { createEmployee } from "../../firebase/services/employeesService";
import { EmployeeRequest } from "../../firebase/dtos";

function Employees() {
    const { industry } = useAuth();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [search, setSearch] = useState("");
    const [createEmployeeModalOpen, setCreateEmployeeModalOpen] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");

    useEffect(() => {
        fetchEmployees();
    }, [industry]);
    
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

    async function fetchEmployees() {
        if (!industry) return;

        const data = await getEmployees(industry.id);

        setEmployees(data);
        setFilteredEmployees(data);
    }

    async function handleCreateEmployee() {
        if (!industry) return;

        if (employeeName.trim() !== "" && employeeEmail.trim() !== "") {
            const employeeData: EmployeeRequest = {
                industryId: industry.id,
                name: employeeName.trim(),
                email: employeeEmail.trim(),
            }
            
            const success: boolean = await createEmployee(employeeData);

            if (success) {
                console.log("Sucesso");
                fetchEmployees();
            } else {
                console.error("Erro");
            }
        }
    }

    if (!employees) {
        return null;
    }

    return (
        <>
            <section>
                <h1 className={styles.employeesTitle}>Funcionários</h1>

                <div className={styles.actions}>
                    <TextInput
                        placeholder="Pesquisar..."
                        size="xg"
                        value={search}
                        onChange={(value) => setSearch(value)}
                    />

                    <Button
                        label="Criar Funcionário"
                        size="sm"
                        onClick={() => {setCreateEmployeeModalOpen(true)}}
                    />
                </div>

                <LoadEmployees employees={filteredEmployees}/>
            </section>

            <Modal
                title="Criar Funcionário"
                subtitle="Preencha todos os campos"
                isOpen={createEmployeeModalOpen}
                onClose={() => {setCreateEmployeeModalOpen(false)}}
                inputs={[
                    {
                        placeholder: "Nome do Funcionário",
                        value: employeeName,
                        onChange: (name) => {setEmployeeName(name)}
                    },
                    {
                        placeholder: "E-mail do Funcionário",
                        value: employeeEmail,
                        onChange: (email) => {setEmployeeEmail(email)}
                    }
                ]}
                actions={[
                    {
                        label: "Criar Funcionário",
                        onClick: () => {handleCreateEmployee()}
                    },
                    {
                        label: "Cancelar",
                        variant: "error",
                        onClick: () => {setCreateEmployeeModalOpen(false)}
                    }
                ]}
            />
        </>
    );
}

export default Employees;