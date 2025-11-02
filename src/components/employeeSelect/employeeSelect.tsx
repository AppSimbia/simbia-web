import { useEffect, useState } from 'react';
import { Employee } from '../../interfaces/models';
import styles from './employeeSelect.module.css';
import Button from '../button/button';

export interface EmployeeSelectProps {
    employees: Employee[];
    isOpen: boolean;
    onClose: () => void;
    onSelectEmployee: (employeeUid: string) => void;
}

function EmployeeSelect({
    employees,
    isOpen,
    onClose,
    onSelectEmployee
}: EmployeeSelectProps) {
    const [open, setOpen] = useState(isOpen);
    const [selectedEmployee, setSelectedEmployee] = useState("");
        
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    function handleSelectedEmployee() {
        if (selectedEmployee !== "") {
            onSelectEmployee(selectedEmployee);

            onClose;
        }
    }
    
    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div>
                        <h1>Selecionar Funcionário</h1>
                        <h3>Escolha um funcionário para designar</h3>
                    </div>

                    {employees.length > 0 && (
                        <div className={styles.employees}>
                            {employees.map((e) => (
                                <label
                                    key={e.id}
                                    className={styles.employeeCard}
                                    htmlFor={`employee${e.id}`}
                                >
                                    <input
                                        className={styles.selectEmployee}
                                        type="radio"
                                        id={`employee${e.id}`}
                                        name="select"
                                        onChange={() => {setSelectedEmployee(e.id)}}
                                    />

                                    <div className={styles.employeeInfo}>
                                        <h3 className={styles.employeeName}>{e.name}</h3>
                                        
                                        <img src={e.imageUri} className={styles.employeeImg}/>
                                    </div>
                                </label>
                            ))}
                        </div>
                    )}

                    <div className={styles.actions}>
                        <Button
                            label='Atribuir Funcionário'
                            onClick={handleSelectedEmployee}
                        />

                        <Button
                            label='Cancelar'
                            variant='error'
                            onClick={onClose}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}

export default EmployeeSelect;