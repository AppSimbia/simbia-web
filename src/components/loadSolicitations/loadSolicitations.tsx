import { useState } from "react";
import { Solicitation } from "../../interfaces/models";
import { solicitationMock } from "../../mocks";
import Button from "../button/button";
import Modal from "../modal/modal";
import SolicitationCard from "../solicitationCard/solicitationCard";
import SolicitationDetails from "../solicitationDetails/solicitationDetails";
import styles from "./loadSolicitations.module.css";
import Loading from "../loading/loading";
import EmptyListFeedback from "../emptyListFeedback/emptyListFeedback";

export interface LoadSolicitationsProps {
    solicitations: Solicitation[] | null;
}

function LoadSolicitations({solicitations}: LoadSolicitationsProps) {
    const [limit, setLimit] = useState(10);

    const [detailsData, setDetailsData] = useState<Solicitation>(solicitationMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function openDetails(solicitation: Solicitation) {
        setDetailsData(solicitation);
        setDetailsOpen(true);
    };

    const [acceptModalOpen, setAcceptModalOpen] = useState(false);
    const [refuseModalOpen, setRefuseModalOpen] = useState(false);

    if (!solicitations) return <Loading isLoading/>

    if (solicitations.length === 0) return <EmptyListFeedback message="Nenhuma solicitação foi encontrada"/>

    return (
        <>
            <section className={styles.content}>
                <div className={styles.solicitations}>
                    {solicitations.slice(0, limit).map((s) => {
                        return (
                            <SolicitationCard
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

            <SolicitationDetails
                solicitation={detailsData}
                isOpen={isDetailsOpen}
                onAccept={() => {setAcceptModalOpen(true)}}
                onRefuse={() => {setRefuseModalOpen(true)}}
                onClose={() => {setDetailsOpen(false)}}
            />

            <Modal
                title="Aceitar Solictitação"
                subtitle={`Deseja aceitar a solicitação de ${detailsData.solicitationType} de ${detailsData.employeeName}?`}
                isOpen={acceptModalOpen}
                onClose={() => {setAcceptModalOpen(false)}}
                actions={[
                    {
                        label: 'Aceitar'
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
                subtitle={`Deseja recusar a solicitação de ${detailsData.solicitationType} de ${detailsData.employeeName}?`}
                isOpen={refuseModalOpen}
                onClose={() => {setRefuseModalOpen(false)}}
                actions={[
                    {
                        label: 'Cancelar',
                        onClick: () => {setRefuseModalOpen(false)}
                    },
                    {
                        label: 'Recusar',
                        variant: 'error'
                    }
                ]}
            />
        </>
    );
}

export default LoadSolicitations;