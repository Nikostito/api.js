require('dotenv').config();
const axios = require('axios');
const express = require('express');
const app = express();

// Get the API key and DB URL from environment variables
const apiKey = process.env.API_KEY;
const dbUrl = process.env.DB_URL;

app.get('/', async (req, res) => {
    if (!apiKey || !dbUrl) {
        return res.status(400).json({ error: 'API key invalid.' });
    }

    try {
        const response = await axios.get(`${dbUrl}?key=${apiKey}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
