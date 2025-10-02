import styles from './textInputMultiline.module.css';

interface TextInputMultilineProps {
    placeholder: string;
    size?: '' | 'md';
    rows: number;
    value?: string;
    onChange?: (value: string) => void;
}

function TextInputMultiline({
    placeholder,
    size = '',
    rows = 4,
    value,
    onChange
}: TextInputMultilineProps) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${styles[size]}
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