import { TextInputMultilineProps } from '../../interfaces/textInputMultilineProps';
import styles from './textInputMultiline.module.css';

interface TextInputMultilineComponentProps {
    textInputMultiline: TextInputMultilineProps;
    onChange: (value: string) => void;
};

function TextInputMultiline({
    textInputMultiline,
    onChange
}: TextInputMultilineComponentProps) {
    return (
        <>
            <textarea className={`
                    ${styles.input}
                    ${textInputMultiline.size ? styles[textInputMultiline.size] : ''}
                `}
                placeholder={textInputMultiline.placeholder}
                rows={textInputMultiline.rows}
                value={textInputMultiline.value}
                onChange={(event) => onChange?.(event.target.value)}
            />
        </>
    );
}

export default TextInputMultiline;