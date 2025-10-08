import { useNavigate } from 'react-router-dom';
import PostCard from '../../components/postCard/postCard';
import { FeedProps } from '../../interfaces/props';
import styles from './feed.module.css';

function Feed({products}: FeedProps) {
    const navigate = useNavigate();

    return (
        <>
            <h1 className={styles.feedTitle}>Feed</h1>
            <div className={styles.products}>
                {products.map((product, i) => (
                    <PostCard
                        key={i}
                        product={product}
                        onClick={() => navigate("/details", { state: product })}
                    />
                ))}
            </div>
        </>
    );
}

export default Feed;