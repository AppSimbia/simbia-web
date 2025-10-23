import { useEffect, useState } from 'react';
import Button from '../../components/button/button';
import LoadProducts from '../../components/loadProducts/loadProducts';
import TextInput from '../../components/textInput/textInput';
import { Product } from '../../interfaces/models';
import { productListMock2 } from '../../mocks';
import styles from './feed.module.css';

function Feed() {
    const [products, setProducts] = useState<Product[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            const data = productListMock2;

            setProducts(data);
            setFilteredProducts(data);
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredProducts(products);
        } else {
            const filteredData = products.filter((p) => 
                p.name.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredProducts(filteredData);
        }
    }, [products, search]);

    if (!products) {
        return null;
    }

    return (
        <section>
            <h1 className={styles.feedTitle}>Feed</h1>

            <div className={styles.actions}>
                <TextInput
                    placeholder="Pesquisar..."
                    size="xg"
                    value={search}
                    onChange={(value) => setSearch(value)}
                />

                <Button
                    label="Filtrar"
                    size="ssm"
                />
            </div>

            <LoadProducts products={filteredProducts}/>
        </section>
    );
}

export default Feed;
