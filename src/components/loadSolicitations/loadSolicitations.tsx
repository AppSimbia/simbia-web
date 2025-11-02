import { useEffect, useState } from "react";
import { acceptPostSolicitation, refusePostSolicitation } from "../../api/services/solicitationService";
import { getEmployees } from "../../firebase/services/employeesService";
import { Employee, Solicitation } from "../../interfaces/models";
import { solicitationMock } from "../../mocks";
import Button from "../button/button";
import EmployeeSelect from "../employeeSelect/employeeSelect";
import EmptyListFeedback from "../emptyListFeedback/emptyListFeedback";
import Loading from "../loading/loading";
import Modal from "../modal/modal";
import Snackbar, { SnackbarProps } from "../snackbar/snackbar";
import SolicitationCard from "../solicitationCard/solicitationCard";
import SolicitationDetails from "../solicitationDetails/solicitationDetails";
import styles from "./loadSolicitations.module.css";
import { acceptMatchSolicitation, refuseMatchSolicitation } from "../../mongo/services/solicitationService";

export interface LoadSolicitationsProps {
    solicitations: Solicitation[] | null;
    industryId: number;
}

function LoadSolicitations({
    solicitations,
    industryId
}: LoadSolicitationsProps) {
    const [limit, setLimit] = useState(10);

    const [loading, setLoading] = useState(false);

    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    const [employees, setEmployees] = useState<Employee[] | undefined>(undefined);

    const [detailsData, setDetailsData] = useState<Solicitation>(solicitationMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    const [acceptModalOpen, setAcceptModalOpen] = useState(false);
    const [selectEmployeeModalOpen, setSelectEmployeeModalOpen] = useState(false);
    const [refuseModalOpen, setRefuseModalOpen] = useState(false);

    const [solicitationPostId, setSolicitationPostId] = useState(0);
    const [solicitationMatchId, setSolicitationMatchId] = useState("");
    
    useEffect(() => {
        fetchEmployees();
    }, [industryId]);

    async function fetchEmployees() {
        try {
            const response = await getEmployees(industryId);
            setEmployees(response);
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível carregar as solicitações"
            });
        }
    }
    
    function openDetails(solicitation: Solicitation) {
        setDetailsData(solicitation);
        setSolicitationPostId(solicitation.post.idPost);
        setSolicitationMatchId(solicitation.solicitationId || "");
        setDetailsOpen(true);
    };

    function handleAcceptSolicitation() {
        if (solicitationMatchId) {
            setSelectEmployeeModalOpen(true);
        } else {
            setAcceptModalOpen(true);
        }
    }

    async function acceptPost() {
        setLoading(true);

        try {
            await acceptPostSolicitation(solicitationPostId);
            
            setSnackbar({
                show: true,
                status: 'success',
                title: "Sucesso!",
                subtitle: "Solicitação aprovada"
            });
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível aceitar a solicitação"
            });
        } finally {
            setAcceptModalOpen(false);
            setDetailsOpen(false);
            setLoading(false);
        }
    }

    async function refusePost() {
        setLoading(true);

        try {
            await refusePostSolicitation(solicitationPostId);
            
            setSnackbar({
                show: true,
                status: 'success',
                title: "Sucesso!",
                subtitle: "Solicitação recusada"
            });
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível recusar a solicitação"
            });
        } finally {
            setRefuseModalOpen(false);
            setDetailsOpen(false);
            setLoading(false);
        }
    }

    async function acceptMatch(uidEmployee: string) {
        setLoading(true);

        try {
            await acceptMatchSolicitation(solicitationMatchId, uidEmployee);
            
            setSnackbar({
                show: true,
                status: 'success',
                title: "Sucesso!",
                subtitle: "Solicitação aprovada"
            });
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível aceitar a solicitação"
            });
        } finally {
            setSelectEmployeeModalOpen(false);
            setDetailsOpen(false);
            setLoading(false);
        }
    }

    async function handleSelectEmployee(uidEmployee: string) {        
        setSelectEmployeeModalOpen(false);
        setDetailsOpen(false);
        await acceptMatch(uidEmployee);
    }
    
    async function refuseMatch() {
        setLoading(true);

        try {
            await refuseMatchSolicitation(solicitationMatchId);
            
            setSnackbar({
                show: true,
                status: 'success',
                title: "Sucesso!",
                subtitle: "Solicitação recusada"
            });
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível recusar a solicitação"
            });
        } finally {
            setRefuseModalOpen(false);
            setDetailsOpen(false);
            setLoading(false);
        }
    }

    function handleRefuseSolicitation() {
        if (solicitationMatchId) {
            refuseMatch();
        } else {
            refusePost();
        }
    }

    if (!solicitations) return <Loading isLoading/>

    if (solicitations.length === 0) return <EmptyListFeedback message="Nenhuma solicitação foi encontrada"/>

    return (
        <>
            <section className={styles.content}>
                <div className={styles.solicitations}>
                    {solicitations.slice(0, limit).map((s, i) => {
                        return (
                            <SolicitationCard
                                key={i}
                                solicitation={s}
                                onClick={() => {openDetails(s)}}
                                onAccept={() => {setAcceptModalOpen(true)}}
                                onRefuse={() => {setRefuseModalOpen(true)}}
                            />
                        )
                    })}
                </div>
                
                {solicitations.length > limit &&
                    <Button label="Carregar Mais" size="lg" onClick={() => {setLimit(limit + 10)}}/>
                }
            </section>

            <Loading
                fullScreen
                isLoading={loading}
            />

            <Snackbar
                status={snackbar.status}
                title={snackbar.title}
                subtitle={snackbar.subtitle}
                show={snackbar.show}
                onClose={() => setSnackbar({ ...snackbar, show: false })}
            />

            <SolicitationDetails
                solicitation={detailsData}
                isOpen={isDetailsOpen}
                onAccept={handleAcceptSolicitation}
                onRefuse={() => {setRefuseModalOpen(true)}}
                onClose={() => {setDetailsOpen(false)}}
            />

            <Modal
                title="Aceitar Solictitação"
                subtitle={`Deseja aceitar a solicitação?`}
                isOpen={acceptModalOpen}
                onClose={() => {setAcceptModalOpen(false)}}
                actions={[
                    {
                        label: 'Aceitar',
                        onClick: acceptPost
                    },
                    {
                        label: 'Cancelar',
                        variant: 'error',
                        onClick: () => {setAcceptModalOpen(false)}
                    }
                ]}
            />

            <Modal
                title="Recusar Solictitação"
                subtitle={`Deseja recusar a solicitação?`}
                isOpen={refuseModalOpen}
                onClose={() => {setRefuseModalOpen(false)}}
                actions={[
                    {
                        label: 'Cancelar',
                        onClick: () => {setRefuseModalOpen(false)}
                    },
                    {
                        label: 'Recusar',
                        variant: 'error',
                        onClick: handleRefuseSolicitation
                    }
                ]}
            />

            {employees &&
                <EmployeeSelect
                    employees={employees}
                    isOpen={selectEmployeeModalOpen}
                    onClose={() => {setSelectEmployeeModalOpen(false)}}
                    onSelectEmployee={handleSelectEmployee}
                />
            }
        </>
    );
}

export default LoadSolicitations;