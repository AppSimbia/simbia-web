import styles from './header.module.css';
import hamburguerIcon from '../../assets/icons/hamburguer.svg';

function Header({
    industryName,
    logo
}) {
    return (
        <header className={`${styles.header}`}>
            <div className={`${styles.left}`}>
                <img src={`${hamburguerIcon}`} alt="Ícone de hambúrguer" className={`${styles.hamburguer}`} />
                <span className={`${styles.industryName}`}>Olá, {industryName}</span>
            </div>

            <div className={`${styles.right}`}>
                <img src={logo} alt="Logo da empresa" className={`${styles.industryLogo}`} />
            </div>
        </header>
    );
}

export default Header;