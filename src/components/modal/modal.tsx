import { useEffect, useState } from "react";
import Button, { ButtonProps } from "../button/button";
import styles from "./modal.module.css";
import TextInput, { TextInputProps } from "../textInput/textInput";

interface ModalProps {
    title: string;
    subtitle: string;
    isOpen: boolean;
    onClose?: () => void;
    inputs?: TextInputProps[];
    actions?: ButtonProps[];
};

function Modal({
    title,
    subtitle,
    isOpen,
    onClose,
    inputs = [],
    actions = []
}: ModalProps) {
    const [open, setOpen] = useState(isOpen);
    
    useEffect(() => {
        setOpen(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${styles.modalOverlay} ${open ? styles.isOpen : ""}`} onClick={onClose}>
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    <div>
                        <h1>{title}</h1>
                        <h3>{subtitle}</h3>
                    </div>

                    {inputs.length > 0 && (
                        <div className={styles.inputs}>
                            {inputs.map((input, index) => (
                                <TextInput key={index} {...input}/>
                            ))}
                        </div>
                    )}

                    {actions.length > 0 && (
                        <div className={styles.actions}>
                        {actions.slice(0, 2).map((action, index) => (
                            <Button key={index} {...action} />
                        ))}
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}

export default Modal;