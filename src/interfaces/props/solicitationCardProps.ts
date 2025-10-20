import { Solicitation } from "../models";

export interface SolicitationCardProps {
    solicitation: Solicitation;
    onClick: () => void;
    onAccept: () => void;
    onRefuse: () => void;
};