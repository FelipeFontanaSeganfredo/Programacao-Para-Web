import React, { createContext, useContext, useState, useEffect } from "react";
import { Container, Button, Form, Card } from "react-bootstrap";

// Criando o Contexto
const SalarioContext = createContext();

const SalarioProvider = ({ children }) => {
  const [step, setStep] = useState(0); 
  const [dados, setDados] = useState({
    nome: "",
    telefone: "",
    horasPorSemana: "",
    valorPorHora: "",
    salarioBruto: 0,
    salario: 0,
    inss: 0,
    salarioLiquido: 0,
  });

  useEffect(() => {
    const usuarioLogado = localStorage.getItem("usuario") || "Usuário";
    setDados((prevDados) => ({ ...prevDados, nome: usuarioLogado }));
  }, []);

  const calcularSalario = () => {
    const semanasNoMes = 5;
    const salarioBruto = dados.horasPorSemana * dados.valorPorHora * semanasNoMes;
    let inss = 0;
    let salario = 0;

    if (salarioBruto > 8157.41) {
        salario = 8157.41;
    }
    else if (salarioBruto <= 8157.41)
    {
        salario = salarioBruto;
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

    const salarioLiquido = salarioBruto - inss;

    setDados({ ...dados, salarioBruto, inss, salarioLiquido });
    setStep(3);
  };

  return (
    <SalarioContext.Provider value={{ step, setStep, dados, setDados, calcularSalario }}>
      {children}
    </SalarioContext.Provider>
  );
};

const TelaInicial = () => {
  const { setStep } = useContext(SalarioContext);
  return (
    <Container className="text-center mt-5">
      <Card className="p-5 shadow">
        <h2>Calculadora de INSS</h2>
        <Button variant="primary" className="mt-3" onClick={() => setStep(1)}>
          Iniciar
        </Button>
      </Card>
    </Container>
  );
};

const TelaTelefone = () => {
  const { setStep, dados, setDados } = useContext(SalarioContext);
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3>Informe seu telefone</h3>
        <Form>
          <Form.Group>
            <Form.Label>Telefone</Form.Label>
            <Form.Control
              type="text"
              value={dados.telefone}
              onChange={(e) => setDados({ ...dados, telefone: e.target.value })}
            />
          </Form.Group>
          <Button variant="success" className="mt-3" onClick={() => setStep(2)}>
            Avançar
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

const TelaHorasSalario = () => {
  const { calcularSalario, dados, setDados } = useContext(SalarioContext);
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3>Informe seu salário</h3>
        <Form>
          <Form.Group>
            <Form.Label>Horas por Semana</Form.Label>
            <Form.Control
              type="number"
              value={dados.horasPorSemana}
              onChange={(e) => setDados({ ...dados, horasPorSemana: e.target.value })}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Valor por Hora</Form.Label>
            <Form.Control
              type="number"
              value={dados.valorPorHora}
              onChange={(e) => setDados({ ...dados, valorPorHora: e.target.value })}
            />
          </Form.Group>
          <Button variant="primary" className="mt-3" onClick={calcularSalario}>
            Concluir
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

const TelaResumo = () => {
  const { dados } = useContext(SalarioContext);
  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3>Resumo do Cálculo</h3>
        <p><strong>Nome:</strong> {dados.nome}</p>
        <p><strong>Telefone:</strong> {dados.telefone}</p>
        <p><strong>Salário Bruto:</strong> R$ {dados.salarioBruto.toFixed(2)}</p>
        <p><strong>Desconto INSS:</strong> R$ {dados.inss.toFixed(2)}</p>
        <p><strong>Salário Líquido:</strong> R$ {dados.salarioLiquido.toFixed(2)}</p>
      </Card>
    </Container>
  );
};

const Inss = () => {
  return (
    <SalarioProvider>
      <InssContent />
    </SalarioProvider>
  );
};

const InssContent = () => {
  const { step } = useContext(SalarioContext);

  return (
    <>
      {step === 0 && <TelaInicial />}
      {step === 1 && <TelaTelefone />}
      {step === 2 && <TelaHorasSalario />}
      {step === 3 && <TelaResumo />}
    </>
  );
};

export default Inss;
