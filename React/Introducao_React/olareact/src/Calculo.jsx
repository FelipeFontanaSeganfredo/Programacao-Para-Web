import { useState, useEffect } from "react";

function Calculo() {

    const [valor1, setvalor1] = useState(0);

    const [valor2, setvalor2] = useState(0);

    const [resultado, setResultado] = useState(0);

    useEffect( () => {
        console.log('Chamou o useEffect na primeira renderização')
    }, []);

    useEffect ( () => {
        console.log('Modificou o valor do estado valor1');
    }, [valor1]);

    useEffect ( () => {
        console.log('Modificou o valor do estado valor2');
    }, [valor2]);

    return (
        <>
            <div>
                <label>Valor 1:</label>
                <input type="number" value={valor1} onChange={e => setvalor1(e.target.value)}/>
            </div>
            <div>
                <label>Valor 2:</label>
                <input type="number" value={valor2} onChange={e => setvalor2(e.target.value)}/>
            </div>
            
            <button onClick={() => setResultado(Number(valor1)+Number(valor2))}>+</button>
            <button onClick={() => setResultado(Number(valor1)-Number(valor2))}>-</button>
            <button onClick={() => setResultado(Number(valor1)/Number(valor2))}>/</button>
            <button onClick={() => setResultado(Number(valor1)*Number(valor2))}>*</button>

            <h1>Valor 1: {valor1}</h1>
            <h1>Valor 2: {valor2}</h1>
            {
                resultado !== 0 &&
                <h1 style={{backgroundColor : resultado >= 20 ? 'red' : 'blue'}}>
                    Rsultado: {resultado}</h1>
            }

        </>
    )
}

export default Calculo;