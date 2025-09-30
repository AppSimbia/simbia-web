import styles from './textInput.module.css';

function TextInput({
    placeholder,
    size
}) {
    return (
        <input 
            className={`
                ${styles.input}
                ${styles[size]}`}
            placeholder={placeholder} 
        />
    )
}

export default TextInput;