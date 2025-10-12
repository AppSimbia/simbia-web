import LoadProducts from '../../components/loadProducts/loadProducts';
import { Product } from '../../interfaces/models';
import { productListMock } from '../../mocks';
import styles from './feed.module.css';

function Feed() {
    const products: Product[] = productListMock;
    return (
        <>
            <h1 className={styles.feedTitle}>Feed</h1>

            <LoadProducts products={products}/>
        </>
    );
}

export default Feed;