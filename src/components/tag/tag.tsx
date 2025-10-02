import styles from './tag.module.css'

interface TagProps {
    label: string;
    variant: '' | 'secondary' | 'disabled' | 'error';
}

function Tag({
    label,
    variant = ''
}: TagProps) {
    return (
        <>
            <span
                className={`
                    ${styles.tag}
                    ${styles[variant]}
                `}
            >
                {label}
            </span>
        </>
    );
}
export default Tag;