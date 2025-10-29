import styles from './emptyListFeedback.module.css';
import closeIcon from '../../assets/icons/close.svg';

export interface EmptyListFeedbackProps {
    message: string;
}

function EmptyListFeedback({
    message
}: EmptyListFeedbackProps) {
    return (
        <div className={styles.overlay}>
            <img src={closeIcon} alt="Lista vazia" className={styles.icon}/>
            <h3 className={styles.text}>{message}</h3>
        </div>
    );
}

export default EmptyListFeedback;