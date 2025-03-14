import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Context from './Context';
import TelaInicial from './TelaInicial';
import FormInicial from "./FormInicial";
import SegundoForm from "./SegundoForm";
import TabelaResultados from "./TabelaResultados";

function App() {

  const [controle, setControle] = useState(0);
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [valorHora, setValorHora] =useState(0);
  const [horas, setHoras] = useState(0);

  function calcularSalarioBruto() {
    return valorHora * horas * 5;
  }

  function calcularInss() {
    let salario = calcularSalarioBruto();
    let inss = 0;
  
    if (salario > 8157.41) {
      salario = 8157.41;
    }
  
    if (salario <= 1518.00) {
      inss = salario * 0.075;
    } else if (salario <= 2793.88) {
      inss = (1518.00 * 0.075) + ((salario - 1518.00) * 0.09);
    } else if (salario <= 4190.84) {
      inss = (1518.00 * 0.075) + ((2793.88 - 1518.00) * 0.09) + ((salario - 2793.88) * 0.12);
    } else {
      inss = (1518.00 * 0.075) + ((2793.88 - 1518.00) * 0.09) + ((4190.84 - 2793.88) * 0.12) + ((salario - 4190.84) * 0.14);
    }
  
    return inss;
  }
  
  function calcularSalarioLiquido() {
    return calcularSalarioBruto() - calcularInss();
  }
  


  return (
    <>

    <Context.Provider value={{
      controle, setControle,
      nome, setNome,
      numero, setNumero,
      valorHora, setValorHora,
      horas, setHoras,
      calcularSalarioBruto, calcularInss, calcularSalarioLiquido
    }}>
    
    {
        controle === 0 && <TelaInicial/>
    }
    {
        controle === 1 && <FormInicial/>
    }
    {
        controle === 2 && <SegundoForm/>
    }
    {
        controle === 3 && <TabelaResultados/>
    }
    </Context.Provider>

    </>
  );
}

export default App;
