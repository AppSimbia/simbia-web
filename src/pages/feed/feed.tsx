import LoadProducts from '../../components/loadProducts/loadProducts';
import ProductDetails from '../../components/productDetails/productDetails';
import { Products } from '../../interfaces/models';
import styles from './feed.module.css';

function Feed({products}: Products) {
    return (
        <>
            <h1 className={styles.feedTitle}>Feed</h1>

            <LoadProducts products={products}/>
        </>
    );
}

export default Feed;