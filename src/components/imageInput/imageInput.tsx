import React, { useEffect, useRef, useState } from 'react';
import defaultProfile from "../../assets/icons/default-profile.svg";
import styles from './imageInput.module.css';

interface ImageInputProps {
    onChange: (file: File | null) => void;
    value?: File | null;
};

function ImageInput({
    onChange,
    value
}: ImageInputProps) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (value) {
          const url = URL.createObjectURL(value);
          setPreviewUrl(url);
        } else {
          setPreviewUrl(null);
        }
    }, [value]);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0] || null;
        
        if (file) {
            onChange(file);

            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        } else {
            setPreviewUrl(null);
        }
    }

    function handleClick() {
        inputRef.current?.click();
    }

    return (
        <div className={styles.container}>
            <img
                src={previewUrl || defaultProfile}
                alt="Pré-visualização"
                className={styles.preview}
                onClick={handleClick}
            />

            <span
                className={styles.text}
                onClick={handleClick}
            >
                Escolher Imagem
            </span>

            <input
                className={styles.input}
                type="file"
                accept={'image/*'}
                ref={inputRef}
                onChange={handleFileChange}
            />
        </div>
    );
}

export default ImageInput;