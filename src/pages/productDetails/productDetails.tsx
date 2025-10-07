import Button from '../../components/button/button';
import Tag from '../../components/tag/tag';
import TextInputMultiline from '../../components/textInputMultiline/textInputMultiline';
import { Product } from '../../interfaces/models';
import styles from './productDetails.module.css';

function ProductDetails({
    name,
    price = 0,
    quantity = 0,
    measureUnit = 'Kg',
    imgUrl,
    description,
    category,
    classification
}: Product) {
    return (
        <>
            <section className={styles.content}>
                <div className={styles.containerLeft}>
                    <img src={imgUrl} alt={name} className={styles.productImg} />

                    <div className={styles.tags}>
                        <Tag label={category}/>
                        <Tag label={classification} />
                    </div>
                </div>

                <div className={styles.containerRight}>
                    <div className={styles.productDetails}>
                        <h1 className={styles.name}>{name}</h1>
                        <div className={styles.productInfo}>
                            <h3>{quantity}{measureUnit}</h3>
                            <h3>R${price}/{measureUnit}</h3>
                        </div>
                        <p>{description}</p>
                    </div>

                    <Button label='Solicitar Match'/>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;