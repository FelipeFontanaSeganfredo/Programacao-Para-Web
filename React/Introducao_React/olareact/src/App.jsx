import { useState } from 'react';
import './App.css';
import Titulo from './Titulo';
import Corpo from './Corpo';
import Calculo from './Calculo';
import Exibir from './Exibit';

function App() {

  const [contador, setContador] = useState(0);

  const mensagemAlerta = (mensagem) => {
    alert(mensagem);
  }

  return (
    <div>
      <h1>Seja bem vindo ao React</h1>
      <h1>Contador: {contador}</h1>
      <button onClick={() => setContador(contador+1)}>Incrementar</button>
      <button onClick={() => setContador(contador-1)}>Decrementar</button>
      <Titulo texto="Usando o componente título"/>
      <Titulo texto="Usando novamente o componente título"/>
      <Corpo mensagemAlerta={mensagemAlerta} dados={['React', 'Node', 'NPM', 'JSX']} contador={contador}/>
      <Calculo/>
      <Exibir/>
    </div>
  );
}

export default App;
