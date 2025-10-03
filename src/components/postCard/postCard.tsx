import styles from "./postCard.module.css";
import Tag from "../tag/tag";
import { PostCardProps } from "../../interfaces/postCardProps";

interface PostCardComponentProps {
    product: PostCardProps;
    onClick?: () => void;
}

function PostCard({ product, onClick }: PostCardComponentProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <img src={product.imgUrl} alt={product.productName} className={styles.image} />
                    <img src={product.industryLogo} alt="Logo" className={styles.logo} />
                </div>

                <h3 className={styles.productName}>{product.productName}</h3>
                {product.tag && <Tag tagProps={product.tag} />}
                <div className={styles.productInfo}>
                    <p>R${product.productPrice}</p>
                    <p>{product.unit}{product.measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default PostCard;