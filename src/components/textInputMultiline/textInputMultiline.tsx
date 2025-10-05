import { TextInputMultilineProps } from '../../interfaces/props';
import styles from './textInputMultiline.module.css';

function TextInputMultiline({
    placeholder,
    size,
    rows = 4,
    value,
    onChange
}: TextInputMultilineProps) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${size ? styles[size] : ''}
                `}
                placeholder={placeholder}
                rows={rows}
                value={value}
                onChange={(event) => onChange?.(event.target.value)}
            />
        </>
    );
}

export default TextInputMultiline;