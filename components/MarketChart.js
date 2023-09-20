import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

export default function MarketChart({ data: usdaData }) {  
    // Initial checks to handle null or undefined data.
    if (!usdaData || !usdaData.dataset || !usdaData.dataset.data) {
        return <p>Loading data...</p>;
    }

    console.log(usdaData);
    if (usdaData.dataset) {
        console.log("First data object:", usdaData.dataset.data[0]);
    }

    const labels = usdaData.dataset.data.map(entry => entry[0]);  // extract dates
    const dataValues = usdaData.dataset.data.map(entry => entry[1]);  // extract values

    const chartData = {
        labels: labels,
        datasets: [{
            label: `${usdaData.dataset.dataset_code} Prices`,  // Name of the product
            data: dataValues,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    return (
        <div>
            {chartData ? (
                <Line data={chartData} />
            ) : (
                <p>Data not available.</p>
            )}
        </div>
    );
}
