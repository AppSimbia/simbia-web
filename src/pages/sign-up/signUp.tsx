import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TextInput from '../../components/textInput/textInput';
import styles from './signUp.module.css';

function SignUp() {
    const navigate = useNavigate();

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.contentLeft}>
                        <h1 className={styles.leftTitle}>Bem-Vindo ao Simbia!</h1>

                        <h3 className={styles.leftSubtitle}>Crie já uma conta para sua indústria aqui!</h3>

                        <div className={styles.signInShortcut}>
                            <span className={styles.buttonLabel}>Já possui uma conta?</span>
                            <Button
                                label='Fazer Login'
                                variant='outlined-neutral'
                                size='sm'
                                onClick={() => {navigate("/sign-in")}}
                            />
                        </div>
                    </div>

                    <div className={styles.contentRight}>
                        <img src="simbia-logo.svg" alt="Simbia" className={styles.logo}/>

                        <h1 className={styles.rightTitle}>CADASTRO</h1>

                        <TextInput placeholder='Nome da Indústria' size='lg' variant='underline' />
                        <TextInput placeholder='E-mail' size='lg' variant='underline' />
                        <TextInput placeholder='CNPJ' size='lg' variant='underline' />
                        <TextInput placeholder='Categoria da Indústria' size='lg' variant='underline' />
                        <TextInput placeholder='Senha' size='lg' variant='underline' />
                        <TextInput placeholder='Confirmar Senha' size='lg' variant='underline' />
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;