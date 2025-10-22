import Tag from "../../components/tag/tag";
import { useAuth } from "../../contexts/authContext";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";
import TabView from "./components/tabView/tabView";
import styles from "./profile.module.css";

function Profile() {
    useProtectedRoute();
    const { industry } = useAuth();

    if (!industry) {
        return null;
    }

    return (
        <section className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.profileInfo}>
                    <img src={industry.imgUrl} alt="Logo da Indústria" className={styles.industryLogo}/>
                    <h1 className={styles.industryName}>{industry.name}</h1>
                    <Tag label={industry.industryType.industryTypeName}/>
                </div>
            </div>

            <TabView {...industry}/>
        </section>
    );
}

export default Profile;