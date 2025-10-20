import { TextInputMultilineProps } from '../../interfaces/props';
import styles from './textInputMultiline.module.css';

function TextInputMultiline({
    placeholder,
    size,
    rows = 4,
    value,
    readonly = false,
    onChange
}: TextInputMultilineProps) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${size ? styles[size] : ''}
                `}
                disabled={readonly}
                placeholder={placeholder}
                rows={rows}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
            />
        </>
    );
}

export default TextInputMultiline;