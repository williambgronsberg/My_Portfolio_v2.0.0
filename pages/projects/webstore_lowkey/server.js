import express from 'express';
import fetch from 'node-fetch';

const app = express();
const PORT = 3000;
const PRINTFUL_API_KEY = "DXukOFzgynTL6bKSkJLr2MfPXjjSj0kAEsaxCnKK"; // Your API key

app.use(express.json());

// Fetch products from Printful
app.get('/api/products', async (req, res) => {
    try {
        const response = await fetch('https://api.printful.com/store/products', {
            headers: { 'Authorization': `Bearer ${PRINTFUL_API_KEY}` }
        });

        const data = await response.json();
        res.json(data.result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
