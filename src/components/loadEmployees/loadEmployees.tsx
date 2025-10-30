import { useState } from "react";
import { Employee } from "../../interfaces/models";
import { employeeMock } from "../../mocks";
import Button from "../button/button";
import EmployeeCard from "../employeeCard/employeeCard";
import EmployeeDetails from "../employeeDetails/employeeDetails";
import Loading from "../loading/loading";
import Modal from "../modal/modal";
import styles from "./loadEmployees.module.css";
import EmptyListFeedback from "../emptyListFeedback/emptyListFeedback";

export interface LoadEmployeesProps {
    employees: Employee[] | null;
    removeEmployee: (uid: string) => void;
};

function LoadEmployees({
    employees,
    removeEmployee
}: LoadEmployeesProps) {
    const [limit, setLimit] = useState(10);

    const [detailsData, setDetailsData] = useState<Employee>(employeeMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const [removeEmployeeModalOpen, setRemoveEmployeeModalOpen] = useState(false);

    function openDetails(employee: Employee) {
        setDetailsData(employee);
        setDetailsOpen(true);
    }

    if (!employees) return <Loading isLoading/>

    if (employees.length === 0) return <EmptyListFeedback message="Nenhum funcionário foi encontrado"/>
    
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
                        variant: 'error',
                        onClick: () => {removeEmployee(detailsData.id)}
                    }
                ]}
            />
        </>
    );
}

export default LoadEmployees;