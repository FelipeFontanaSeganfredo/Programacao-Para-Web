import { useState } from "react";
import './Form.css'

function Calcular() {

    const [altura, setAltura] = useState(0);

    const [peso, setPeso] = useState(0);

    const [IMC, setIMC] = useState(0);

    const alturaNum = Number(altura);
    const pesoNum = Number(peso);

    return (
      <>
        <div action="" className="form">
            <label>Altura: </label>
            <input type="number" value={altura} onChange={e => setAltura(e.target.value)}/>
            <label>Peso: </label>
            <input type="number" value={peso} onChange={e => setPeso(e.target.value)}/>
            <button onClick={()=> setIMC(pesoNum / (alturaNum*alturaNum))}>Calcular</button>
            {
                IMC !== 0 && <h2 style={{backgroundColor : IMC >= 25 ? 'red' : 'green'}}>IMC : {IMC}</h2>
            }
            
        </div>

      </>
    );
}

export default Calcular;