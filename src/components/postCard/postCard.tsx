import styles from "./postCard.module.css";
import Tag from "../tag/tag";
import { PostCardProps } from "../../interfaces/props";

function PostCard({
        product,
        onClick
    }: PostCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <img src={product.imgUrl} alt={product.name} className={styles.image} />
                </div>

                <h2 className={styles.productName}>{product.name}</h2>
                <Tag label={product.category}/>
                <div className={styles.productInfo}>
                    <p>R${product.price.toFixed(2)}</p>
                    <p>{product.quantity}{product.measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default PostCard;