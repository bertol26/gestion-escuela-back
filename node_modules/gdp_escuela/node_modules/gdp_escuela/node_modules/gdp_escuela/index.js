
require('dotenv').config();
const express = require('express')
const app = express();
const usuarioRutas = require('./routes/usuarioRoutes');

app.use(express.json());
app.use('/api', usuarioRutas)

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});