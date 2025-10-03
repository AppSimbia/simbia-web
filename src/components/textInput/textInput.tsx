import { TextInputProps } from '../../interfaces/textInputProps';
import styles from './textInput.module.css';

interface TextInputComponentProps {
    textInput: TextInputProps;
    onChange: (value: string) => void;
};

function TextInput({
    textInput,
    onChange
}: TextInputComponentProps) {
    return (
        <input 
            className={`
                ${styles.input}
                ${textInput.size ? styles[textInput.size] : ''}`}
            placeholder={textInput.placeholder}
            value={textInput.value}
            onChange={(event) => onChange?.(event.target.value)}
        />
    )
}

export default TextInput;