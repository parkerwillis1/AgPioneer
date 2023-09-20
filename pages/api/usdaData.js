import axios from 'axios';

export default async function handler(req, res) {
    try {
        const product = req.query.product;
        
        // Placeholder for the endpoint of the product (e.g., Cotton)
        let endpoint = '';
        
        if (product === "Cotton") {
            endpoint = 'OPEC/ORB';  // Replace with the correct Nasdaq Data Link code for Cotton
            
            const response = await axios.get(`https://data.nasdaq.com/api/v3/datasets/${endpoint}.json?api_key=${process.env.NASDAQ_API_KEY}`);
            
            // Extracting relevant data from the response
            const relevantData = response.data.dataset.data.map(entry => ({
                Date: entry[0],
                Close: entry[4]  // Assuming 'Close' price is in the fifth position; adjust if different
            }));
            
            return res.status(200).json(relevantData);
        }

        // You can add more fetching logic for other products here...

        return res.status(404).json({ message: "Product not found" });
    } catch (error) {
        console.error("Error fetching product list:", error, error.response);
        return res.status(error.response?.status || 500).json({ message: "An error occurred fetching the data." });
    }
}

