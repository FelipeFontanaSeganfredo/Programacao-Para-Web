import React, { useContext, useState } from "react";

import Context from "./Context";

import './form.css'

export default function FormInicial() {

  const context = useContext(Context);

    if (!context) {
    throw new Error("Contexto não encontrado. Verifique o Provider.");
    }

    const {
      controle, setControle,
      nome, setNome,
      numero, setNumero,
      valorHora, setValorHora,
      horas, setHoras,
      calcularSalarioBruto, calcularInss, calcularSalarioLiquido
    } = useContext(Context);
    

  const [inputNome, setInputNome] = useState("");
  const [inputNumero, setInputNumero] = useState("");
  const s = "Valor de hora de trabalho (R$):";

  const handleAvancar = () => {
    if (inputNome && inputNumero) {
      setNome(inputNome)
      setNumero(inputNumero)
      setControle(controle + 1)
    } else {
      alert("Preencha todos os campos antes de continuar!");
    }
  };

  return (
    <div className="form-container">
      <h2>Informe os dados</h2>
      <form>
        <div className="input-group">
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" placeholder="Digite seu nome" required onChange={e => setInputNome(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="numero">Número de telefone</label>
          <input type="text" id="numero" placeholder="Digite seu número" required onChange={e => setInputNumero(e.target.value)}/>
        </div>
        <button type="button" class="button" onClick={handleAvancar}>
        Avançar
        </button>
      </form>
    </div>
  );
}