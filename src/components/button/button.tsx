import { ButtonProps } from "../../interfaces/props";
import styles from "./button.module.css";

function Button({
    label,
    onClick,
    variant = 'primary',
    disabled = false,
    size
}: ButtonProps) {
    return (
        <button
            className={`
                ${styles.button}
                ${variant ? styles[variant] : ''}
                ${size ? styles[size] : ''}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {label.toUpperCase()}
        </button>
    );
}

export default Button;