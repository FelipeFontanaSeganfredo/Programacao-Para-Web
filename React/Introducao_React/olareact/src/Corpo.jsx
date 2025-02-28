const Corpo = ({mensagemAlerta, dados, contador}) => {
    return (
        <>
            <h1>Componente corpo</h1>
            <button 
                onClick={() => mensagemAlerta("Usei a função recebida por props")}>Usando a função mensagem alerta
            </button>

            {
                // Abrindo bloco de javascript
                dados.map((linha, index) => (
                    <li key={index}>{linha}</li>
                ))
            }

            <h1>Contador do Corpo: {contador}</h1>
        </>
    )
}

export default Corpo;