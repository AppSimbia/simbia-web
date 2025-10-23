import { PostCardProps } from "../../interfaces/props";
import Tag from "../tag/tag";
import styles from "./productCard.module.css";

function PostCard({
    post,
    onClick
}: PostCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <img src={post.image} alt={post.title} className={styles.image} />
                </div>

                <h2 className={styles.productName}>{post.title}</h2>
                <Tag label={post.productCategory.categoryName} onClick={(e) => e.stopPropagation()}/>
                <div className={styles.productInfo}>
                    <p>R$10.00</p>
                    <p>{post.quantity} {post.measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default PostCard;