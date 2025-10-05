import { TagProps } from '../../interfaces/props';
import styles from './tag.module.css';

function Tag({
    label,
    variant = 'primary',
    onClick,
    disabled = false
}: TagProps) {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={`
                    ${styles.tag}
                    ${styles[variant]}
                `}
            >
                {label}
            </button>
        </>
    );
}
export default Tag;