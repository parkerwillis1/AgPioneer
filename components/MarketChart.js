import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js';
import { CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

// Register the necessary Chart.js components and plugins
Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

function MarketChart({ data, options }) {
    const improvedOptions = {
        // Ensure the legend is displayed
        plugins: {
            legend: {
                display: true,
                position: 'top'
            },
            tooltip: { // Ensure tooltips are enabled
                enabled: true,
                mode: 'index',
                intersect: false
            }
        },
        // Make the scales more user-friendly
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    callback: function(value, index, values) {
                        return '$' + value; // Display dollar sign before y-axis values
                    }
                }
            }
        },
        ...options // Merge with any other options passed in
    };

    return (
        <div style={{ width: '80%', height: '1000px', margin: '0 auto' }}> 
            <Line data={data} options={improvedOptions} />
        </div>
    );
}

export default MarketChart;
