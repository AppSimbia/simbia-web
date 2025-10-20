import { useState } from "react";
import { Product, Products } from "../../interfaces/models";
import Button from "../button/button";
import ProductDetails from "../productDetails/productDetails";
import styles from "./loadProducts.module.css";
import { productMock } from "../../mocks";
import ProductCard from "../productCard/productCard";

function LoadProducts({products}: Products) {
    const [limit, setLimit] = useState(products.length > 10 ? 10 : products.length);

    const [detailsData, setDetailsData] = useState<Product>(productMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function setDetails(product: Product) {
        setDetailsData(product);
        setDetailsOpen(true);
    };

    return (
        <>
            <section className={styles.content}>
                <div className={styles.products}>
                    {products.slice(0, limit).map((p) => {
                        return (
                            <ProductCard
                                product={p}
                                onClick={() => {setDetails(p)}}
                            />
                        )
                    })}
                </div>

                <Button label="Carregar Mais" size="lg" onClick={() => {setLimit(limit + 10)}}/>
            </section>

            <ProductDetails product={detailsData} isOpen={isDetailsOpen} onClose={() => {setDetailsOpen(false)}}/>
        </>
    );
}

export default LoadProducts;