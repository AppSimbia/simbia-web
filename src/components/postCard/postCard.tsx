import { useNavigate } from "react-router-dom";
import { Post } from "../../interfaces/models";
import Tag from "../tag/tag";
import styles from "./postCard.module.css";

export interface PostCardProps {
    post: Post;
    onClick?: () => void;
};

function PostCard({
    post,
    onClick
}: PostCardProps) {
    const navigate = useNavigate();

    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <div className={styles.imgContainer}>
                    <div
                        className={styles.industryInfo}
                        onClick={() => {navigate(`/profile/${post.industryCnpj}`)}}
                    >
                        <img src={post.industryImage} className={styles.industryImage}/>
                        <h3>{post.industryName}</h3>
                    </div>

                    <img src={post.image} alt={post.title} className={styles.image}/>
                </div>

                <h2 className={styles.postName}>{post.title}</h2>
                <Tag label={post.productCategory.categoryName} onClick={(e) => e.stopPropagation()}/>
                <div className={styles.postInfo}>
                    <p>R${post.price.toFixed(2)}</p>
                    <p>{post.quantity} {post.measureUnit}</p>
                </div>
            </div>
        </>
    );
}

export default PostCard;