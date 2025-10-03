import { ButtonProps } from "../../interfaces/buttonProps";
import styles from "./button.module.css";

interface ButtonComponentProps {
    button: ButtonProps;
};

function Button({button}: ButtonComponentProps) {
    return (
        <button
            className={`
                ${styles.button}
                ${button.variant ? styles[button.variant] : ''}
                ${button.size ? styles[button.size] : ''}
            `}
            onClick={button.onClick}
            disabled={button.disabled}
        >
            {button.label.toUpperCase()}
        </button>
    );
}

export default Button;