import styles from './textInputMultiline.module.css';

export interface TextInputMultilineProps {
    placeholder: string;
    size?: 'sm' | 'md' | 'lg' | 'xg';
    rows?: number;
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
};

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