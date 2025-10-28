import { useEffect, useState } from "react";
import Button from "../button/button";
import Tag from "../tag/tag";
import TextInputMultiline from "../textInputMultiline/textInputMultiline";
import styles from "./solicitationDetails.module.css";
import { Solicitation } from "../../interfaces/models";

export interface SolicitationDetailsProps {
    solicitation: Solicitation;
    isOpen: boolean;
    onAccept: () => void;
    onRefuse: () => void;
    onClose: () => void;
};

function SolicitationDetails({
    solicitation,
    isOpen = false,
    onAccept,
    onRefuse,
    onClose
}: SolicitationDetailsProps) {
    const [open, setOpen] = useState(isOpen);
    
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div className={styles.containerLeft}>
                        <img src={solicitation.post.image} alt={solicitation.post.title} className={styles.postImg} />
                        <div className={styles.tags}>
                            <Tag label={solicitation.post.productCategory.categoryName}/>
                            <Tag label={solicitation.post.classification} />
                        </div>
                    </div>

                    <div className={styles.postDetails}>
                        <div className={styles.title}>
                            <h3>Solicitação de {solicitation.solicitationType} de {solicitation.employeeName || solicitation.industryName}</h3>
                            <h1 className={styles.name}>{solicitation.post.title}</h1>
                        </div>

                        {solicitation.paymentInfo &&
                            <div className={styles.paymentInfo}>
                                <div className={styles.paymentField}>
                                    <h3>Preço acordado: R${solicitation.paymentInfo.value}</h3>
                                    <h3>Quantidade acordada: {solicitation.paymentInfo.quantity}{solicitation.post.measureUnit}</h3>
                                </div>
                            </div>
                            ||
                            <div className={styles.postInfo}>
                                <h3>Quantidade disponível: {solicitation.post.quantity}{solicitation.post.measureUnit}</h3>
                                <h3>Preço por {solicitation.post.measureUnit}: R${solicitation.post.price.toFixed(2)}</h3>
                            </div>
                        }

                        <div className={styles.description}>
                            <span>Descrição:</span>
                            <TextInputMultiline placeholder='Descrição' value={solicitation.post.description} rows={8} readonly/>
                        </div>

                        <div className={styles.actions}>
                            <Button label='Aceitar' onClick={onAccept}/>
                            <Button label='Recusar' variant="error" onClick={onRefuse}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SolicitationDetails;