import styles from './textInput.module.css';

export interface TextInputProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg' | 'xg';
    variant?: 'default' | 'underline';
    value?: string;
    readonly?: boolean;
    type?: 'text' | 'password';
    onChange?: (value: string) => void;
};

function TextInput({
    placeholder,
    size,
    variant = 'default',
    value,
    readonly = false,
    type = 'text',
    onChange
}: TextInputProps) {
    return (
        <input 
            className={`
                ${styles.input}
                ${styles[variant]}
                ${size ? styles[size] : ''}`}
            disabled={readonly}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={(event) => onChange?.(event.target.value)}
        />
    )
}

export default TextInput;