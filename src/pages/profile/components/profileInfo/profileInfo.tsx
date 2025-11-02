import { useEffect, useState } from "react";
import Button from "../../../../components/button/button";
import TextInput from "../../../../components/textInput/textInput";
import TextInputMultiline from "../../../../components/textInputMultiline/textInputMultiline";
import { Industry } from "../../../../interfaces/models/industry";
import styles from "./profileInfo.module.css";
import Snackbar, { SnackbarProps } from "../../../../components/snackbar/snackbar";
import Loading from "../../../../components/loading/loading";
import { updateIndustry } from "../../../../api/services/industryService";

export interface ProfileInfoProps {
    industry: Industry;
    selfProfile?: boolean;
}

function ProfileInfo({
    industry,
    selfProfile = false
}: ProfileInfoProps) {
    const [cnpj, setCnpj] = useState("");
    const [email, setEmail] = useState("");
    const [cep, setCep] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    const getFields = () => ({
        cnpj,
        email,
        cep,
        description
    })

    useEffect(() => {
        setCnpj(industry.cnpj);
        setEmail(industry.email);
        setCep(industry.cep);
        setDescription(industry.description);
    }, [industry]);

    async function handleUpdateIndustry(fields: Partial<Industry>) {
        try {
            const response = await updateIndustry(industry.cnpj, fields);

            if (response) {
                setSnackbar({
                    show: true,
                    status: 'success',
                    title: "Sucesso!",
                    subtitle: "Campos atualizados com sucesso"
                });
            }
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível atualizar os campos"
            });
        }
    }

    return (
        <>
            <section className={styles.content}>
                <div className={styles.industryData}>
                    <div className={styles.infoField}>
                        <span>CNPJ:</span>
                        <TextInput
                            placeholder="CNPJ"
                            value={cnpj}
                            onChange={setCnpj}
                            readonly={!selfProfile}
                        />
                    </div>
                    <div className={styles.infoField}>
                        <span>E-mail:</span>
                        <TextInput
                            placeholder="E-mail"
                            value={email}
                            onChange={setEmail}
                            readonly={!selfProfile}
                        />
                    </div>
                    <div className={styles.infoField}>
                        <span>CEP:</span>
                        <TextInput
                            placeholder="CEP"
                            value={cep}
                            onChange={setCep}
                            readonly={!selfProfile}
                        />
                    </div>
                    <div className={styles.infoField}>
                        <span>Estado:</span>
                        <TextInput
                            placeholder="Estado"
                            value={industry.state}
                            readonly
                        />
                    </div>
                    <div className={styles.infoField}>
                        <span>Cidade:</span>
                        <TextInput
                            placeholder="Cidade"
                            value={industry.city}
                            readonly
                        />
                    </div>
                </div>

                <div className={styles.infoField}>
                    <span>Descrição:</span>
                    <TextInputMultiline
                        placeholder='Descrição'
                        value={description}
                        onChange={setDescription}
                        readonly={!selfProfile}
                        rows={6}
                    />
                </div>

                {selfProfile === true &&
                    <Button
                        label="Salvar Alterações"
                        size="xg"
                        onClick={() => {console.log(getFields())}}
                    />
                }
            </section>

            <Loading isLoading={loading} fullScreen/>

            <Snackbar
                status={snackbar.status}
                title={snackbar.title}
                subtitle={snackbar.subtitle}
                show={snackbar.show}
                onClose={() => setSnackbar({ ...snackbar, show: false })}
            />
        </>
    );
}

export default ProfileInfo;