import { useEffect, useState } from 'react';
import { getFeed } from '../../api/services/postService';
import Button from '../../components/button/button';
import LoadPosts from '../../components/loadPosts/loadPosts';
import Snackbar, { SnackbarProps } from '../../components/snackbar/snackbar';
import TextInput from '../../components/textInput/textInput';
import { useAuth } from '../../contexts/authContext';
import { Post } from '../../interfaces/models';
import styles from './feed.module.css';
import { useProtectedRoute } from '../../hooks/useProtectedRoute';

function Feed() {
        
    useProtectedRoute();
    
    const { industry } = useAuth();
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [filteredPosts, setFilteredPosts] = useState<Post[] | null>(null);
    const [search, setSearch] = useState("");
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    useEffect(() => {
        async function fetchPosts() {
            if (!industry) return;
            
            try {
                const data = await getFeed(industry.cnpj);

                setPosts(data);
                setFilteredPosts(data);
            } catch (err) {
                setSnackbar({
                    show: true,
                    status: 'error',
                    title: "Erro",
                    subtitle: "Não foi possível carregar as postagens"
                });
            }
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
        <>
            <section>
                <div className={styles.actions}>
                <h1 className={styles.feedTitle}>Feed</h1>

                    <TextInput
                        placeholder="Pesquisar..."
                        size="xg"
                        value={search}
                        onChange={(value) => setSearch(value)}
                    />
                </div>

                <LoadPosts posts={filteredPosts}/>
            </section>

            <Snackbar
                status={snackbar.status}
                title={snackbar.title}
                subtitle={snackbar.subtitle}
                show={snackbar.show}
                onClose={() => setSnackbar({ ...snackbar, show: false })}
            />
        </>
    );
}

export default Feed;
