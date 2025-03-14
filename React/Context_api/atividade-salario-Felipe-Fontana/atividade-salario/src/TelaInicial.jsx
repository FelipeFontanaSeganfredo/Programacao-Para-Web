import React, {useContext} from "react";

import './telaInicial.css'

import Context from "./Context";

export default function TelaInicial() {

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
      

  return (
    <div>
      <button type="button" class="button" onClick={() => setControle(controle + 1)}>
        Iniciar
      </button>
    </div>
  );
}