import Tag from "../../components/tag/tag";
import { Industry } from "../../interfaces/models/industry";
import TabView from "./components/tabView/tabView";
import styles from "./profile.module.css";

interface ProfileProps {
    industry: Industry;
    selfProfile: boolean;
};

function Profile({
    industry,
    selfProfile = true
}: ProfileProps) {
    return (
        <section className={styles.content}>
            <div className={styles.leftContent}>
                <div className={styles.profileInfo}>
                    <img src={industry.imgUrl} alt="Logo da Indústria" className={styles.industryLogo}/>
                    <h1 className={styles.industryName}>{industry.name}</h1>
                    <Tag label={industry.industryType}/>
                </div>
            </div>

            <TabView {...industry}/>
        </section>
    );
}

export default Profile;