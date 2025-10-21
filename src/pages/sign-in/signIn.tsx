import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/button';
import TextInput from '../../components/textInput/textInput';
import styles from './signIn.module.css';
import React, { useState } from 'react';
import { Industry, LoginData } from '../../interfaces/models';
import { signIn } from '../../api/services/authService';

function SignIn() {
    const [cnpj, setCnpj] = useState("");
    const [password, setPassword] = useState("");
    const [industry, setIndustry] = useState<Industry | null>(null);

    const navigate = useNavigate();

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        try {
            const loginData: LoginData = {
                cnpj: cnpj,
                password: password
            };

            const data = await signIn(loginData);

            if (data) {
                setIndustry(data);
                console.log(industry);
                alert("Deu certo!")
            }
        } catch(err) {
            console.error("Erro: ", err);
            alert("Erro")
        }
    }

    return (
        <>
            <section className={styles.content}>
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

                        <TextInput
                            placeholder='CNPJ'
                            size='lg'
                            variant='underline'
                            value={cnpj}
                            onChange={setCnpj}
                        />
                        <TextInput
                            placeholder='Senha'
                            size='lg'
                            variant='underline'
                            type='password'
                            value={password}
                            onChange={setPassword}
                        />

                        <Button label='Fazer Login' size='lg' type='submit'/>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignIn;