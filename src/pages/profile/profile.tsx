import { useEffect, useState } from "react";
import { getPosts } from "../../api/services/postService";
import Tag from "../../components/tag/tag";
import { useAuth } from "../../contexts/authContext";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";
import TabView from "./components/tabView/tabView";
import styles from "./profile.module.css";
import { Industry, Post } from "../../interfaces/models";
import Loading from "../../components/loading/loading";
import { useParams } from "react-router-dom";

function Profile() {
    useProtectedRoute();

    const { cnpj } = useParams<{ cnpj?: string }>();
    const { industry } = useAuth();
    const [posts, setPosts] = useState<Post[] | null>(null);
    const [profileIndustry, setProfileIndustry] = useState<Industry | null>(null);

    useEffect(() => {
        setProfileIndustry(industry);

        async function fetchPosts() {
            if (!industry) return;
            
            const data = await getPosts(industry.cnpj);

            setPosts(data);
        }

        fetchPosts();
    }, [industry]);

    if (!profileIndustry) return <Loading isLoading fullScreen/>;

    return (
        <>
            <section className={styles.content}>
                <div className={styles.leftContent}>
                    <div className={styles.profileInfo}>
                        <img src={profileIndustry.image} alt="Logo da Indústria" className={styles.industryLogo}/>
                        <h1 className={styles.industryName}>{profileIndustry.name}</h1>
                        <Tag label={profileIndustry.industryType.industryTypeName}/>
                    </div>
                </div>

                <TabView industry={profileIndustry} posts={posts}/>
            </section>
        </>
    );
}

export default Profile;