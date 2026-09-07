const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        application: 'hospital-materials-api',
        version: 'v1'
    });
});

app.get('/config', (req, res) => {
    res.json({
        ambiente: process.env.AMBIENTE || 'nao-definido',
        apiKeyConfigured: Boolean(process.env.API_KEY)
    });
});

app.listen(port, () => {
    console.log(`Aplicação disponível na porta ${port}`);
});