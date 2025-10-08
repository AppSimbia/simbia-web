import { useLocation } from 'react-router-dom';
import Button from '../../components/button/button';
import Tag from '../../components/tag/tag';
import { Product } from '../../interfaces/models';
import styles from './productDetails.module.css';

function ProductDetails() {
    const { state } = useLocation();
    const product = state as Product;
    
    return (
        <>
            <section className={styles.content}>
                <div className={styles.containerLeft}>
                    <img src={product.imgUrl} alt={product.name} className={styles.productImg} />

                    <div className={styles.tags}>
                        <Tag label={product.category}/>
                        <Tag label={product.classification} />
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.productDetails}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <div className={styles.productInfo}>
                            <h3>{product.quantity}{product.measureUnit}</h3>
                            <h3>R${product.price}/{product.measureUnit}</h3>
                        </div>
                        <p>{product.description}</p>
                    </div>

                    <Button label='Solicitar Match'/>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;