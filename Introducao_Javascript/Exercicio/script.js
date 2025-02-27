const funcoes = require('./funcoes')

funcoes.a('meuarquivo.txt');

let objeto = {
    nome: "React", 
    ano: 2020
}

//funcoes.b(objeto, 'meuarquivo.txt');

console.log('Após inserção: ');
funcoes.a('meuarquivo.txt');

console.log(funcoes.c('React', 'meuarquivo.txt'));

funcoes.d('React', 'meuarquivo.txt');
