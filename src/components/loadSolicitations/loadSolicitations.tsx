import { useState } from "react";
import { Solicitation, Solicitations } from "../../interfaces/models";
import { solicitationMock } from "../../mocks";
import Button from "../button/button";
import SolicitationCard from "../solicitationCard/solicitationCard";
import styles from "./loadSolicitations.module.css";
import SolicitationDetails from "../solicitationDetails/solicitationDetails";
import Modal from "../modal/modal";

function LoadSolicitations({solicitations}: Solicitations) {
    const [limit, setLimit] = useState(solicitations.length > 10 ? 10 : solicitations.length);

    const [detailsData, setDetailsData] = useState<Solicitation>(solicitationMock);
    const [isDetailsOpen, setDetailsOpen] = useState(false);

    function setDetails(product: Solicitation) {
        setDetailsData(product);
        setDetailsOpen(true);
    };

    const [acceptModalOpen, setAcceptModalOpen] = useState(false);
    const [refuseModalOpen, setRefuseModalOpen] = useState(false);

    return (
        <>
            <section className={styles.content}>
                <div className={styles.solicitations}>
                    {solicitations.slice(0, limit).map((s) => {
                        return (
                            <SolicitationCard
                                solicitation={s}
                                onClick={() => {setDetails(s)}}
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