import { useEffect, useState } from 'react';
import { getPosts } from '../../api/services/postService';
import Button from '../../components/button/button';
import LoadPosts from '../../components/loadPosts/loadPosts';
import TextInput from '../../components/textInput/textInput';
import { useAuth } from '../../contexts/authContext';
import { Post } from '../../interfaces/models';
import styles from './feed.module.css';

function Feed() {
    const { industry } = useAuth();
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchPosts() {
            if (!industry) return;
            
            const data = await getPosts(industry.cnpj);

            setPosts(data);
            setFilteredPosts(data);
        }

        fetchPosts();
    }, [industry]);

    useEffect(() => {
        if (!posts) return;

        if (search.trim() === "") {
            setFilteredPosts(posts);
        } else {
            const filteredData = posts.filter((p) => 
                p.title.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredPosts(filteredData);
        }
    }, [posts, search]);

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

            <LoadPosts posts={filteredPosts}/>
        </section>
    );
}

export default Feed;
