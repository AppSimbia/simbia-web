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
import Snackbar, { SnackbarProps } from "../../components/snackbar/snackbar";
import Loading from "../../components/loading/loading";

function Employees() {
    const { industry } = useAuth();
    const [employees, setEmployees] = useState<Employee[] | null>(null);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[] | null>(null);
    const [search, setSearch] = useState("");
    const [createEmployeeModalOpen, setCreateEmployeeModalOpen] = useState(false);
    const [employeeName, setEmployeeName] = useState("");
    const [employeeEmail, setEmployeeEmail] = useState("");
    const [loading, setLoading] = useState(false);
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
            setLoading(true);

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

                if (success) await fetchEmployees();

                setCreateEmployeeModalOpen(false);
                setSnackbar({
                    show: true,
                    status: 'success',
                    title: "Sucesso!",
                    subtitle: "Funcionário criado com sucesso"
                });
            } catch (err) {
                setSnackbar({
                    show: true,
                    status: 'error',
                    title: "Erro",
                    subtitle: "Não foi possível criar o funcionário"
                });
            }

            setCreateEmployeeModalOpen(false);
            setLoading(false);
        } else {
            setSnackbar({
                show: true,
                status: 'warning',
                title: "Erro",
                subtitle: "Preencha todos os campos"
            });
        }
    }

    async function handleRemoveEmployee(uid: string): Promise<void> {
        setLoading(true);
        
        try {
            await removeEmployee(uid);

            setSnackbar({
                show: true,
                status: 'success',
                title: "Sucesso!",
                subtitle: "Funcionário removido"
            });
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível remover o funcionário"
            });
        } finally {
            await fetchEmployees();
            setLoading(false);
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

            <Loading isLoading={loading} fullScreen/>

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