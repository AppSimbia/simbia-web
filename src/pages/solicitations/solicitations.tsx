import { useEffect, useState } from "react";
import Button from "../../components/button/button";
import LoadSolicitations from "../../components/loadSolicitations/loadSolicitations";
import TextInput from "../../components/textInput/textInput";
import { Solicitation } from "../../interfaces/models";
import { getSolicitations } from "../../mongo/services/solicitationService";
import styles from "./solicitations.module.css";
import { useAuth } from "../../contexts/authContext";

function Solicitations() {
    const { industry } = useAuth();
    const [solicitations, setSolicitations] = useState<Solicitation[] | null>(null);
    const [filteredSolicitations, setFilteredSolicitations] = useState<Solicitation[] | null>(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        async function fetchSolicitations() {
            if (!industry) return;

            const data = await getSolicitations(industry.cnpj);

            setSolicitations(data);
            setFilteredSolicitations(data);
        }

        fetchSolicitations();
    }, [industry]);

    useEffect(() => {
        if (!solicitations) return;

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