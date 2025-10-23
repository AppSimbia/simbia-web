import { ProductCardProps } from "../../interfaces/props";
import Tag from "../tag/tag";
import styles from "./productCard.module.css";

function ProductCard({
    product,
    onClick
}: ProductCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <img src={product.imgUrl} alt={product.name} className={styles.image} />
                </div>

                <h2 className={styles.productName}>{product.name}</h2>
                <Tag label={product.category} onClick={(e) => e.stopPropagation()}/>
                <div className={styles.productInfo}>
                    <p>R${product.price.toFixed(2)}</p>
                    <p>{product.quantity} {product.measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;