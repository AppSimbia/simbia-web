import { useEffect, useState } from "react";
import { getAllSolicitations } from "../../api/services/solicitationService";
import LoadSolicitations from "../../components/loadSolicitations/loadSolicitations";
import Snackbar, { SnackbarProps } from "../../components/snackbar/snackbar";
import TextInput from "../../components/textInput/textInput";
import { useAuth } from "../../contexts/authContext";
import { Solicitation } from "../../interfaces/models";
import styles from "./solicitations.module.css";
import { useProtectedRoute } from "../../hooks/useProtectedRoute";

function Solicitations() {
    useProtectedRoute();
    
    const { industry } = useAuth();
    const [solicitations, setSolicitations] = useState<Solicitation[] | null>(null);
    const [filteredSolicitations, setFilteredSolicitations] = useState<Solicitation[] | null>(null);
    const [search, setSearch] = useState("");
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    useEffect(() => {
        fetchSolicitations();
    }, [industry]);

    useEffect(() => {
        if (!solicitations) return;

        if (search.trim() === "") {
            setFilteredSolicitations(solicitations);
        } else {
            const filteredData = solicitations.filter((e) => 
                e.post.title.toLowerCase().includes(search.toLowerCase())
            );

            setFilteredSolicitations(filteredData);
        }
    }, [solicitations, search]);

    async function fetchSolicitations() {
        if (!industry) return;

        try {
            const data = await getAllSolicitations(industry.cnpj);

            setSolicitations(data);
            setFilteredSolicitations(data);
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível carregar as solicitações"
            });
        }
    }

    if (!industry) return null;

    return (
        <>
            <section>
                <div className={styles.actions}>
                <h1 className={styles.solicitationsTitle}>Solicitações</h1>

                    <TextInput
                        placeholder="Pesquisar..."
                        size="xg"
                        value={search}
                        onChange={setSearch}
                    />
                </div>

                <LoadSolicitations
                    solicitations={filteredSolicitations}
                    industryId={industry.id}
                    onUpdateSolicitations={fetchSolicitations}
                />
            </section>

            <Snackbar
                status={snackbar.status}
                title={snackbar.title}
                subtitle={snackbar.subtitle}
                show={snackbar.show}
                onClose={() => setSnackbar({ ...snackbar, show: false })}
            />
        </>
    );
}

export default Solicitations;