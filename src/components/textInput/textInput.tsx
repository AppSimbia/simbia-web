import { TextInputProps } from '../../interfaces/props';
import styles from './textInput.module.css';

function TextInput({
    placeholder,
    size,
    value,
    onChange
}: TextInputProps) {
    return (
        <input 
            className={`
                ${styles.input}
                ${size ? styles[size] : ''}`}
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange?.(event.target.value)}
        />
    )
}

export default TextInput;