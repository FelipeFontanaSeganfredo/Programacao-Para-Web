import React, { useContext } from "react";
import Context from "./Context";
import "./tabelaResultados.css";

export default function TabelaResultados() {
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

  const handleVoltar = () => {
    setControle(1);
  };

  return (
    <div className="tabela-container">
      <h2>Cálculo do INSS</h2>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Número de telefone</th>
            <th>Valor por Hora (R$)</th>
            <th>Horas Trabalhadas</th>
            <th>Salário Bruto</th>
            <th>Desconto INSS</th>
            <th>Salário Líquido</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{nome}</td>
            <td>{numero}</td>
            <td>{valorHora}</td>
            <td>{horas}</td>
            <td>R$ {calcularSalarioBruto().toFixed(2)}</td>
            <td>R$ {calcularInss().toFixed(2)}</td>
            <td>R$ {calcularSalarioLiquido().toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
}