import { useState } from "react";
import LoadProducts from "../../../../components/loadProducts/loadProducts";
import { Industry } from "../../../../interfaces/models/industry";
import { productListMock } from "../../../../mocks";
import ProfileInfo from "../profileInfo/profileInfo";
import styles from "./tabView.module.css";

function TabView(industry: Industry) {
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
                        <ProfileInfo {...industry}/>
                    ) : (
                        <LoadProducts products={productListMock}/>
                    )
                }
            </div>
        </section>
    );
}

export default TabView;