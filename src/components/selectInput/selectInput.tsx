import { useState, useRef, useEffect } from "react";
import styles from "./selectInput.module.css";

interface Option {
    value: number | string;
    label: string;
}

interface SelectInputProps {
    options: Option[];
    placeholder: string;
    value?: number | string;
    onChange?: (value: number | string) => void;
    size?: "sm" | "md" | "lg" | "xg";
    variant?: "default" | "underline";
    readonly?: boolean;
}

function SelectInput({
    options,
    placeholder,
    value,
    onChange,
    size,
    variant = "default",
    readonly = false
}: SelectInputProps) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const selectedLabel = options.find(o => o.value === value)?.label;

    return (
        <div
            className={`${styles.container} ${styles[variant]} ${size ? styles[size] : ""}`}
            ref={ref}
        >
            <div
                className={styles.selected}
                onClick={() => !readonly && setIsOpen(!isOpen)}
            >
                {selectedLabel || <span className={styles.placeholder}>{placeholder}</span>}
                <span className={`${styles.arrow} ${isOpen ? styles.open : ""}`}>▾</span>
            </div>
            {isOpen && !readonly && (
                <ul className={styles.options}>
                    {options.map(option => (
                        <li
                            key={option.value}
                            className={styles.option}
                            onClick={() => {
                                onChange?.(option.value);
                                setIsOpen(false);
                            }}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default SelectInput;
