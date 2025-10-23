import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import LoadSolicitations from "../../components/loadSolicitations/loadSolicitations";
import TextInput from "../../components/textInput/textInput";
import { Solicitation } from "../../interfaces/models";
import { solicitationListMock } from "../../mocks";
import styles from "./solicitations.module.css";

function Solicitations() {
    const [solicitations, setSolicitations] = useState<Solicitation[]>([]);
    const [filteredSolicitations, setFilteredSolicitations] = useState<Solicitation[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchSolicitations() {
            const data = solicitationListMock;

            setSolicitations(data);
            setFilteredSolicitations(data);
        }

        fetchSolicitations();
    }, []);

    useEffect(() => {
        if (search.trim() === "") {
            setFilteredSolicitations(solicitations);
        } else {
            const filteredData = solicitations.filter((e) => 
                e.employeeName ?
                    e.employeeName.toLowerCase().includes(search.toLowerCase())
                    :
                    e.industryName?.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredSolicitations(filteredData);
        }
    }, [solicitations, search]);

    if (!solicitations) {
        return null;
    }

    return (
        <section>
            <h1 className={styles.solicitationsTitle}>Solicitações</h1>

            <div className={styles.actions}>
                <TextInput
                    placeholder="Pesquisar..."
                    size="xg"
                    value={search}
                    onChange={(value) => setSearch(value)}
                />

                <Button
                    label="Filtrar"
                    size="ssm"
                />
            </div>

            <LoadSolicitations solicitations={filteredSolicitations}/>
        </section>
    );
}

export default Solicitations;