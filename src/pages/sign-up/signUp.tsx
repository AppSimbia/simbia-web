import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TextInput from '../../components/textInput/textInput';
import styles from './signUp.module.css';

function SignUp() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Teste");
    };

    return (
        <>
            <section className={styles.content}>
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

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.formTitle}>CADASTRO</h1>
                        <img src="simbia-logo.svg" alt="Simbia" className={styles.logo}/>

                        <TextInput placeholder='Nome da Indústria' size='lg' variant='underline' />
                        <TextInput placeholder='E-mail' size='lg' variant='underline' />
                        <TextInput placeholder='CNPJ' size='lg' variant='underline' />
                        <TextInput placeholder='Categoria da Indústria' size='lg' variant='underline' />
                        <TextInput placeholder='Senha' size='lg' variant='underline' />
                        <TextInput placeholder='Confirmar Senha' size='lg' variant='underline' />

                        <Button label='Cadastrar' size='lg' type='submit'/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignUp;