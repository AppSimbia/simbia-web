import { useEffect, useState } from "react";
import Button from "../button/button";
import styles from "./employeeDetails.module.css";
import { EmployeeDetailsProps } from "../../interfaces/props";

function EmployeeDetails({
    employee,
    isOpen = false,
    onClose,
    onRemove
}: EmployeeDetailsProps) {
    const [open, setOpen] = useState(isOpen);
        
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <img src={employee.image} alt="Imagem de perfil" className={styles.employeeImg}/>

                    <div className={styles.employeeInfo}>
                        <h1 className={styles.employeeName}>{employee.name}</h1>
                        <h2 className={styles.eployeeEmail}>{employee.email}</h2>
                    </div>

                    <Button label="Remover Funcionário" variant="error" size="md" onClick={onRemove}/>
                </div>
            </section>
        </>
    );
}

export default EmployeeDetails;