import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIndustryTypes } from '../../api/services/industryTypeService';
import Button from '../../components/button/button';
import TextInput from '../../components/textInput/textInput';
import styles from './signUp.module.css';
import SelectInput from '../../components/selectInput/selectInput';
import { IndustryType } from '../../interfaces/models';

function SignUp() {
    const [industryName, setIndustryName] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [industryType, setIndustryType] = useState(0);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [industryTypes, setIndustryTypes] = useState<IndustryType[] | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchIndustryTypes() {
            const result = await getIndustryTypes();
            setIndustryTypes(result);
        }

        fetchIndustryTypes();
    }, []);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log(industryTypes);
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
                        <TextInput
                            placeholder='Nome da Indústria'
                            size='lg'
                            variant='underline'
                            value={industryName}
                            onChange={setIndustryName}
                        />
                        <TextInput
                            placeholder='E-mail'
                            size='lg'
                            variant='underline'
                            value={email}
                            onChange={setEmail}
                        />
                        <TextInput
                            placeholder='CNPJ'
                            size='lg'
                            variant='underline'
                            value={cnpj}
                            onChange={setCnpj}
                        />
                        <SelectInput
                            placeholder='Tipo da Indústria'
                            size='lg'
                            variant='underline'
                            options={industryTypes?.map(it => ({
                                label: it.industryTypeName,
                                value: it.id
                            })) || []}
                            value={industryType}
                            onChange={(value) => {setIndustryType(Number(value))}}
                        />
                        <TextInput
                            placeholder='Senha'
                            size='lg'
                            variant='underline'
                            value={password}
                            onChange={setPassword}
                        />
                        <TextInput
                            placeholder='Confirmar Senha'
                            size='lg'
                            variant='underline'
                            value={confirmPassword}
                            onChange={setConfirmPassword}
                        />

                        <Button
                            label='Cadastrar'
                            size='lg'
                            type='submit'
                        />
                    </form>
                </div>
            </section>
        </>
    );
}

export default SignUp;