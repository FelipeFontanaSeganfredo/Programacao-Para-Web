const fs = require(`fs`);

let arquivo = `meuarquivo.txt`;

const livros = [{"nome" : "CSS3", "ano" : 2020}, {"nome" : "HTML5", "ano" : 2018}];

// Escrever no disco
//fs.writeFileSync(arquivo, JSON.stringify(livros));


// ler arquivo do disco
let dadosArquivo = fs.readFileSync(arquivo).toString('UTF-8');

console.log(dadosArquivo);

// tem que fazer o parse para poder usar como objeto java script
let dadosJSON = JSON.parse(dadosArquivo);

console.log(dadosJSON[0]);