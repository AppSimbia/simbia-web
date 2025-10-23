import { useEffect, useState } from 'react';
import { ProductDetailsProps } from '../../interfaces/props';
import Button from '../button/button';
import Tag from '../tag/tag';
import TextInputMultiline from '../textInputMultiline/textInputMultiline';
import styles from './productDetails.module.css';

function ProductDetails({
    product,
    isOpen = false,
    onClose
}: ProductDetailsProps) {
    const [open, setOpen] = useState(isOpen);

    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.containerLeft}>
                        <img src={product.imgUrl} alt={product.name} className={styles.productImg} />
                        <div className={styles.tags}>
                            <Tag label={product.category}/>
                            <Tag label={product.classification} />
                        </div>
                    </div>

                    <div className={styles.productDetails}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <div className={styles.productInfo}>
                            <h3>Quantidade disponível: {product.quantity} {product.measureUnit}</h3>
                            <h3>Preço por {product.measureUnit}: R${product.price.toFixed(2)}</h3>
                        </div>
                        <div className={styles.description}>
                            <span>Descrição:</span>
                            <TextInputMultiline placeholder='Descrição' value={product.description} rows={8} readonly/>
                        </div>
                        <Button label='Solicitar Match'/>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ProductDetails;