import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/Market.module.css';
import MarketChart from '../components/MarketChart';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

export default function Market() {
    const [products, setProducts] = useState(['Cotton', 'Wheat', 'Corn']); // Add or remove products as needed
    const [selectedProduct, setSelectedProduct] = useState("Cotton");
    const [usdaData, setUsdaData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get(`/api/usdaData?product=${selectedProduct}`);
                if (response.data) {
                    setUsdaData(response.data);
                }
            } catch (error) {
                console.error("Error fetching USDA data:", error);
            }
        }

        fetchData();
    }, [selectedProduct]);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1>Market Predictions</h1>
            </header>

            <section className={styles.filterBar}>
                <label htmlFor="productSelect">Choose a product:</label>
                <select 
                    id="productSelect" 
                    value={selectedProduct} 
                    onChange={(e) => setSelectedProduct(e.target.value)}
                >
                    {products.map(product => (
                        <option key={product} value={product}>{product}</option>
                    ))}
                </select>
            </section>

            <section className={styles.graphSection}>
                <MarketChart data={usdaData} />
            </section>

            <footer className={styles.footer}>
                Footer Content Here
            </footer>
        </div>
    );
}
