import { useState } from "react";
import LoadPosts from "../../../../components/loadPosts/loadPosts";
import { Post } from "../../../../interfaces/models";
import { Industry } from "../../../../interfaces/models/industry";
import ProfileInfo from "../profileInfo/profileInfo";
import styles from "./tabView.module.css";

export interface TabViewProps {
    selfProfile?: boolean;
    industry: Industry;
    posts: Post[] | null;
};

function TabView({
    selfProfile = false,
    industry,
    posts
}: TabViewProps) {
    const [selectedTab, setSelectedTab] = useState<"info" | "posts">("info");

    return (
        <section className={styles.tabView}>
            <div className={styles.tabNav}>
                <input
                    type="radio"
                    id="info"
                    name="tab"
                    data-tab="info"
                    className={styles.input}
                    checked={selectedTab === "info"}
                    onChange={() => {setSelectedTab("info")}}
                />
                <label htmlFor="info" className={`${styles.label} ${styles.infoLabel}`}>
                    Informações
                </label>

                <input
                    type="radio"
                    id="posts"
                    name="tab"
                    data-tab="posts"
                    className={styles.input}
                    checked={selectedTab === "posts"}
                    onChange={() => {setSelectedTab("posts")}}
                />
                <label htmlFor="posts" className={`${styles.label} ${styles.postsLabel}`}>
                    Postagens
                </label>
            </div>

            <div className={styles.tabContent}>
                {selectedTab === "info" ? (
                        <ProfileInfo industry={industry} selfProfile={selfProfile}/>
                    ) : (
                        <LoadPosts posts={posts}/>
                    )
                }
            </div>
        </section>
    );
}

export default TabView;