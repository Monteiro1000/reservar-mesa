// server.js
import express from 'express'
import cors from 'cors'
const app = express ();
//const cors = require('cors');
//const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/reserva', (req, res) => {
    const { nome, mesa, horario, pessoas } = req.body;
    const mensagem = `Nome: ${nome}, Mesa: ${mesa}, horario: ${horario}, pessoas: ${pessoas}`;
    res.json({mensagem})
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))