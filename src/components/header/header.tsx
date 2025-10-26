import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburguerIcon from '../../assets/icons/hamburguer.svg';
import styles from './header.module.css';
import { industryMock } from '../../mocks';
import { useAuth } from '../../contexts/authContext';

export interface HeaderProps {
    children: React.ReactNode;
};

function Header({
    children,
}: HeaderProps) {
    const { industry } = useAuth();
    const navigate = useNavigate();

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    {industry ?
                        <>
                            <img
                                src={hamburguerIcon}
                                alt="Ícone de hambúrguer"
                                className={styles.hamburguer}
                                onClick={() => setSidebarOpen(!isSidebarOpen)}
                            />
                            <h1 className={styles.headerText}>Olá, {industry.name}</h1>
                        </>
                        :
                        <>
                            <h1 className={styles.headerText}>Bem-Vindo!</h1>
                        </>
                    }
                </div>

                <div className={styles.right}>
                    {industry ?
                        <img
                            src={industryMock.imgUrl}
                            alt="Logo da empresa"
                            className={styles.headerLogo}
                            onClick={() => {navigate("/profile")}}
                        />
                        :
                        <img
                            src="/simbia-logo.svg"
                            alt="Simbia"
                            className={styles.headerLogoDefault}
                        />
                    }
                </div>
            </header>

            <main className={styles.router}>
                {children}
            </main>

            <section
                className={`
                    ${styles.sidebarOverlay}
                    ${isSidebarOpen ? styles.overlayOpen : ""}
                `}
                onClick={() => {setSidebarOpen(false)}}
                >
                <div
                    className={`
                        ${styles.sidebar}
                        ${isSidebarOpen ? styles.sidebarOpen : ""}
                    `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <ul className={styles.navigation}>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/profile");
                            setSidebarOpen(false);
                            }}>
                            <h3>Perfil</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/feed");
                            setSidebarOpen(false);
                            }}>
                            <h3>Postagens</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/solicitations");
                            setSidebarOpen(false);
                            }}>
                            <h3>Solicitações</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/employees");
                            setSidebarOpen(false);
                            }}>
                            <h3>Funcionários</h3>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Header;