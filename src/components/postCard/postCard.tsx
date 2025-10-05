import styles from "./postCard.module.css";
import Tag from "../tag/tag";
import { PostCardProps } from "../../interfaces/props";

function PostCard({
        imgUrl,
        industryLogo,
        productName = "Carregando",
        tag,
        productPrice = 0,
        unit = 0,
        measureUnit,
        onClick
    }: PostCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <img src={imgUrl} alt={productName} className={styles.image} />
                    <img src={industryLogo} alt="Logo" className={styles.logo} />
                </div>

                <h3 className={styles.productName}>{productName}</h3>
                {tag && <Tag {...tag}/>}
                <div className={styles.productInfo}>
                    <p>R${productPrice}</p>
                    <p>{unit}{measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default PostCard;