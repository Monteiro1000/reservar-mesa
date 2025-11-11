// server.js
import express from 'express'
import cors from 'cors'
const app = express ();
//const cors = require('cors');
//const app = express();

app.use(cors());
app.use(express.json());

let reservas = [];

app.post('/api/reserva', (req, res) => {
    const { nome, mesa, horario, pessoas } = req.body;

    if(nome === "" || mesa === "" || horario === "" || pessoas === "") {
        res.json({
            mensagem: `Preencha todos os dados corretamente!`
        });
    } else {
        res.json({
            mensagem: `Reserva feita`,
            reservas: reservas
        });
    }

    const novaReserva = { id: Date.now(), nome, mesa, horario, pessoas };
    reservas.push(novaReserva);

    // res.json({
    //     reservas
    // });
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))