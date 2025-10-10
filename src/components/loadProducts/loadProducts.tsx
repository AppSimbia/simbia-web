import { useState } from "react";
import { Product, Products } from "../../interfaces/models";
import Button from "../button/button";
import PostCard from "../postCard/postCard";
import ProductDetails from "../productDetails/productDetails";
import styles from "./loadProducts.module.css";
import { productMock } from "../../mocks";

function LoadProducts({products}: Products) {
    const [limit, setLimit] = useState(10);
    const [detailsData, setDetailsData] = useState<Product>(productMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function setDetails(product: Product) {
        setDetailsData(product);
        setDetailsOpen(true);
    };

    return (
        <>
            <section>
                <div className={styles.products}>
                    {products.slice(0, limit).map((p) => {
                        return (
                            <PostCard product={p} onClick={() => {setDetails(p)}}/>
                        );
                    })}
                </div>

                <Button label="Carregar Mais" size="lg" onClick={() => {setLimit(limit + 10)}}/>
            </section>

            <ProductDetails product={detailsData} isOpen={isDetailsOpen} onClose={() => {setDetailsOpen(false)}}/>
        </>
    );
}

export default LoadProducts;