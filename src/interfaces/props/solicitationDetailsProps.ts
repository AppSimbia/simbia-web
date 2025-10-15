import { Solicitation } from "../models";

export interface SolicitationDetailsProps {
    solicitation: Solicitation;
    isOpen: boolean;
    onAccept: () => void;
    onRefuse: () => void;
    onClose: () => void;
};