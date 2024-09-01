const express = require('express');
const rotas = require('./routes');

const app = express();

app.use(express.json());
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));