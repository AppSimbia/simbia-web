import styles from './textInputMultiline.module.css';

function TextInputMultiline({
    placeholder,
    size = '',
    rows = 4
}) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${styles[size]}
                `}
                placeholder={placeholder}
                rows={rows}
            />
        </>
    );
}

export default TextInputMultiline;