import styles from './snackbar.module.css';
import checkIcon from '../../assets/icons/check.svg';
import closeIcon from '../../assets/icons/close.svg';
import warningCircleIcon from '../../assets/icons/warning-circle.svg';
import { useEffect } from 'react';

export interface SnackbarProps {
    status: 'success' | 'error' | 'warning';
    title: string;
    subtitle: string;
    show: boolean;
    onClose?: () => void;
}

function Snackbar({
    status,
    title,
    subtitle,
    show,
    onClose
}: SnackbarProps) {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(() => {
                if (onClose) onClose();
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div className={`
            ${styles.snackbar}
            ${status === 'success' ? styles.success : ""}
            ${status === 'error' ? styles.error : ""}
            ${status === 'warning' ? styles.warning : ""}
            ${show ? "" : styles.hide}
        `}>
            {status === "success" && (
                <img src={checkIcon} alt="Sucesso" className={styles.icon}/>
            )}
            {status === "error" && (
                <img src={closeIcon} alt="Erro" className={styles.icon}/>
            )}
            {status === "warning" && (
                <img src={warningCircleIcon} alt="Cuidado" className={styles.icon}/>
            )}

            <div className={styles.details}>
                <h2>{title}</h2>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default Snackbar;