import styles from './textInput.module.css';

function TextInput({
    placeholder,
    size,
    value,
    onChange
}) {
    return (
        <input 
            className={`
                ${styles.input}
                ${styles[size]}`}
            placeholder={placeholder}
            value={value}
            onChange={(event) => onChange(event.target.value)}
        />
    )
}

export default TextInput;