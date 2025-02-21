// Conceitos de programação funcional

const livros = [{"nome" : "CSS3", "ano" : 2020}, {"nome" : "HTML5", "ano" : 2018}];

// para iterar, pode-se pegar o index
livros.map((livro, index) => {
    console.log("Nome: " + livro.nome + " Ano: " + livro.ano + " Indice: " + index + "\n");
})

// filter, retorna um array

let livrosFiltrados = livros.filter((livro) => livro.ano > 2019);

console.log(livrosFiltrados);

// find vai retornar um objeto

let objeto = livros.find((livro) => livro.nome === "HTML5");

console.log(objeto);