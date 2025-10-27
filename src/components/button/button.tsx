import styles from "./button.module.css";

export interface ButtonProps {
    label: string,
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error' | 'outlined-neutral';
    disabled?: boolean;
    size?: 'ssm' | 'sm' | 'md' | 'lg' | 'xg';
    type?: 'button' | 'submit' | 'reset';
};

function Button({
    label,
    onClick,
    variant = 'primary',
    disabled = false,
    size,
    type = 'button'
}: ButtonProps) {
    return (
        <button
            type={type}
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