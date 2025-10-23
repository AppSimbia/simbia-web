import { useEffect, useState } from 'react';
import { getPosts } from '../../api/services/postService';
import Button from '../../components/button/button';
import LoadProducts from '../../components/loadProducts/loadProducts';
import TextInput from '../../components/textInput/textInput';
import { Post } from '../../interfaces/models';
import styles from './feed.module.css';
import { useAuth } from '../../contexts/authContext';

function Feed() {
    const { industry } = useAuth();
    const [posts, setPosts] = useState<Post[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchProducts() {
            if (!industry) return;
            
            const data = await getPosts(industry.cnpj);

            setPosts(data);
            setFilteredPosts(data);
        }

        fetchProducts();
    }, [industry]);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredPosts(posts);
        } else {
            const filteredData = posts.filter((p) => 
                p.title.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredPosts(filteredData);
        }
    }, [posts, search]);

    if (!posts) {
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
                    onClick={() => {console.log(posts)}}
                />
            </div>

            <LoadProducts posts={filteredPosts}/>
        </section>
    );
}

export default Feed;
