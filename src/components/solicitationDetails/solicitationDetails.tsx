import { useEffect, useState } from "react";
import { Solicitation } from "../../interfaces/models";
import Tag from "../tag/tag";
import TextInputMultiline from "../textInputMultiline/textInputMultiline";
import styles from "./solicitationDetails.module.css";
import Button from "../button/button";

interface SolicitationDetailsProps {
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
                        <img src={solicitation.product.imgUrl} alt={solicitation.product.name} className={styles.productImg} />
                        <div className={styles.tags}>
                            <Tag label={solicitation.product.category}/>
                            <Tag label={solicitation.product.classification} />
                        </div>
                    </div>

                    <div className={styles.productDetails}>
                        <div className={styles.title}>
                            <h3>Solicitação de {solicitation.solicitationType} de {solicitation.employeeName || solicitation.industryName}</h3>
                            <h1 className={styles.name}>{solicitation.product.name}</h1>
                        </div>

                        {solicitation.paymentInfo &&
                            <div className={styles.paymentInfo}>
                                <div className={styles.paymentField}>
                                    <h3>Preço acordado: R${solicitation.paymentInfo.value}</h3>
                                    <h3>Quantidade acordada: {solicitation.paymentInfo.quantity}{solicitation.product.measureUnit}</h3>
                                </div>
                            </div>
                            ||
                            <div className={styles.productInfo}>
                                <h3>Quantidade disponível: {solicitation.product.quantity}{solicitation.product.measureUnit}</h3>
                                <h3>Preço por {solicitation.product.measureUnit}: R${solicitation.product.price.toFixed(2)}</h3>
                            </div>
                        }

                        <div className={styles.description}>
                            <span>Descrição:</span>
                            <TextInputMultiline placeholder='Descrição' value={solicitation.product.description} rows={8} readonly/>
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