import Link from 'next/link'; // <-- Import the Link component from Next.js
import Navbar from '../components/NavBar';
import styles from '../styles/index.module.css';

export default function Home() {
    return (
        <div className={styles.mainContent}>
            <Navbar className={styles.navbar} />

            {/* Hero Section */}
            <section className={styles.hero}>
                <h1>Welcome to the Farm Prediction App</h1>
                <p>Empowering farmers with cutting-edge predictions.</p>
            </section>

            {/* Market Price Prediction Section */}
            <section className={styles.marketPrediction}>
                <img src="/path_to_image.jpg" alt="Market Prediction" />
                <h2>
                    <Link href="/market">Market Price Prediction</Link>
                </h2>
                <p>Get accurate predictions for agricultural products based on historical data and market trends.</p>
            </section>

            {/* Weather Forecasting Section */}
            <section className={styles.weatherForecasting}>
                <img src="/path_to_another_image.jpg" alt="Weather Forecasting" />
                <h2>
                    <Link href="/weather">Weather Forecasting for Farmers</Link>
                </h2>
                <p>Access precise local weather conditions to plan your planting and harvesting activities.</p>
            </section>

            {/* Testimonials Section (Optional) */}
            <section className={styles.testimonials}>
                <h2>What Farmers Say About Us</h2>
                {/* ... Testimonial content ... */}
            </section>

            {/* Footer */}
            <footer className={styles.footer}>
                {/* ... Footer content ... */}
            </footer>
        </div>
    );
}
