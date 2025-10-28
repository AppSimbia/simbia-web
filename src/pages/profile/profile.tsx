import { useEffect, useState } from "react";
import { getPosts } from "../../api/services/postService";
import Tag from "../../components/tag/tag";
import { useAuth } from "../../contexts/authContext";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";
import TabView from "./components/tabView/tabView";
import styles from "./profile.module.css";
import { Post } from "../../interfaces/models";

function Profile() {
    useProtectedRoute();
    const { industry } = useAuth();
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            if (!industry) return;
            
            const data = await getPosts(industry.cnpj);

            setPosts(data);
        }

        fetchPosts();
    }, [industry]);

    if (!industry) {
        return null;
    }

    return (
        <section className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.profileInfo}>
                    <img src={industry.image} alt="Logo da Indústria" className={styles.industryLogo}/>
                    <h1 className={styles.industryName}>{industry.name}</h1>
                    <Tag label={industry.industryType.industryTypeName}/>
                </div>
            </div>

            <TabView industry={industry} posts={posts}/>
        </section>
    );
}

export default Profile;