import MarketChart from '../components/MarketChart';
import styles from '../styles/Market.module.css'; 

export default function Market() {
    // Sample data for the chart. You'd replace this with your actual data.
    const chartData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
            {
                label: 'Historical Prices', // <-- This label will appear in the tooltip for the first dataset
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            },
            {
                label: 'Predicted Prices', // <-- This label will appear in the tooltip for the second dataset
                data: [14, 20, 4, 6, 3, 4],
                fill: false,
                borderColor: 'rgb(255, 99, 132)',
                tension: 0.1
            }
        ]
    };

    const chartOptions = {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: {
                enabled: true,
                mode: 'index',
                intersect: false,
            }
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.header}>Market Predictions</h1>

            {/* Graph Section */}
            <section className={styles.graphSection}>
                <MarketChart data={chartData} options={chartOptions} />
            </section>

            {/* Additional sections/components can go here */}
        </div>
    );
}
