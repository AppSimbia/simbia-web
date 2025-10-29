import { useState } from "react";
import { Post } from "../../interfaces/models";
import { postMock } from "../../mocks";
import Button from "../button/button";
import Loading from "../loading/loading";
import PostCard from "../postCard/postCard";
import PostDetails from "../postDetails/postDetails";
import styles from "./loadPosts.module.css";

export interface LoadPostsProps {
    posts: Post[] | null;
}

function LoadPosts({posts}: LoadPostsProps) {
    const [limit, setLimit] = useState(10);

    const [detailsData, setDetailsData] = useState<Post>(postMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function setDetails(post: Post) {
        setDetailsData(post);
        setDetailsOpen(true);
    };

    if (!posts) {
        return <Loading isLoading/>;
    }

    return (
        <>
            <section className={styles.content}>
                <div className={styles.posts}>
                    {posts.slice(0, limit).map((p, i) => {
                        return (
                            <PostCard
                                key={i}
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

            <PostDetails
                post={detailsData}
                isOpen={isDetailsOpen}
                onClose={() => {setDetailsOpen(false)}}
            />
        </>
    );
}

export default LoadPosts;