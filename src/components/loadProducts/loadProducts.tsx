import { useState } from "react";
import { Post } from "../../interfaces/models";
import Button from "../button/button";
import ProductCard from "../productCard/productCard";
import ProductDetails from "../productDetails/productDetails";
import styles from "./loadProducts.module.css";
import { postMock } from "../../mocks";

interface LoadProductsProps {
    posts: Post[];
};

function LoadProducts({posts}: LoadProductsProps) {
    const [limit, setLimit] = useState(10);

    const [detailsData, setDetailsData] = useState<Post>(postMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function setDetails(product: Post) {
        setDetailsData(product);
        setDetailsOpen(true);
    };

    if (!posts) {
        return null;
    }

    return (
        <>
            <section className={styles.content}>
                <div className={styles.posts}>
                    {posts.slice(0, limit).map((p) => {
                        return (
                            <ProductCard
                                post={p}
                                onClick={() => {setDetails(p)}}
                            />
                        )
                    })}
                </div>

                {posts.length > limit &&
                    <Button label="Carregar Mais" size="lg" onClick={() => {setLimit(limit + 10)}}/>
                }
            </section>

            <ProductDetails
                post={detailsData}
                isOpen={isDetailsOpen}
                onClose={() => {setDetailsOpen(false)}}
            />
        </>
    );
}

export default LoadProducts;