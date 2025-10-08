import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TextInput from '../../components/textInput/textInput';
import styles from './signIn.module.css';

function SignIn() {
    const navigate = useNavigate();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Teste");
    };

    return (
        <>
            <section>
                <div className={styles.container}>
                    <div className={styles.contentLeft}>
                        <h1 className={styles.leftTitle}>Bem-Vindo de Volta ao Simbia!</h1>

                        <h3 className={styles.leftSubtitle}>Digite seu CNPJ/Usuário e sua senha para entrar</h3>

                        <div className={styles.signUpShortcut}>
                            <span className={styles.buttonLabel}>Não possui uma conta?</span>
                            <Button
                                label='Fazer Cadastro'
                                variant='outlined-neutral'
                                size='sm'
                                onClick={() => {navigate("/sign-up")}}
                            />
                        </div>
                    </div>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <h1 className={styles.rightTitle}>LOGIN</h1>
                        <img src="simbia-logo.svg" alt="Simbia" className={styles.logo}/>

                        <TextInput placeholder='CNPJ' size='lg' variant='underline' />
                        <TextInput placeholder='Senha' size='lg' variant='underline' />

                        <Button label='Fazer Login' size='lg' type='submit'/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignIn;