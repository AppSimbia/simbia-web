import TextInput from "../../../../components/textInput/textInput";
import TextInputMultiline from "../../../../components/textInputMultiline/textInputMultiline";
import { Industry } from "../../../../interfaces/models/industry";
import styles from "./profileInfo.module.css";

function ProfileInfo(industry: Industry) {
    return (
        <section className={styles.content}>
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

            <div className={styles.infoField}>
                <span>Descrição:</span>
                <TextInputMultiline
                    placeholder='Descrição'
                    value={industry.description}
                    readonly
                />
            </div>
        </section>
    );
}

export default ProfileInfo;