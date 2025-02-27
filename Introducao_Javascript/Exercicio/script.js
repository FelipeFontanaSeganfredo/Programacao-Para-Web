const funcoes = require('./funcoes')
const fs = require('fs');


funcoes.a('meuarquivo.txt');

let objeto = {
    nome: "React", 
    ano: 2020
}

funcoes.b(objeto, 'meuarquivo.txt');
