// server.js
import express from 'express'
import cors from 'cors'
const app = express ();
//const cors = require('cors');
//const app = express();
app.use(cors());
app.use(express.json());
app.post('/api/login', (req, res) => {
    const { usuario, senha } = req.body;
    if (usuario === 'admin' && senha === '1234') {
        res.json({
            status: 'sucesso', mensagem: 'Login realizado com sucesso!'
        });
    } else {
        res.json({
            status: 'erro', mensagem: 'Usuário ou senha inválidos.'
        });
    }
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000'))