import { useState } from "react";
// reservarForm.jsx
function reservaForm() {
    const [nome, setNome] = useState('');
    const [mesa, setMesa] = useState('');
    const [horario, setHorario] = useState('');   
    const [pessoas, setPessoas] = useState('');
    const [mensagem, setMensagem] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resposta = await fetch('http://localhost:3000/api/reserva', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, mesa, horario, pessoas })
        });
        const dados = await resposta.json();
        setMensagem(dados); 
    };

    return (
        <div className="App">
            <h1>Reserva de mesas</h1>
            <form onSubmit={handleSubmit}>

                <div id="nome">

                <p>Nome</p><br/>
                <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                </div>
                

                <div id="mesa">
                    <p>Mesa</p>
                    <select name="mesa" id="imesa" value={mesa} onChange={(e) => setMesa(e.target.value)} >
                        <option value="">Escolha a sua mesa</option>
                        <option value="mesa1">Mesa 1</option>
                        <option value="mesa2">Mesa 2</option>
                        <option value="mesa3">Mesa 3</option>
                        <option value="mesa4">Mesa 4</option>
                        <option value="mesa5">Mesa 5</option>

                    </select>
                </div>

                <div id="horario">
                    <p>horário</p>
                    <select name="horario" id="ihorario" value={horario} onChange={(e) => setHorario(e.target.value)} >
                        <option value="almoco">Almoço</option>
                        <option value="jantar">Jantar</option>


                    </select>
                </div>

                <div id="pessoas">
                    <p>Pessoas</p>
                    <select name="pessoas" id="ipessoas" value={pessoas} onChange={(e) => setPessoas(e.target.value)} >
                        <option value="pessoa1"> 1</option>
                        <option value="pessoa2"> 2</option>
                        <option value="pessoa3"> 3</option>
                        <option value="pessoa4"> 4</option>
                    </select>

                </div>
                <p>{mensagem.mensagem}</p>

                <button type="submit">Reservar</button>

            </form>


        </div>
    );
}

export default reservaForm;