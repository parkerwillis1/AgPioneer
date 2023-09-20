// api/products.js

export default function handler(req, res) {
    const products = ["Cotton", "Wheat", "Rice"];  // You can update or fetch this list dynamically as per your application's requirement.
    res.status(200).json(products);
}
