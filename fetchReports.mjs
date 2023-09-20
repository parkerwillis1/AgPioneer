import axios from 'axios';
import fs from 'fs';

const API_ENDPOINT = 'https://marsapi.ams.usda.gov/services/v1.1/reports';
const API_KEY = 'rscaGmY9VNYa5CMA9D9kwSuPqv6rSL0DJXoWhphaVk8='; // Replace with your actual API key

axios.get(API_ENDPOINT, {
    headers: {
        'Authorization': 'Basic ' + Buffer.from(API_KEY + ':').toString('base64')
    }
})
.then(response => {
    fs.writeFileSync('output.json', JSON.stringify(response.data, null, 2));
    console.log("Data saved to output.json");
})
.catch(error => {
    console.error("Error fetching reports:", error);
});


