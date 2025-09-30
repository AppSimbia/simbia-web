import styles from './tag.module.css'

function Tag({
    label,
    variant = 'primary'
}) {
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