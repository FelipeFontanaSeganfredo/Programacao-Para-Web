const livros1 = ["CSS3", "Javascript", "PHP"];
const livros2 = ["React", "HTML5,"];

// Maneira que não funciona
// const livros = livros1 + livros2;

const livros = [...livros1, ...livros2];

console.log(livros);

const precos = [90, 50, 95, 30, 98]

let precoMaior = Math.max(...precos); // Vai retornar NaN se não usar os "..." (spread)

console.log(precoMaior);

let objeto = { "id": 8, "nome": "Jorge" };

console.log(objeto);

// Alterar assim é possível, mas não é ótimo em alguns casos:

objeto.nome = "Jorge Bavaresco";

console.log(objeto);

// Para alterar objetos podemos usar spread:

let objetoAlterado = { ...objeto, "nome" : "Jorge Luis Boeira Bavaresco" };

console.log(objetoAlterado);
