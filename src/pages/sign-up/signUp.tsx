import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../api/services/authService';
import { getIndustryTypes } from '../../api/services/industryTypeService';
import { getLocationData } from '../../apiIntegration/services/cepService';
import Button from '../../components/button/button';
import { useAuth } from '../../contexts/authContext';
import { saveIndustryImage } from '../../firebase/services/industryService';
import { CreateIndustry, IndustryType } from '../../interfaces/models';
import { LocationData } from '../../interfaces/models/locationData';
import FormPage1 from './components/formPage1/formPage1';
import FormPage2 from './components/formPage2/formPage2';
import styles from './signUp.module.css';
import Loading from '../../components/loading/loading';
import { SnackbarProps } from '../../components/snackbar/snackBar';

function SignUp() {
    const { logout } = useAuth();
    const [industryTypes, setIndustryTypes] = useState<IndustryType[] | null>(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [snackbar, setSnackbar] = useState<SnackbarProps>({
        show: false,
        status: 'success',
        title: '',
        subtitle: ''
    });

    const navigate = useNavigate();

    const form = useRef<CreateIndustry>({
        idIndustryType: 0,
        cnpj: "",
        password: "",
        industryName: "",
        description: "",
        contactMail: "",
        cep: "",
        city: "",
        state: "",
        latitude: 0,
        longitude: 0,
        image: ""
    });

    useEffect(() => {
        logout();
        getIndustryTypes().then(setIndustryTypes);
    }, []);

    function nextPage(fields: Partial<CreateIndustry>) {
        form.current = { ...form.current, ...fields };
        setPage(2);
    }
    
    function previousPage(fields: Partial<CreateIndustry>) {
        form.current = { ...form.current, ...fields };
        setPage(1);
    }

    async function handleSignIn(fields: Partial<CreateIndustry>, imageFile: File) {
        setLoading(true);

        try {
            const locationData: LocationData = await getLocationData(form.current.cep);
            const image: string = await saveIndustryImage(imageFile);

            form.current = { ...form.current, ...fields, ...locationData, image };

            const loginData = await signUp(form.current);

            if (loginData) navigate("/sign-in");
        } catch (err) {
            setSnackbar({
                show: true,
                status: 'error',
                title: "Erro",
                subtitle: "Não foi possível fazer o cadastro"
            });
        }

        setLoading(false);
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
                                fields={form.current}
                                onNextPage={(fields) => {nextPage(fields)}}
                            />
                            :
                            <FormPage2
                                onPreviousPage={(fields) => {previousPage(fields)}}
                                fields={form.current}
                                onSubmit={(fields, image) => {handleSignIn(fields, image)}}
                            />
                        }
                    </div>
                </div>
            </section>

            <Loading isLoading={loading} fullScreen/>
        </>
    );
}

export default SignUp;