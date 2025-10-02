import styles from "./button.module.css";

interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: '' | 'secondary' | 'error';
    disabled?: boolean;
    size?: '' | 'md';
};

function Button({
    label = '',
    onClick,
    variant = '',
    disabled = false,
    size = ''
}: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${styles[variant]} ${styles[size]}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label.toUpperCase()}
        </button>
    );
}

export default Button;