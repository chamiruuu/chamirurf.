import styles from '../styles/Home.module.css';
import Shader from '../components/Shader';
import Cursor from '../components/cursor';
import GitHubIcon from '@mui/icons-material/GitHub';

const Home = () => {
    return (
        <div className={styles.container}>
            <Shader />
            <Cursor />
            <div className={styles.social}>
                <a href="https://github.com/chamiruuu/" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
                    <GitHubIcon className={styles.github} sx={{ fontSize: 28 }} />
                </a>
            </div>
            <h1 className={styles.centerText}>chamiru.rf</h1>
            <p className={styles.secondaryText}>Site’s still in beta</p>
        </div>
    );
};

export default Home;