import { useEffect, useState } from 'react';
import Button from '../button/button';
import Tag from '../tag/tag';
import TextInputMultiline from '../textInputMultiline/textInputMultiline';
import styles from './postDetails.module.css';
import { Post } from '../../interfaces/models';

export interface PostDetailsProps {
    post: Post;
    isOpen: boolean;
    onClose: () => void;
};

function PostDetails({
    post,
    isOpen = false,
    onClose
}: PostDetailsProps) {
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.containerLeft}>
                        <img src={post.image} alt={post.title} className={styles.postImg} />
                        <div className={styles.tags}>
                            {post.productCategory && <Tag label={post.productCategory.categoryName}/>}
                            <Tag label={post.classification}/>
                        </div>
                    </div>

                    <div className={styles.postDetails}>
                        <h1 className={styles.name}>{post.title}</h1>
                        <div className={styles.postInfo}>
                            <h3>Quantidade disponível: {post.quantity} {post.measureUnit}</h3>
                            <h3>Preço por {post.measureUnit}: R${post.price.toFixed(2)}</h3>
                        </div>
                        <div className={styles.description}>
                            <span>Descrição:</span>
                            <TextInputMultiline placeholder='Descrição' value={post.description} rows={8} readonly/>
                        </div>
                        <Button label='Solicitar Match'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PostDetails;