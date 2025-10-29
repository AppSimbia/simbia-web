import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import LoadEmployees from "../../components/loadEmployees/loadEmployees";
import Modal from "../../components/modal/modal";
import TextInput from "../../components/textInput/textInput";
import { getEmployees, removeEmployee } from "../../firebase/services/employeesService";
import { Employee } from "../../interfaces/models";
import styles from "./employees.module.css";
import { useAuth } from "../../contexts/authContext";
import { createEmployee } from "../../firebase/services/employeesService";
import { createEmployeeAndGetId } from "../../api/services/employeeService";
import { EmployeeRequest } from "../../api/dtos";
import Snackbar, { SnackbarProps } from "../../components/snackbar/snackBar";

function Employees() {
    const { industry } = useAuth();
    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[] | null>(null);
    const [search, setSearch] = useState("");
    const [createEmployeeModalOpen, setCreateEmployeeModalOpen] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    useEffect(() => {
        fetchEmployees();
    }, [industry]);
    
    useEffect(() => {
        if (!employees) return;

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

        try {
            const data = await getEmployees(industry.id);

            setEmployees(data);
            setFilteredEmployees(data);
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível carregar os funcionários"
            });
        }
    }

    async function handleCreateEmployee() {
        if (!industry) return;

        if (employeeName.trim() !== "" && employeeEmail.trim() !== "") {
            try {
                const employeeData: EmployeeRequest = {
                    industryId: industry.id,
                    name: employeeName.trim(),
                    email: employeeEmail.trim(),
                };

                const employeeId = await createEmployeeAndGetId(employeeData);

                const success: boolean = await createEmployee({
                    ...employeeData,
                    employeeId
                });

                if (success) fetchEmployees();
            } catch (err) {
                setSnackbar({
                    show: true,
                    status: 'error',
                    title: "Erro",
                    subtitle: "Não foi possível criar o funcionário"
                });
            }
        }
    }

    async function handleRemoveEmployee(uid: string) {
        const success = await removeEmployee(uid);

        if (success) {
            console.log("Sucesso");
            fetchEmployees();
        } else {
            console.error("Erro");
        }
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

                <LoadEmployees
                    employees={filteredEmployees}
                    removeEmployee={(uid) => {handleRemoveEmployee(uid)}}
                />
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

            <Snackbar
                status={snackbar.status}
                title={snackbar.title}
                subtitle={snackbar.subtitle}
                show={snackbar.show}
                onClose={() => setSnackbar({ ...snackbar, show: false })}
            />
        </>
    );
}

export default Employees;