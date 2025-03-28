const express = require('express');
const cors = require('cors');
const app = express();
const port = 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

let dataList = [];

const homePage = (req, res) => {
  res.send(`
    <h1>Bem-vindo à página inicial!</h1>
    <form action="/" method="post">
      <label for="name">Nome:</label>
      <input id="name" name="name" type="text" required />
      <br>
      <label for="height">Altura (m):</label>
      <input id="height" name="height" type="number" step="0.01" required />
      <br>
      <label for="weight">Peso (kg):</label>
      <input id="weight" name="weight" type="number" step="0.1" required />
      <br>
      <input type="submit" value="Enviar" />
    </form>
  `);
};

const deleteDataByIndex = (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= dataList.length) {
    return res.status(400).json({ error: "Índice inválido ou fora do alcance" });
  }

  dataList.splice(index, 1);

  res.status(200).json({ message: "Registro removido com sucesso" });
};

const getDataByIndex = (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= dataList.length) {
    return res.status(400).json({ error: "Índice inválido ou fora do alcance" });
  }

  res.status(200).json({ data: dataList[index] });
};

const recieveData = (req, res) => {
  const { name, height, weight } = req.body;

  if (!name || !height || !weight) {
    return res.status(400).json({ error: "Por favor, forneça nome, altura e peso." });
  }

  let imc = (Number(weight) / (Number(height) * Number(height))).toFixed(2);

  let classification = "";
  if (imc < 18.5) classification = "Abaixo do peso";
  else if (imc < 24.9) classification = "Peso normal";
  else if (imc < 29.9) classification = "Sobrepeso";
  else if (imc < 34.9) classification = "Obesidade Grau 1";
  else if (imc < 39.9) classification = "Obesidade Grau 2";
  else classification = "Obesidade Grau 3 (mórbida)";

  let dataObject = { name, height, weight, imc, classification };

  appendData(dataObject);

  res.json({ message: "Dados recebidos e armazenados com sucesso", data: dataObject });
};

const appendData = (dataObject) => {
  if (dataObject && typeof dataObject === "object") {
    dataList.push(dataObject);
  }
};

const showList = (req, res) => {
  res.json(dataList);
};

// Definição das rotas
app.get("/", homePage);
app.post("/", recieveData);
app.get("/list", showList);
app.get("/list/:index", getDataByIndex); 
app.delete("/list/:index", deleteDataByIndex);  

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
