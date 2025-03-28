import React, { useState, useEffect } from "react";
import './styles.css'

const API_URL = "http://localhost:3002";

function IMCCalculator() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [imcData, setImcData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Função para buscar os cálculos já realizados
  const fetchIMCData = async () => {
    try {
      const response = await fetch(`${API_URL}/list`);
      const data = await response.json();
      setImcData(data);
    } catch (error) {
      console.error("Erro ao buscar a lista de IMCs:", error);
    }
  };

  // Chamar fetchIMCData ao carregar a página
  useEffect(() => {
    fetchIMCData();
  }, []);

  // Função para calcular o IMC
  const calculateIMC = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          height: parseFloat(height),
          weight: parseFloat(weight),
        }),
      });

      const result = await response.json();
      alert("IMC calculado com sucesso!");
      fetchIMCData(); // Atualizar a lista após o cálculo
    } catch (error) {
      alert("Erro ao calcular o IMC!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Função para deletar um cálculo
  const deleteIMC = async (index) => {
    try {
      await fetch(`${API_URL}/list/${index}`, { method: "DELETE" });
      alert("Cálculo removido com sucesso!");
      fetchIMCData(); // Atualizar a lista após remoção
    } catch (error) {
      alert("Erro ao excluir o cálculo!");
      console.error(error);
    }
  };

  return (
    <div className = "container">
      <h1>Calculadora de IMC</h1>

      {/* Formulário para calcular o IMC */}
      <form onSubmit={calculateIMC}>
        <label>Nome:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />

        <label>Altura (m):</label>
        <input type="number" step="0.01" value={height} onChange={(e) => setHeight(e.target.value)} required />

        <label>Peso (kg):</label>
        <input type="number" step="0.1" value={weight} onChange={(e) => setWeight(e.target.value)} required />

        <button type="submit" disabled={loading}>{loading ? "Calculando..." : "Calcular IMC"}</button>
      </form>

      <h2>Histórico de Cálculos</h2>
      {imcData.length === 0 ? (
        <p>Nenhum cálculo realizado.</p>
      ) : (
        <ul>
          {imcData.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - IMC: {item.imc} ({item.classification})
              <button onClick={() => deleteIMC(index)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default IMCCalculator;
