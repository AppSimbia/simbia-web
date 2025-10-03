import { TagProps } from '../../interfaces/tagProps';
import styles from './tag.module.css';

interface TagComponentProps {
    tagProps: TagProps;
}

function Tag(tag: TagComponentProps) {
    return (
        <>
            <span
                className={`
                    ${styles.tag}
                    ${tag.tagProps.variant ? styles[tag.tagProps.variant] : ''}
                `}
            >
                {tag.tagProps.label}
            </span>
        </>
    );
}
export default Tag;