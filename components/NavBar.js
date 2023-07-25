import Link from 'next/link';
import styles from '../styles/NavBar.module.css';

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img src="/logos/AgPioneerLogoWhiteLong.png" alt="Company Name" className={styles.logo}/>
            <nav className={styles.navLinks}>
                <Link href="/"><span className={styles.navLink}>Home</span></Link>
                <Link href="/market"><span className={styles.navLink}>Market Prediction</span></Link>
                <Link href="/weather"><span className={styles.navLink}>Weather Forecast</span></Link>
            </nav>
        </div>
    );
}

export default Navbar;
