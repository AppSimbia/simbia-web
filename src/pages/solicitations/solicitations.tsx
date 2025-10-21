import LoadSolicitations from "../../components/loadSolicitations/loadSolicitations";
import { Solicitation } from "../../interfaces/models";
import { solicitationListMock, solicitationListMock2 } from "../../mocks";
import styles from "./solicitations.module.css";

function Solicitations() {
    const solicitations: Solicitation[] = solicitationListMock;
    return (
        <section>
            <h1 className={styles.solicitationsTitle}>Solicitações</h1>

            <LoadSolicitations solicitations={solicitations}/>
        </section>
    );
}

export default Solicitations;