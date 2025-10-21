import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import hamburguerIcon from '../../assets/icons/hamburguer.svg';
import { HeaderProps } from '../../interfaces/props';
import styles from './header.module.css';

function Header({
    industryName,
    logo,
    children
}: HeaderProps) {
    const navigate = useNavigate();

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.left}>
                    <img
                        src={hamburguerIcon}
                        alt="Ícone de hambúrguer"
                        className={styles.hamburguer}
                        onClick={() => setSidebarOpen(!isSidebarOpen)}
                    />
                    <h1 className={styles.headerName}>Olá, {industryName}</h1>
                </div>

                <div className={styles.right}>
                    <img src={logo} alt="Logo da empresa" className={styles.headerLogo} onClick={() => {navigate("/profile")}}/>
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