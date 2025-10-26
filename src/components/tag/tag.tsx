import styles from './tag.module.css';

export interface TagProps {
    label: string;
    variant?: 'primary' | 'secondary' | 'error' | 'outlined' | 'outlined-secondary' | 'outlined-error';
    onClick?: (e?: any) => void | any;
    disabled?: boolean;
};

function Tag({
    label,
    variant = 'primary',
    onClick,
    disabled = false
}: TagProps) {
    return (
        <>
            <button
                onClick={onClick}
                disabled={disabled}
                className={`
                    ${styles.tag}
                    ${styles[variant]}
                `}
            >
                {label}
            </button>
        </>
    );
}
export default Tag;