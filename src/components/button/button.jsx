import styles from './button.module.css';

function Button({
    label,
    onClick,
    variant = 'primary',
    disabled = false,
    size = ''
}) {
    return (
        <button
            className={`
                ${styles.button}
                ${styles[variant]}
                ${styles[size]}
            `}
            onClick={onClick}
            disabled={disabled}
        >
            {label.toUpperCase()}
        </button>
    );
}

export default Button;