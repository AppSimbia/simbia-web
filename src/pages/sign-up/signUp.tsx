import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIndustryTypes } from '../../api/services/industryTypeService';
import Button from '../../components/button/button';
import { useAuth } from '../../contexts/authContext';
import { CreateIndustry, IndustryType } from '../../interfaces/models';
import FormPage1, { FormPage1Fields } from './components/formPage1/formPage1';
import FormPage2, { FormPage2Fields } from './components/formPage2/formPage2';
import styles from './signUp.module.css';

function SignUp() {
    const { logout } = useAuth();
    const [industry, setIndustry] = useState<CreateIndustry>();
    const [industryTypes, setIndustryTypes] = useState<IndustryType[] | null>(null);
    const [page, setPage] = useState(1);
    const [page1Fields, setPage1Fields] = useState<FormPage1Fields | null>(null);
    const [page2Fields, setPage2Fields] = useState<FormPage2Fields | null>(null);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchIndustryTypes() {
            const result = await getIndustryTypes();
            setIndustryTypes(result);
        }

        logout();
        fetchIndustryTypes();
    }, []);

    function nextPage(fields: FormPage1Fields) {
        setPage(2);
        setPage1Fields(fields);
        console.log(fields);
    }

    function previousPage(fields: FormPage2Fields) {
        setPage(1);
        setPage2Fields(fields);
        console.log(fields);
    }

    function sendForm(fields: FormPage2Fields) {
        setPage2Fields(fields);

        if (page1Fields && page2Fields && page2Fields.image) {
            const completeFormFields: CreateIndustry = {
                idIndustryType: page1Fields.idIndustryType,
                cnpj: page1Fields.cnpj,
                password: page2Fields.password,
                industryName: page1Fields.industryName,
                description: page2Fields.description,
                contactMail: page1Fields.contactMail,
                cep: page1Fields.cep,
                city: "Osasco",
                latitude: -23.55052,
                longitude: -46.633308,
                state: "São Paulo",
                image: page2Fields.image
            };

            setIndustry(completeFormFields);
            console.log("Deu: ", industry);
        };
    }

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

                    <div className={styles.contentRight}>
                        <h1 className={styles.formTitle}>CADASTRO</h1>

                        <div className={styles.navigationBalls}>
                            <div className={`
                                ${styles.navigationBall}
                                ${page === 1 ? styles.ballSelected : ""}
                            `}></div>
                            <div className={`
                                ${styles.navigationBall}
                                ${page === 2 ? styles.ballSelected : ""}
                            `}></div>
                        </div>

                        {page === 1 ?
                            <FormPage1
                                industryTypes={industryTypes}
                                fields={page1Fields}
                                onNextPage={(fields) => {nextPage(fields)}}
                            />
                            :
                            <FormPage2
                                onPreviousPage={(fields) => {previousPage(fields)}}
                                fields={page2Fields}
                                onSubmit={(fields: FormPage2Fields) => {sendForm(fields)}}
                            />
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;