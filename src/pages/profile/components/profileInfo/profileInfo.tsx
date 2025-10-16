import TextInput from "../../../../components/textInput/textInput";
import TextInputMultiline from "../../../../components/textInputMultiline/textInputMultiline";
import styles from "./profileInfo.module.css";

function ProfileInfo() {
    return (
        <section className={styles.content}>
            <div className={styles.infoField}>
                <span>CNPJ:</span>
                <TextInput
                    placeholder="CNPJ"
                    value={"algum cnpj"}
                    readonly
                />
            </div>

            <div className={styles.infoField}>
                <span>E-mail:</span>
                <TextInput
                    placeholder="E-mail"
                    value="raizen@raizen.com"
                />
            </div>

            <div className={styles.infoField}>
                <span>CEP:</span>
                <TextInput
                    placeholder="CEP"
                    value={"06038-080"}
                    readonly
                />
            </div>

            <div className={styles.infoField}>
                <span>Estado:</span>
                <TextInput
                    placeholder="Estado"
                    value={"São Paulo"}
                    readonly
                />
            </div>

            <div className={styles.infoField}>
                <span>Cidade:</span>
                <TextInput
                    placeholder="Cidade"
                    value={"São Paulo"}
                    readonly
                />
            </div>

            <div className={styles.infoField}>
                <span>Descrição:</span>
                <TextInputMultiline
                    placeholder='Descrição'
                    value={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempor dictum dictum. Etiam sit amet ornare orci. Curabitur vulputate facilisis neque vitae facilisis. Nam pharetra, massa in elementum pellentesque, nisl massa pharetra eros, ultrices ullamcorper diam risus in leo. Praesent sed nunc vitae lorem feugiat ultricies. Vivamus at nisi lacus. Donec convallis dui non felis lacinia, vehicula pulvinar ipsum tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
                    readonly
                />
            </div>
        </section>
    );
}

export default ProfileInfo;