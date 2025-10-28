import React, { useEffect, useState } from "react";
import Button from "../../../../components/button/button";
import TextInput from "../../../../components/textInput/textInput";
import TextInputMultiline from "../../../../components/textInputMultiline/textInputMultiline";
import styles from './formPage2.module.css';
import ImageInput from "../../../../components/imageInput/imageInput";
import { CreateIndustry } from "../../../../interfaces/models";

interface FormPage2Props {
    onPreviousPage: (fields: Partial<CreateIndustry>) => void;
    fields?: Partial<CreateIndustry> | null;
    onSubmit: (fields: Partial<CreateIndustry>, image: File) => void;
}

function FormPage2({
    onPreviousPage,
    fields = null,
    onSubmit
}: FormPage2Props) {
    const [image, setImage] = useState<File | null>(null);
    const [description, setDescription] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    useEffect(() => {
        setDescription(fields?.description || "");
        setPassword(fields?.password || "");
    }, []);

    const getFields = (): Partial<CreateIndustry> => ({
        description,
        password
    });

    function handlePrevious() {
        onPreviousPage(getFields());
    }

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (password !== confirmPassword || password === "") {
            console.log("Confirme sua senha");
            return;
        }

        if (!image) {
            console.log("A imagem é obrigatória")
            return;
        }
        
        onSubmit(getFields(), image);
    }

    return (
        <form
            className={styles.form}
            onSubmit={handleSubmit}
        >
            <ImageInput
                onChange={(file) => setImage(file)}
                value={image}
            />
            <TextInputMultiline
                placeholder="Descrição da Indústria"
                value={description}
                onChange={setDescription}
                size="lg"
            />
            <TextInput
                placeholder="Senha"
                value={password}
                onChange={setPassword}
                size="lg"
                type="password"
            />
            <TextInput
                placeholder="Confirmar Senha"
                value={confirmPassword}
                onChange={setConfirmPassword}
                size="lg"
                type="password"
            />

            <div className={styles.actions}>
                <Button
                    label="Voltar"
                    variant="error"
                    type="button"
                    onClick={handlePrevious}
                />
                <Button
                    label="Enviar"
                    type="submit"
                />
            </div>
        </form>
    );
}

export default FormPage2;