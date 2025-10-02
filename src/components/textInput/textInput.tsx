import styles from './textInput.module.css';

interface TextInputProps {
    placeholder: string;
    size?: '' | 'md';
    value?: string;
    onChange?: (value: string) => void;
}

function TextInput({
    placeholder,
    size = '',
    value,
    onChange
}: TextInputProps) {
    return (
        <input 
            className={`
                ${styles.input}
                ${styles[size]}`}
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange?.(event.target.value)}
        />
    )
}

export default TextInput;