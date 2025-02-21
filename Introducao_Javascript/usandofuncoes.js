const funcoes = require(`./funcoes`);

funcoes.ola();

funcoes.saida("Estou importando funcoes");

// Importar usando desestruturação

const {ola, saida} = require(`./funcoes`);

ola();
saida("Importei usando desestruturação!");
