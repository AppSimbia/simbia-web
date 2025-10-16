import Tag from "../../components/tag/tag";
import TabView from "./components/tabView/tabView";
import styles from "./profile.module.css";

function Profile() {
    return (
        <section className={styles.content}>
            <div className={styles.profileInfo}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLGlr26j0ftFCRkG-wQt4yKBTm-wMN9M4Ifw&s" alt="Logo da Indústria" className={styles.industryLogo}/>
                <div className={styles.nameCep}>
                    <h1 className={styles.industryName}>Raízen</h1>
                    <Tag label="Sucro-alcooleira"/>
                </div>
            </div>

            <TabView/>
        </section>
    );
}

export default Profile;