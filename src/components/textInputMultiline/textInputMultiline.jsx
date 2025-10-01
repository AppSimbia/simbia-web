import styles from './textInputMultiline.module.css';

function TextInputMultiline({
    placeholder,
    size = '',
    rows = 4,
    value,
    onChange
}) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${styles[size]}
                `}
                placeholder={placeholder}
                rows={rows}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
        </>
    );
}

export default TextInputMultiline;