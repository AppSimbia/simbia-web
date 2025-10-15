import { useState } from "react";
import { employeeMock } from "../../mocks";
import EmployeeCard from "../employeeCard/employeeCard";
import EmployeeDetails from "../employeeDetails/employeeDetails";
import Modal from "../modal/modal";
import styles from "./loadEmployees.module.css";
import { Employee, Employees } from "../../interfaces/models";
import Button from "../button/button";

function LoadEmployees({employees}: Employees) {
    const [limit, setLimit] = useState(employees.length > 10 ? 10 : employees.length);

    const [detailsData, setDetailsData] = useState<Employee>(employeeMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const [employeeId, setEmployeeId] = useState(0);
    const [removeEmployeeModalOpen, setRemoveEmployeeModalOpen] = useState(false);

    function openDetails(employee: Employee) {
        setDetailsData(employee);
        setDetailsOpen(true);
    }

    function openRemoveEmployee() {
        setRemoveEmployeeModalOpen(true);
    }
    
    return (
        <>
            <section className={styles.content}>
                <div className={styles.employees}>
                    {employees.slice(0, limit).map((e) => {
                        return (
                            <EmployeeCard
                                key={e.id}
                                employee={e}
                                onClick={() => {openDetails(e)}}
                            />
                        )
                    })}
                </div>

                {employees.length > limit &&
                    <Button label="Carregar Mais" size="lg" onClick={() => {setLimit(limit + 10)}}/>
                }
            </section>

            <EmployeeDetails
                employee={detailsData}
                isOpen={isDetailsOpen}
                onClose={() => {setDetailsOpen(false)}}
                onRemove={() => {setRemoveEmployeeModalOpen(true)}}
            />

            <Modal
                title="Remover Funcionário"
                subtitle="Deseja mesmo remover este funcionário?"
                isOpen={removeEmployeeModalOpen}
                onClose={() => {setRemoveEmployeeModalOpen(false)}}
                actions={[
                    {
                        label: 'Cancelar',
                        onClick: () => {setRemoveEmployeeModalOpen(false)}
                    },
                    {
                        label: 'Remover',
                        variant: 'error'
                    }
                ]}
            />
        </>
    );
}

export default LoadEmployees;