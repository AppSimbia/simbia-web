import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailClosedIcon from '../../assets/icons/email-closed.svg';
import hamburguerIcon from '../../assets/icons/hamburguer.svg';
import helpChatIcon from '../../assets/icons/help-chat.svg';
import userCircleIcon from '../../assets/icons/user-circle.svg';
import userGroupIcon from '../../assets/icons/user-group.svg';
import { useAuth } from '../../contexts/authContext';
import styles from './header.module.css';

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
                            src={industry.image}
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
                            <img src={userCircleIcon} className={styles.navigationIcon}/>
                            <h3>Perfil</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/employees");
                            setSidebarOpen(false);
                        }}>
                            <img src={userGroupIcon} className={styles.navigationIcon}/>
                            <h3>Funcionários</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/solicitations");
                            setSidebarOpen(false);
                        }}>
                            <img src={helpChatIcon} className={styles.navigationIcon}/>
                            <h3>Solicitações</h3>
                        </li>
                        <li className={styles.navigationItem} onClick={() => {
                            navigate("/feed");
                            setSidebarOpen(false);
                        }}>
                            <img src={emailClosedIcon} className={styles.navigationIcon}/>
                            <h3>Feed</h3>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
}

export default Header;