import { useState } from "react";
// reservarForm.jsx
function reservaForm() {
    const [nome, setNome] = useState('');
    const [mesa, setMesa] = useState('');
    const [horario, setHorario] = useState('');
    const [pessoas, setPessoas] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [reservas, setReservas] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const resposta = await fetch('http://localhost:3000/api/reserva', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome, mesa, horario, pessoas })
        });
        const dados = await resposta.json();
        setMensagem(dados.mensagem);
        setReservas(dados.reservas)
    };

    return (
        <div className="App">
            <div className="reserva">

                <h1>Reserva de mesas</h1>
                <form onSubmit={handleSubmit}>

                    <div id="nome">

                        <p>Nome</p><br />
                        <input type="text" placeholder="Digite seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />

                    </div>


                    <div id="mesa">
                        <p>Mesa</p>
                        <select name="mesa" id="imesa" value={mesa} onChange={(e) => setMesa(e.target.value)} >
                            <option value="">Escolha a sua mesa</option>
                            <option value="1">Mesa 1</option>
                            <option value="2">Mesa 2</option>
                            <option value="3">Mesa 3</option>
                            <option value="4">Mesa 4</option>
                            <option value="5">Mesa 5</option>

                        </select>
                    </div>

                    <div id="horario">
                        <p>horário</p>
                        <select name="horario" id="ihorario" value={horario} onChange={(e) => setHorario(e.target.value)} >
                            <option value="">Selecione um horário</option>
                            <option value="almoco">Almoço</option>
                            <option value="jantar">Jantar</option>


                        </select>
                    </div>

                    <div id="pessoas">
                        <p>Pessoas</p>
                        <select name="pessoas" id="ipessoas" value={pessoas} onChange={(e) => setPessoas(e.target.value)} >
                            <option value="">Selecione a quantidade de pessoas</option>
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                        </select>

                    </div>
                    <p className="pcolor">{mensagem}</p>

                    <button type="submit">Reservar</button>

                </form>

                

            </div>

            <div className="traco">

            </div>

            <div className="status">
                <h1>Status</h1>
                <ul className="lista_status">
                    {reservas && reservas.length > 0 ? (
                    reservas.map((r, i) => (
                        <li key={i}>Mesa {r.mesa} - {r.horario} - {r.nome} ({r.pessoas}(as))</li>
                    ))
                    ) : (
                        <li>Nenhuma reserva registrada ainda.</li>
                    )}
                </ul>
            </div>


        </div>
    );
}

export default reservaForm;