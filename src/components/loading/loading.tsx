import styles from './loading.module.css';

export interface LoadingProps {
    isLoading: boolean
    fullScreen?: boolean;
}

function Loading({
    isLoading,
    fullScreen = false
}: LoadingProps) {
    return (
        <section
            className={`
                ${styles.overlay}
                ${isLoading ? "" : styles.hide}
                ${fullScreen ? styles.fullScreen : ""}
            `}>
            <div className={styles.content}>
                <span className={styles.loading}></span>
                <p className={styles.loadingText}>Carregando...</p>
            </div>
        </section>
    );
}

export default Loading;