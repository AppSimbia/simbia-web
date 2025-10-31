import Button from "../../../../components/button/button";
import TextInput from "../../../../components/textInput/textInput";
import TextInputMultiline from "../../../../components/textInputMultiline/textInputMultiline";
import { Industry } from "../../../../interfaces/models/industry";
import styles from "./profileInfo.module.css";

export interface ProfileInfoProps {
    industry: Industry;
    selfProfile?: boolean;
}

function ProfileInfo({
    industry,
    selfProfile = false
}: ProfileInfoProps) {
    return (
        <section className={styles.content}>
            <div className={styles.industryData}>
                <div className={styles.infoField}>
                    <span>CNPJ:</span>
                    <TextInput
                        placeholder="CNPJ"
                        value={industry.cnpj}
                        readonly
                    />
                </div>
                <div className={styles.infoField}>
                    <span>E-mail:</span>
                    <TextInput
                        placeholder="E-mail"
                        value={industry.email}
                    />
                </div>
                <div className={styles.infoField}>
                    <span>CEP:</span>
                    <TextInput
                        placeholder="CEP"
                        value={industry.cep}
                        readonly
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
                    value={industry.description}
                    readonly
                    rows={6}
                />
            </div>

            {selfProfile === true &&
                <Button
                    label="Salvar Alterações"
                    size="xg"
                    onClick={() => {console.log(selfProfile)}}
                />
            }
        </section>
    );
}

export default ProfileInfo;