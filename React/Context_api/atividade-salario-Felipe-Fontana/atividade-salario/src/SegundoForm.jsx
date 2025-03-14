import React, { useContext, useState } from "react";
import Context from "./Context";
import "./form.css";

export default function SegundoForm() {

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
      

  const [inputHoras, setInputHoras] = useState("");
  const [inputValorHora, setInputValorHora] = useState("");
  const s = "Valor de hora de trabalho (R$):";

  const handleAvancar = () => {
    if (inputHoras && inputValorHora) {
      setHoras(inputHoras);
      setValorHora(inputValorHora);
      setControle(controle + 1);
    } else {
      alert("Preencha todos os campos antes de continuar!");
    }
  };

  return (
    <div className="form-container">
      <h2>Informe os dados</h2>
      <form>
        <div className="input-group">
          <label htmlFor="horas">Horas trabalhadas na semana</label>
          <input 
            type="number" 
            id="horas" 
            placeholder="Digite a quantidade de horas trabalhadas" 
            required 
            value={inputHoras}
            onChange={(e) => setInputHoras(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="valorHora">{s}</label>
          <input 
            type="number" 
            id="valorHora" 
            placeholder="Digite o valor da hora trabalhada" 
            required 
            value={inputValorHora}
            onChange={(e) => setInputValorHora(e.target.value)}
          />
        </div>
        <button type="button" className="button" onClick={handleAvancar}>
          Avançar
        </button>
      </form>
    </div>
  );
}
