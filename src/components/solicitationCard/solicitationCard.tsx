import Tag from "../tag/tag";
import styles from "./solicitationCard.module.css";
import closeIcon from "../../assets/icons/close.svg";
import CheckIcon from "../../assets/icons/check.svg";
import { SolicitationCardProps } from "../../interfaces/props/solicitationCardProps";

function SolicitationCard({
    solicitation,
    onClick,
    onAccept,
    onRefuse
}: SolicitationCardProps) {
    return (
        <>
            <div className={styles.card} onClick={onClick}>
                <h1 className={styles.employeeName}>
                    {solicitation.employeeName || solicitation.industryName}
                </h1>

                <h3 className={styles.postTitle}>{solicitation.post.title}</h3>

                <div className={styles.aaa}>
                    <Tag label={solicitation.solicitationType} onClick={(e) => e.stopPropagation()}/>

                    <div
                        className={styles.actions}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={CheckIcon}
                            alt="Confirmar"
                            onClick={onAccept}
                        />
                        <img
                            src={closeIcon}
                            alt="Cancelar"
                            onClick={onRefuse}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default SolicitationCard;