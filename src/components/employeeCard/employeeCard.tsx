import { Employee } from "../../interfaces/models";
import styles from "./employeeCard.module.css";

export interface EmployeeCardProps {
    employee: Employee;
    onClick: () => void;
};

function EmployeeCard({
    employee,
    onClick
}: EmployeeCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <img src={employee.imageUri} alt="Imagem de perfil" className={styles.employeeImg}/>

                <div className={styles.employeeInfo}>
                    <h1 className={styles.employeeName}>{employee.name}</h1>
                    <h3 className={styles.eployeeEmail}>{employee.email}</h3>
                </div>
            </div>
        </>
    );
}

export default EmployeeCard;